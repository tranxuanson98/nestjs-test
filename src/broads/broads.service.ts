import { Injectable } from '@nestjs/common';
import { Broad } from './interface/broad.interface'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class BroadsService {
    constructor(
        @InjectModel('Broad') private readonly broadModel: Model<Broad>
    ) {

    }
    // private readonly broads: Broad[] = [
    //     {
    //         id: "12312312",
    //         name: "Broad one",
    //         qty: 100,
    //         description: "This is Broad one"
    //     },
    //     {
    //         id: "232323",
    //         name: "Broad two",
    //         qty: 200,
    //         description: "This is Broad two"
    //     },
    //     {
    //         id: "343434",
    //         name: "Broad three",
    //         qty: 300,
    //         description: "This is Broad three"
    //     },
    // ]

    async findAll(): Promise<Broad[]> {
        return await this.broadModel.find();
    }

    async findOne(id: string): Promise<Broad> {
        return await this.broadModel.findOne({ _id: id });
    }

    async create(broad: Broad): Promise<Broad> {
        const newBroad = new this.broadModel(broad);
        return await newBroad.save();
    }

    async delete(id: string): Promise<Broad> {
        return await this.broadModel.findByIdAndRemove(id);
    }

    async update(id: string, broad: Broad): Promise<Broad> {
        return await this.broadModel.findByIdAndUpdate(id, broad, { new: true });
    }
}
