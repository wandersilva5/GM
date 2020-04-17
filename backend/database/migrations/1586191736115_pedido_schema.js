'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidoSchema extends Schema {
  up () {
    this.create('pedidos', (table) => {
      table.increments()
      table.string('numPedido').notNullable()
      table.integer('cliente_id').unsigned().references('id').inTable('clientes')
      table.integer('status_id').unsigned().references('id').inTable('status')
      table.timestamps()
    })
  }

  down () {
    this.drop('pedidos')
  }
}

module.exports = PedidoSchema
