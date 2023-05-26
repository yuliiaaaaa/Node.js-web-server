import { Expose } from "class-transformer";

export class PostSerializer {
  @Expose()
  id = "";

  @Expose()
  username = "";
 
  @Expose()
  name="";
}
