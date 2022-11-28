import { Body, Controller, Get, Param, Post,Delete,Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto'; 
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private itemsService:ItemsService ){}
    @Post()
    create(@Body() createItemDto: CreateItemDto):Promise<Item>{
        return this.itemsService.create(createItemDto)
    }
    // @Get()
    // findAll():string{
    //     return 'this is the get all items'
    // }
    @Get()
    async findAll(): Promise<Item[]>{
        return this.itemsService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id): Promise<Item>{
        return this.itemsService.findOne(id)
    }
    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item>{
        return this.itemsService.update(id, updateItemDto)
    }

    @Delete(':id')
    remove(@Param('id') id): Promise<Item>{
        return this.itemsService.delete(id)
    }
}
