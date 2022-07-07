const index = (req, res) => {
    res.render('index', { name: 'Heohe', layout: 'main' })
}

module.exports = { index }
