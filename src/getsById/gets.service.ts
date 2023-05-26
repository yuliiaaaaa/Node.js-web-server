import { postsRepository } from "src/modules/posts/posts.repository";


export class GetsService {
    getPostById(userId:string) {
    return postsRepository.getUserById(userId);
  }
  }

  export const getsServiceById = new GetsService();