const errorPage = (req, res, msg, status) => {
    res.render('error', {
        scripts: [],
        authorization: req.user ? true : false,
        pageName: 'Error',
        status: status,
        msg: msg,
        styles: ['error.css'],
    })
}

module.exports = errorPage
