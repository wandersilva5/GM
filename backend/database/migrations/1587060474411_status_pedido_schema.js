'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatusPedidoSchema extends Schema {
  up () {
    this.create('status', (table) => {
      table.increments()
      table.string('status')
    })
  }

  down () {
    this.drop('status')
  }
}

module.exports = StatusPedidoSchema
