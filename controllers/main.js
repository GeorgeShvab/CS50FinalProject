const index = (req, res) => {
    res.render('index', {
        authorization: req.user ? true : false,
        layout: 'main',
        scripts: [],
        pageName: 'Головна',
        styles: ['index.css'],
    })
}

module.exports = { index }
