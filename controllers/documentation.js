const documentationGET = (req, res) => {
    res.render('documentation', {
        scripts: [],
        authorization: req.user ? true : false,
        pageName: 'Документація',
        styles: ['documentation.css'],
    })
}

module.exports = { documentationGET }
