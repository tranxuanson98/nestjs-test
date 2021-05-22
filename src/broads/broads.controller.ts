import { Body, Controller, Get, Post, Req, Res, Param, Delete, Put } from '@nestjs/common';
import { CreateBroadDto } from './dto/create-broad.dto';
import { Request, Response } from 'express';
import { BroadsService } from './broads.service'
import { Broad } from './interface/broad.interface'

@Controller('broads')
export class BroadsController {
    constructor(
        private readonly broadsService: BroadsService
    ) {

    }
    @Get()
    async findAll(
        // @Req() req: Request, @Res() res: Response
    ): Promise<Broad[]> {
        return this.broadsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Broad> {
        // return `Item ${id}`;
        return this.broadsService.findOne(id);
    }

    @Post()
    create(@Body() createBroadDto: CreateBroadDto): Promise<Broad> {
        return this.broadsService.create(createBroadDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Broad> {
        return this.broadsService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id, @Body() createBroadDto: CreateBroadDto): Promise<Broad> {
        return this.broadsService.update(id, createBroadDto);
    }

}
