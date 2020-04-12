'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Pedido = use("App/Models/Pedido");
const Material = use("App/Models/Material");

class PedidoController {

  async index ({ request, response, view }) {
    const pedidos = Pedido.query().with('materiais').fetch();

    return pedidos;
  }

  async store ({ request, response }) {
    const { materiais, numPedido, cliente_id } = await request.post();
    
    
    const pedido = await Pedido.create({numPedido, cliente_id });

    if(materiais && materiais.length > 0 ){
      materiais.forEach(async (material) => {
          if(material.qtd){      
          await pedido.materiais().attach([material.id], row => {
            row.qtd = material.qtd
            row.valTotal = material.valTotal
          });
        }
      });
      
    }

    pedido.materiais = await pedido.materiais().fetch();
        
    response.status(200).json({
      message:'Seu cadastro foi realizado com sucesso',
      data: pedido
    });
  }

  async show ({ params, request, response, view }) {
    const pedido = await Pedido.query().where('id', params.id).with('materiais').fetch();

    response.status(200).json({
      message:'Este é o pedido',
      data: pedido
    });
   
  }

  async update ({ params, request, response }) {
    try {
      const pedido = await Pedido.findOrFail(params.id);
      const { material_id, qtd, valTotal, ...data } = request.all();
      
      pedido.merge(data);
      await pedido.save();

      if(qtd && qtd.length > 0 ){
      
        await pedido.materiais().detach();
        await pedido.materiais().attach(material_id, qtd, valTotal);
        
        pedido.materiais = await pedido.materiais().fetch();
        
        response.status(200).json({
          message:'Pedido Atualizado com sucesso',
          data: pedido
        });
      }
        
    } catch (e) {
        console.log(e)
    }
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = PedidoController
