const index = (req, res) => {
    if (req.user) {
        res.render('index', {
            name: 'Heohe',
            authorization: req.user ? true : false,
            layout: 'main',
            scripts: [],
            pageName: 'Головна',
        })
    } else {
        res.render('index', {
            layout: 'main',
            scripts: [],
            authorization: req.user ? true : false,
            pageName: 'Головна',
        })
    }
}

module.exports = { index }
