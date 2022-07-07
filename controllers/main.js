const index = (req, res) => {
    res.render('index', { name: 'Heohe', layout: 'main', scripts: [] })
}

module.exports = { index }
