'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Pedido = use("App/Models/Pedido");
const Material = use("App/Models/Material");

class PedidoController {

  async index ({ request, response, view }) {
    const pedidos = Pedido.all();

    return pedidos;
  }

  async store ({ request, response }) {
    const { material_id, ...data } = await request.all()
    const pedido = await Pedido.create(data)


    if(material_id && material_id.length > 0 ){
      await pedido.materials().attach(material_id)
      await pedido.load('material_id')
    }
    
    
    return pedidos
  }

  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = PedidoController
