'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Material extends Model {
    pedidos(){
        return this
            .belongsToMany('App/Models/Pedido')
    }
}

module.exports = Material
