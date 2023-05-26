import { Router } from "express";

import { getsServiceById } from "./gets.service";



const router = Router();

router.get("/:id", (req, res) => {
    const usertId = req.params.id;
    const posts=getsServiceById.getPostById(usertId);
    getsServiceById.getPostById(usertId);
  res.status(200).send(posts)});

export const getsControllerById = router;
