import { postsRepository } from "src/modules/posts/posts.repository";


export class DeleteService {
    deletePost(userId:string) {
    return postsRepository.deletePost(userId);
  }
  }

  export const deleteService = new DeleteService();