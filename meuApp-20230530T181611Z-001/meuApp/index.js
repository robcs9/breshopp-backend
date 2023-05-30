const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'));

produtos = [
    { codigo: 1, nome: 'Fone de Ouvido', preco: 219.56 },
    { codigo: 2, nome: 'Caneca', preco: 7.12 },
    { codigo: 3, nome: 'Mochila', preco: 120 }
]
app.get('/', (req, res) => {res.send('E aê')});
app.get('produtos/', (req, res) => {
    res.send(produtos);
})
app.listen(port, () => {
    console.log(`Esta aplicação está escutando a porta
    ${port}`)
});

app.get('/produtos/:nome/:precoMaximo', (req, res) => {
    var nome = req.params.nome;
    var precoMaximo = req.params.precoMaximo;
    var resultadodaBusca = [];
    produtos.forEach(produto => {
        if (produto.nome.includes(nome) &&
            produto.preco <= precoMaximo) {
            resultadodaBusca.push(produto);
        }
    })
    res.send(resultadodaBusca);
});

app.get('/produtos', (req, res) => {
    var nome = req.query.nome;
    var precoMaximo = req.query.precoMaximo;
    var resultadodaBusca = [];
    produtos.forEach(produto => {
        if (produto.nome.includes(nome) &&
            produto.preco <= precoMaximo) {
            resultadodaBusca.push(produto);
        }
    })
    res.send(resultadodaBusca);
});



