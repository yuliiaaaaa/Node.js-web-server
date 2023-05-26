import { Router } from "express";
import { deleteService } from "./deletes.service";

const router = Router();

router.delete("/:id", (req, res) => {
const usertId = req.params.id;
deleteService.deletePost(usertId);
  res.status(200).json({ message: 'User successfully deleted with id' +`${usertId}`  });
});

export const deleteController = router;
