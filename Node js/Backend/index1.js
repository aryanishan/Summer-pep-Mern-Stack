import express from "express";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const app = express();
const port = process.env.PORT || 5000;
const dataFile = fileURLToPath(new URL("./data.json", import.meta.url));

app.use(express.json());

async function readData() {
  try {
    const fileContents = await readFile(dataFile, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    // If data.json does not exist yet, start with an empty array.
    if (error.code === "ENOENT" || error instanceof SyntaxError) return [];
    throw error;
  }
}

async function saveData(data) {
  await writeFile(dataFile, JSON.stringify(data, null, 2));
}

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Express file API is running" });
});

app.get("/data", async (req, res) => {
  try {
    res.json(await readData());
  } catch {
    res.status(500).json({ error: "Unable to read data file" });
  }
});

app.post("/data", async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "Request body is required" });
  }

  try {
    const data = await readData();
    const newItem = { id: Date.now(), ...req.body };
    data.push(newItem);
    await saveData(data);
    res.status(201).json({ message: "Data saved", data: newItem });
  } catch {
    res.status(500).json({ error: "Unable to write data file" });
  }
});

app.get("/data/:id", async (req, res) => {
  try {
    const data = await readData();
    const item = data.find((entry) => entry.id === Number(req.params.id));
    if (!item) return res.status(404).json({ error: "Data not found" });
    res.json(item);
  } catch {
    res.status(500).json({ error: "Unable to read data file" });
  }
});

app.delete("/data/:id", async (req, res) => {
  try {
    const data = await readData();
    const updatedData = data.filter((entry) => entry.id !== Number(req.params.id));
    if (updatedData.length === data.length) {
      return res.status(404).json({ error: "Data not found" });
    }
    await saveData(updatedData);
    res.json({ message: "Data deleted" });
  } catch {
    res.status(500).json({ error: "Unable to write data file" });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});