'use strict'

class AuthController {
    async create ({ request }) {
        const data = request.only(["username", "email", "password"])
    
        const user = await User.create(data)
    
        return user
    }

    async login({ auth, request }){
        const { username, password } = request.all()

        const token = await auth.attempt(username, password)
    
        return token
    }
}

module.exports = AuthController
