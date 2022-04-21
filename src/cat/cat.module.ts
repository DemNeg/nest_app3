/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatController } from './controlers/cat.controller';
import { CatSchema } from './models/cat.model';
import { CatService } from './services/cat.service';

@Module({
  imports: [MongooseModule.forFeature([{name:'Cat',schema: CatSchema}])],
  controllers: [CatController],
  providers: [CatService]
})
export class CatModule {}
