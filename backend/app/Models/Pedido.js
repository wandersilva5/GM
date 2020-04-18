'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pedido extends Model {
    materiais(){
        return this
            .belongsToMany('App/Models/Material')
            .pivotTable('pedido_material');
    }

    clientes () {
        return this.belongsTo('App/Models/Cliente')
    }
    
    status () {
        return this.belongsTo('App/Models/Status')
    }

}

module.exports = Pedido
