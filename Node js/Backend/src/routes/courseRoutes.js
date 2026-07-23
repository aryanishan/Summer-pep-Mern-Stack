import { Router } from "express";
import { courses } from "../controllers/courses";

const router = Router();

router.get('/getCourses', courses);

router.get('/getCourses/:id', courses);

router.post('/getCourses', courses);

export default router;