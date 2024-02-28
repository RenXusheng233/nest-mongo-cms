import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { Dog } from './schemas/dog.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { UpdateDogDto } from './dto/update-dog.dto';

@Injectable()
export class DogService {
  @InjectModel(Dog.name)
  private dogModel: Model<Dog>;

  async create(createDogDto: CreateDogDto): Promise<Dog> {
    const createDog = new this.dogModel(createDogDto);
    return createDog.save();
  }

  async findAll(): Promise<Dog[]> {
    return this.dogModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} dog`;
  // }

  // update(id: number, updateDogDto: UpdateDogDto) {
  //   return `This action updates a #${id} dog`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} dog`;
  // }
}
