import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Operation from 'App/Models/Operation'

export default class OperationSeeder extends BaseSeeder {
  public async run () {
    await Operation.createMany([
      {
        source: '011',
        destination: '016',
        value_for_minute: '1.90'
      },
      {
        source: '016',
        destination: '011',
        value_for_minute: '2.90'
      },
      {
        source: '011',
        destination: '017',
        value_for_minute: '1.70'
      },
      {
        source: '017',
        destination: '011',
        value_for_minute: '2.70'
      },
      {
        source: '011',
        destination: '018',
        value_for_minute: '0.90'
      },
      {
        source: '018',
        destination: '011',
        value_for_minute: '1.90' 
      }
    ])
  }
}
