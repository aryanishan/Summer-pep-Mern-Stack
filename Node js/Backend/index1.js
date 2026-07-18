import express from "express";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const dataFile = fileURLToPath(new URL("./data.json", import.meta.url));

async function readData() {
    try {
        const file = await readFile(dataFile, "utf-8");
        return JSON.parse(file);
    } catch (error) {
        if (error.code === "ENOENT") {
            return [];
        }
        throw error;
    }
}

async function saveData(data) {
    await writeFile(dataFile, JSON.stringify(data, null, 2));
}

// Home Route
app.get("/", (req, res) => {
    res.json({
        message: "Express File API is running..."
    });
});

// Get All Data
app.get("/data", async (req, res) => {
    try {
        const data = await readData();
        res.json(data);
    } catch (error) {
        res.status(500).json({
            error: "Unable to read data."
        });
    }
});

// Get Single Data
app.get("/data/:id", async (req, res) => {
    try {
        const data = await readData();

        const item = data.find(
            (user) => user.id === Number(req.params.id)
        );

        if (!item) {
            return res.status(404).json({
                error: "Data not found"
            });
        }

        res.json(item);
    } catch (error) {
        res.status(500).json({
            error: "Unable to read data."
        });
    }
});

// Create Data
app.post("/data", async (req, res) => {

    console.log("Request Body:", req.body);

    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: "Request body is required"
        });
    }

    try {
        const data = await readData();

        const newUser = {
            id: Date.now(),
            ...req.body
        };

        data.push(newUser);

        await saveData(data);

        res.status(201).json({
            message: "Data saved successfully",
            data: newUser
        });

    } catch (error) {
        res.status(500).json({
            error: "Unable to save data."
        });
    }
});

// Update Data
app.patch("/data/:id", async (req, res) => {

    try {
        const data = await readData();

        const index = data.findIndex(
            (user) => user.id === Number(req.params.id)
        );

        if (index === -1) {
            return res.status(404).json({
                error: "Data not found"
            });
        }

        data[index] = {
            ...data[index],
            ...req.body
        };

        await saveData(data);

        res.json({
            message: "Data updated successfully",
            data: data[index]
        });

    } catch (error) {
        res.status(500).json({
            error: "Unable to update data."
        });
    }
});

// Delete Data
app.delete("/data/:id", async (req, res) => {

    try {

        const data = await readData();

        const updatedData = data.filter(
            (user) => user.id !== Number(req.params.id)
        );

        if (updatedData.length === data.length) {
            return res.status(404).json({
                error: "Data not found"
            });
        }

        await saveData(updatedData);

        res.json({
            message: "Data deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            error: "Unable to delete data."
        });
    }
});

// 404 Route
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});