import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Operation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public source: string

  @column()
  public destination: string

  @column()
  public value_for_minute: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
