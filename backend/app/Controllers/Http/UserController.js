'use strict'

const User = use("App/Models/User");

class UserController {
    async create ({ request }) {
    const data = request.only(["username", "email", "password"])

    const user = await User.create(data)

    return user
  }

  async login({ auth, request, response }){
    const { username, password } = request.all()
    await auth.attempt(username, password)

    const token = await auth.attempt(username, password)
    
    response.status(200).json({
      message:'Você está logado!',
      data: token
    });
  }
}

module.exports = UserController
