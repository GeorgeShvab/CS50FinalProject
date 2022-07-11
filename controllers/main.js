const index = (req, res) => {
    res.render('index', {
        authorization: req.user ? true : false,
        layout: 'main',
        scripts: [],
        pageName: 'Home',
        styles: ['index.css'],
    })
}

module.exports = { index }
