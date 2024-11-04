/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ItemService } from "../item.service";
import { ItemCreateInput } from "./ItemCreateInput";
import { Item } from "./Item";
import { ItemFindManyArgs } from "./ItemFindManyArgs";
import { ItemWhereUniqueInput } from "./ItemWhereUniqueInput";
import { ItemUpdateInput } from "./ItemUpdateInput";

export class ItemControllerBase {
  constructor(protected readonly service: ItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Item })
  async createItem(@common.Body() data: ItemCreateInput): Promise<Item> {
    return await this.service.createItem({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Item] })
  @ApiNestedQuery(ItemFindManyArgs)
  async items(@common.Req() request: Request): Promise<Item[]> {
    const args = plainToClass(ItemFindManyArgs, request.query);
    return this.service.items({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Item })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async item(
    @common.Param() params: ItemWhereUniqueInput
  ): Promise<Item | null> {
    const result = await this.service.item({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Item })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateItem(
    @common.Param() params: ItemWhereUniqueInput,
    @common.Body() data: ItemUpdateInput
  ): Promise<Item | null> {
    try {
      return await this.service.updateItem({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Item })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteItem(
    @common.Param() params: ItemWhereUniqueInput
  ): Promise<Item | null> {
    try {
      return await this.service.deleteItem({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
