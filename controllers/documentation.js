const documentationGET = (req, res) => {
    res.render('documentation', {
        scripts: [],
        authorization: req.user ? true : false,
        pageName: 'Documentation',
        styles: ['documentation.css'],
    })
}

module.exports = { documentationGET }
