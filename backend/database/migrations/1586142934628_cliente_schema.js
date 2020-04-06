'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments()
      table.string('rSocial', 180).notNullable()
      table.string('nomeFantasia', 180)
      table.string('cnpj', 15).notNullable()
      table.string('inscEstatual', 15)
      table.string('endCliente', 200).notNullable()
      table.string('endEntrega', 200).notNullable()
      table.string('bairro', 20)
      table.string('cidade', 20)
      table.string('estado', 20)
      table.string('uf', 2).notNullable()
      table.string('cep', 8)
      table.string('nomeContato', 100)
      table.string('numContato', 15)
      table.integer('flAtivo', 1).default(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClienteSchema
