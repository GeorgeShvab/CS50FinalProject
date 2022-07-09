const index = (req, res) => {
    if (req.user) {
        res.render('index', {
            name: 'Heohe',
            authorization: req.user ? true : false,
            layout: 'main',
            scripts: [],
        })
    } else {
        res.render('index', {
            layout: 'main',
            scripts: [],
            authorization: req.user ? true : false,
        })
    }
}

module.exports = { index }
