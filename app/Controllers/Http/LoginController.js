'use strict'

class LoginController {
    login({ view }) {
        return view.render('/login')
    }
    async logins({ request, auth, response }) {
        const { username, password } = request.all()
        await auth.attempt(username, password)
        return response.route('/index')
    }
}

module.exports = LoginController