'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Cliente = use("App/Models/Cliente");

class ClienteController {
 
  async index () {
    const clientes = Cliente.all();

    return clientes;
  }

  async store ({ request }) {
    const data = request.all();

    const cliente = await Cliente.create(data);

    return cliente;
  }

  async show ({ params }) {
    const cliente = await Cliente.findOrFail(params.id)

    return cliente
  }

  async update ({ params, request }) {
    
    try {
      const cliente = await Cliente.findOrFail(params.id);
      const data = request.all();
      
        cliente.merge(data);
        await cliente.save();
        
        return cliente
      } catch (e) {
          console.log(e)
      }
  }

  async destroy ({ params, request, response }) {
    const cliente = await Cliente.findOrFail(params.id)
    console.log(cliente.id)

    // if (auth.user.id !== 'admin') {
    //   return response.status(401).send({ error: 'Not authorized' })
    // }
  
    // await cliente.delete()
  }
}

module.exports = ClienteController
