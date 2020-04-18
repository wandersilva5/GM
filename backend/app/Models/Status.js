'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Status extends Model {
    
    static get table () {
        return 'status'
    }

    pedidos () {
        return this.hasMany('App/Models/Pedido')
    }
}

module.exports = Status
