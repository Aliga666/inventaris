'use strict'

class IndexController {
    index({ view }) {
        return view.render('/index')
    }
}

module.exports = IndexController