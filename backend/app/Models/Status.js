'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Status extends Model {
    pedidos(){
        return this.belongsTo('App/Models/Pedido')
    }
}

module.exports = Status
