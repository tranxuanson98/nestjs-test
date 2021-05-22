import { Broad } from './interface/broad.interface';
import { Model } from 'mongoose';
export declare class BroadsService {
    private readonly broadModel;
    constructor(broadModel: Model<Broad>);
    findAll(): Promise<Broad[]>;
    findOne(id: string): Promise<Broad>;
    create(broad: Broad): Promise<Broad>;
    delete(id: string): Promise<Broad>;
    update(id: string, broad: Broad): Promise<Broad>;
}
