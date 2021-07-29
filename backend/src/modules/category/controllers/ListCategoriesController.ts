import { Request, Response } from 'express'

import { ListCategoriesService } from '../services/ListCategoriesService'

export class ListCategoriesController {
  async handle(request: Request, response: Response) {
    const listCategoriesService = new ListCategoriesService()

    const categories = await listCategoriesService.execute()

    return response.json(categories)
  }
}
