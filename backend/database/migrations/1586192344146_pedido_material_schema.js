'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidoMaterialSchema extends Schema {
  up () {
    this.create('pedido_material', (table) => {
      table.increments()
      table.integer('pedido_id').unsigned().references('id').inTable('pedidos')
      table.integer('material_id').unsigned().references('id').inTable('materials')
      table.decimal('qtd')
      table.decimal('valTotal')
      table.timestamps()
    })
  }

  down () {
    this.drop('pedido_materials')
  }
}

module.exports = PedidoMaterialSchema
