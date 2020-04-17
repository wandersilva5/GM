'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/**
 * Resourceful controller for interacting with statuspedidos
 */
const Status = use("App/Models/Status");

class StatusPedidoController {

  async index () {
    const status = Status.all();

    return status;
  }

  async store ({ request, response }) {
    const data = request.only({ status })

    const status = await Status.create(data)

    return status
  }

  async show ({ params }) {
    const status = await Status.findOrFail(params.id)

    return status
  }

  async update ({ params, request, response }) {
    try {
      const status = await Status.findOrFail(params.id);
      const data = request.all();
      
      status.merge(data);
      await status.save();
      
      return status
    } catch (e) {
        console.log(e)
    }    
  }

  async destroy ({ params, request, response }) {
    const status = await Status.findOrFail(params.id)

    // if (status !== auth.user.id) {
    //   return response.status(401).send({ error: 'Not authorized' })
    // }
  
    await status.delete()
  
  }
}

module.exports = StatusPedidoController
