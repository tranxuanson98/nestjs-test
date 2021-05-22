import { Module } from '@nestjs/common';
import { BroadsController } from './broads.controller';
import { BroadsService } from './broads.service';
import { BroadSchema } from './schemas/broad.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Broad', schema: BroadSchema }])],
  controllers: [BroadsController],
  providers: [BroadsService],
})
export class BroadsModule { }
