import { CreateBroadDto } from './dto/create-broad.dto';
import { BroadsService } from './broads.service';
import { Broad } from './interface/broad.interface';
export declare class BroadsController {
    private readonly broadsService;
    constructor(broadsService: BroadsService);
    findAll(): Promise<Broad[]>;
    findOne(id: any): Promise<Broad>;
    create(createBroadDto: CreateBroadDto): Promise<Broad>;
    delete(id: any): Promise<Broad>;
    update(id: any, createBroadDto: CreateBroadDto): Promise<Broad>;
}
