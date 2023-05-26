import { IsString, Length } from "class-validator";

export class CreatePostDto {
  @IsString()
  @Length(5, 255)
  username = "";

  @IsString()
  name = "";
}
