import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private toValidate(metatype: any): boolean {
    const types: any[] = [String, Number, Boolean, Array, Object];
    return !types.includes(metatype);
  }
}