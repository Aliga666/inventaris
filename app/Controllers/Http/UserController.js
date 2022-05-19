'use strict'
const User = use('App/Models/User')
class UserController {
    daftar({ view }) {
        return view.render('/daftar')
    }
    async store({ request, response }) {
        const user = new User()
        user.username = request.input('username'),
            user.password = request.input('password')
        await user.save()
        return response.redirect('/daftar')
    }
}

module.exports = UserController