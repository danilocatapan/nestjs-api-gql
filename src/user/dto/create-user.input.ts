import { InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, IsEmail } from "class-validator"

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'The name field cannot be empty' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'The email field cannot be empty!' })
  email: string;
}