'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Material = use("App/Models/Material");

class MaterialController {
  async index () {
    const materiais = Material.all();

    return materiais
  }


  async store ({ request }) {
    const data = request.all()

    const material = await Material.create(data)

    return material
  }

  async show ({ params}) {
    const material = await Material.findOrFail(params.id)

    return material
  }

  async update ({ params, request }) {
    
    try {
      const material = await Material.findOrFail(params.id);
      const data = request.all();
      
      material.merge(data);
      await material.save();
      
      return material
    } catch (e) {
        console.log(e)
    }    
  }

  async destroy ({ params, response }) {
    const material = await Material.findOrFail(params.id)

    if (material.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }
  
    await material.delete()
  }
}

module.exports = MaterialController
