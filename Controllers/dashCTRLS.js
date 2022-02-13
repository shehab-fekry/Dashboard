let data = require('../Drivers.json')

exports.getdash = (req, res, next) => {
    res.render('home.ejs', {
        Drivers: [...data],
        pageTitle: 'Dashboard'
    })
}

exports.getTracking = (req, res, next) => {
    res.render('tracking.ejs', {
        Drivers: [...data],
        pageTitle: 'Dashboard'
    })
}

exports.getDrivers = (req, res, next) => {
    res.render('Drivers.ejs', {
        Drivers: [...data],
        pageTitle: 'Dashboard'
    })
}

exports.getParents = (req, res, next) => {
    res.render('parents.ejs', {
        Drivers: [...data],
        pageTitle: 'Dashboard'
    })
}

exports.getAddPickPoint = (req, res, next) => {
    res.render('addPickPoint.ejs', {
        Drivers: [...data],
        pageTitle: 'Dashboard'
    })
}

