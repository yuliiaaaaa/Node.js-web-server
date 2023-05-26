import { Router } from "express";
import { putservice } from "./puts.service";

const router = Router();

router.put("/:id", (req, res) => {
const usertId = req.params.id;
const updatedata = req.body;
const updatedPost = putservice.putPost(usertId, updatedata);
putservice.putPost(usertId,updatedata);
  res.status(200).json({ message: 'User successfully updated with id' +`${usertId}`, updatedPost: updatedPost, });
});

export const putController = router;
