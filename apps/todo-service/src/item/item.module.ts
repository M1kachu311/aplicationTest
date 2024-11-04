import { Module } from "@nestjs/common";
import { ItemModuleBase } from "./base/item.module.base";
import { ItemService } from "./item.service";
import { ItemController } from "./item.controller";

@Module({
  imports: [ItemModuleBase],
  controllers: [ItemController],
  providers: [ItemService],
  exports: [ItemService],
})
export class ItemModule {}
