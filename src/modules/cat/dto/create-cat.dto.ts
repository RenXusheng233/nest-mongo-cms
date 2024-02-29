import { IsInt, IsString, Length, Max, Min } from 'class-validator';

export class CreateCatDto {
  @Length(1, 99)
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  @Max(99)
  age: number;

  @IsString()
  @Length(1, 99)
  breed: string;
}
