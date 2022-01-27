import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Operation from 'App/Models/Operation'

export default class OperationsController {
	public async index(ctx: HttpContextContract) {
		try {
      const { page, offset } = ctx.request.qs()
      const operations = await Database.from('operations').paginate(page, offset)

      return ctx.response.status(200).json(operations)
    } catch (e) {
      return ctx.response.status(500).json(e)
    }
	}

	public async show(ctx: HttpContextContract) {
		try {
      const { source, destination, timer_minutes, plain } = ctx.request.qs()

			const operation = await Operation.query()
				.where('source', source)
				.where('destination', destination)
				.first()

			if (!operation) {
				return ctx.response.status(400).json({ message: "not found operation" })
			}

			const without: number = parseFloat(operation.value_for_minute) * parseInt(timer_minutes)

			let withCalculate: number = parseInt(timer_minutes) -  parseInt(plain)

			if (withCalculate < 0) {
				withCalculate = 0
			} else {
				withCalculate = parseFloat(operation.value_for_minute) * withCalculate
			}

			const objectReturn = {
				source: operation.source,
				destination: operation.destination,
				timer_minutes: timer_minutes,
				plain: `Fale Mais: ${plain}`,
				with: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BRL' }).format(withCalculate),
				without:new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BRL' }).format(without)
			}

      return ctx.response.status(200).json(objectReturn)
    } catch (e) {
      return ctx.response.status(500).json(e)
    }
	}
}
