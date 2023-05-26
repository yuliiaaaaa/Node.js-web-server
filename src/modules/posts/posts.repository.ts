
import { CreatePostDto } from "./dto/create-post.dto";
import { PostEntity } from "./post.entity";
import * as uuid from "uuid";

const posts: PostEntity[] = [];

class PostsRepository {
  create(dto: CreatePostDto) {
    const post: PostEntity = {
      id: uuid.v4(), ...dto,
    };
    posts.push(post);
    console.log(posts);
    return post;
  }
  deletePost(userId:string){
    const index = posts.findIndex((post: { id: string; }) => post.id === userId);
    if (index !== -1) {
      posts.splice(index, 1);
  }
  }
  getUsers(){
 return posts;
  }
  getUserById(userId:string){
   for(let i=0;i<posts.length;i++){
    if(userId===posts[i].id){
      return posts[i];
    }
   }
  }
  upgrade(userId:string,updatedData:PostEntity) {
    for(let i=0;i<posts.length;i++){
      if(userId===posts[i].id){
        posts[i] = { ...posts[i], ...updatedData };
      return posts[i];
      }
  }
}
}
export const postsRepository = new PostsRepository();
