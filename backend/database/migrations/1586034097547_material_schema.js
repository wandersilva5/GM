'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MaterialSchema extends Schema {
  up () {
    this.create('materials', (table) => {
      table.increments()
      table.string('codMaterial', 20).notNullable()
      table.string('descricao').notNullable()
      table.string('tipoMaterial')
      table.string('classFiscal') //código da NCM 
      table.decimal('valor').notNullable()
      table.decimal('ipi')
      table.decimal('pis')
      table.decimal('cofins')
      table.integer('flAtivo', 1).default(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('materials')
  }
}

module.exports = MaterialSchema
