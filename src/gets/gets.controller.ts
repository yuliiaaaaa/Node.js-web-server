import { Router } from "express";
import { getsService } from "./gets.service";


const router = Router();

router.get("/", (req, res) => {
    const posts=getsService.getPost();
    getsService.getPost();
  res.status(200).send(posts)});

export const getsController = router;
