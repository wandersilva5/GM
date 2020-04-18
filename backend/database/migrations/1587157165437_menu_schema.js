'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MenuSchema extends Schema {
  up () {
    this.create('menus', (table) => {
      table.increments()
      table.string('nome')
      table.string('url')
      table.string('icone')
      table.integer('principal').default(0)
    })
  }

  down () {
    this.drop('menus')
  }
}

module.exports = MenuSchema
