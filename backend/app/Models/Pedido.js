'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pedido extends Model {
    materiais(){
        return this
            .belongsToMany('App/Models/Material')
            .pivotTable('pedido_material');
    }
}

module.exports = Pedido
