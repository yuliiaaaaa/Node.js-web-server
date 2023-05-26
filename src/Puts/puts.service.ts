import { PostEntity } from "src/modules/posts/post.entity";
import { postsRepository } from "src/modules/posts/posts.repository";


export class PutService {
    putPost(userId:string,updatedData:PostEntity) {
    return postsRepository.upgrade(userId,updatedData);
  }
  }

  export const putservice = new PutService();