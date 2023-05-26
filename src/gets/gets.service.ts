import { postsRepository } from "src/modules/posts/posts.repository";


export class GetsService {
    getPost() {
    return postsRepository.getUsers();
  }
  }

  export const getsService = new GetsService();