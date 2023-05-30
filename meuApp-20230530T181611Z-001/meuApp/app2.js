const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Esta aplicação está escutando a porta
    ${port}`)
});

app.get('/', (req, res) => {
    res.send('Breshopp')
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

/*app.post('/cadastroProduto', urlencodedParser, (req, res) => {
    var nome = req.body.nome;
    var precoMaximo = req.body.precoMaximo;
    console.log(nome + " - " + precoMaximo);
    res.send(nome + " - " + precoMaximo);
});*/


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


produtos = [
    { codigo: 1, nome: 'Fone de Ouvido', preco: 219.56 },
    { codigo: 2, nome: 'Caneca', preco: 7.12 },
    { codigo: 3, nome: 'Mochila', preco: 120 }
]

let administradores = [
    //1
    {
        "id_admin": 1,
        "nome": "Administrador 1",
        "sobrenome": "Sobrenome 1",
        "email": "admin1@example.com",
        "senha": "senha1"
    }
    ,


    //2
    {
        "id_admin": 2,
        "nome": "Administrador 2",
        "sobrenome": "Sobrenome 2",
        "email": "admin2@example.com",
        "senha": "senha2"
    },


    //3

    {
        "id_admin": 3,
        "nome": "Administrador 3",
        "sobrenome": "Sobrenome 3",
        "email": "admin3@example.com",
        "senha": "senha3"
    }
    ,

    //4
    {
        "id_admin": 4,
        "nome": "Administrador 4",
        "sobrenome": "Sobrenome 4",
        "email": "admin4@example.com",
        "senha": "senha4"
    },


    //5
    {
        "id_admin": 5,
        "nome": "Administrador 5",
        "sobrenome": "Sobrenome 5",
        "email": "admin5@example.com",
        "senha": "senha5"
    },


    //6
    {
        "id_admin": 6,
        "nome": "Administrador 6",
        "sobrenome": "Sobrenome 6",
        "email": "admin6@example.com",
        "senha": "senha6"
    },



    //7
    {
        "id_admin": 7,
        "nome": "Administrador 7",
        "sobrenome": "Sobrenome 7",
        "email": "admin7@example.com",
        "senha": "senha7"
    },



    //8
    {
        "id_admin": 8,
        "nome": "Administrador 8",
        "sobrenome": "Sobrenome 8",
        "email": "admin8@example.com",
        "senha": "senha8"
    },


    //9
    {
        "id_admin": 9,
        "nome": "Administrador 9",
        "sobrenome": "Sobrenome 9",
        "email": "admin9@example.com",
        "senha": "senha9"
    },


    //10
    {
        "id_admin": 10,
        "nome": "Administrador 10",
        "sobrenome": "Sobrenome 10",
        "email": "admin10@example.com",
        "senha": "senha10"
    }

];

let categorias = [
    {
        "id_categoria": 1,
        "nome": "Eletrônicos"
    },

    {
        "id_categoria": 2,
        "nome": "Roupas"
    },
    {
        "id_categoria": 3,
        "nome": "Acessórios"
    },
    {
        "id_categoria": 4,
        "nome": "Livros"
    },
    {
        "id_categoria": 5,
        "nome": "Móveis"
    },
    {
        "id_categoria": 6,
        "nome": "Esportes"
    },
    {
        "id_categoria": 7,
        "nome": "Joias"
    },
    {
        "id_categoria": 8,
        "nome": "Beleza"
    },
    {
        "id_categoria": 9,
        "nome": "Brinquedos"
    },
    {
        "id_categoria": 10,
        "nome": "Instrumentos Musicais"
    }

];

let usuarios = [
    {
        "id_usuario": 1,
        "nome": "João",
        "sobrenome": "Soares",
        "email": "joaosoares@example.com",
        "cpf": "12345678901",
        "senha": "senha1",
        "telefone": "123456789",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 1,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id_usuario": 2,
        "nome": "Ursula",
        "sobrenome": "Silva",
        "email": "Ursulasilva@example.com",
        "cpf": "23456789012",
        "senha": "senha2",
        "telefone": "234567890",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 2,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id_usuario": 3,
        "nome": "Paulo",
        "sobrenome": "Gomes",
        "email": "paulogomex@example.com",
        "cpf": "34567890123",
        "senha": "senha3",
        "telefone": "345678901",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 3,
        "suspenso": 0,
        "motivo_suspensao": null

    },
    {
        "id_usuario": 4,
        "nome": "Matias",
        "sobrenome": "Saadhak",
        "email": "matiassaadhak@example.com",
        "cpf": "45678901234",
        "senha": "senha4",
        "telefone": "456789012",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 4,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id_usuario": 5,
        "nome": "Erick",
        "sobrenome": "Santos",
        "email": "ericksantos@example.com",
        "cpf": "56789012345",
        "senha": "senha5",
        "telefone": "567890123",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 5,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id_usuario": 6,
        "nome": "cauan",
        "sobrenome": "Pereira",
        "email": "cauanpereira@example.com",
        "cpf": "67890123456",
        "senha": "senha6",
        "telefone": "678901234",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 6,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id_usuario": 7,
        "nome": "Felipe",
        "sobrenome": "Basso",
        "email": "felipebasso@example.com",
        "cpf": "78901234567",
        "senha": "senha7",
        "telefone": "789012345",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 7,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id_usuario": 8,
        "nome": "Arthur",
        "sobrenome": "Vieira",
        "email": "arthurvieira@example.com",
        "cpf": "89012345678",
        "senha": "senha8",
        "telefone": "890123456",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 8,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id_usuario": 9,
        "nome": "Bryan",
        "sobrenome": "Luna",
        "email": "bryanluna@example.com",
        "cpf": "90123456789",
        "senha": "senha9",
        "telefone": "901234567",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 9,
        "suspenso": 0,
        "motivo_suspensao": null
    },
    {
        "id_usuario": 10,
        "nome": "Gustavo",
        "sobrenome": "Rossi",
        "email": "gustavorossi@example.com",
        "cpf": "69821304568",
        "senha": "senha10",
        "telefone": "89542136",
        "foto": null,
        "vendas": null,
        "trocas": null,
        "id_publicacoes": 10,
        "suspenso": 0,
        "motivo_suspensao": null
    }

];

let publicacoes = [
    {
        "id_publicacao": 1,
        "id_usuario": 1,
        "id_categoria": 1,
        "titulo": "vestido g",
        "tipo_negociacao": "Venda",
        "preco": 19.99,
        "descricao_produto": "Descrição do produto 1",
        "descricao_vendedor": "Descrição do vendedor 1",
        "id_fotos": 1,
        "validada": 1,
        "finalizada": 0,
        "motivo_rejeicao": null
    },
    {
        "id_publicacao": 2,
        "id_usuario": 2,
        "id_categoria": 1,
        "titulo": "saia junina P",
        "tipo_negociacao": "Venda",
        "preco": 14.99,
        "descricao_produto": "Descrição do produto 2",
        "descricao_vendedor": "Descrição do vendedor 2",
        "id_fotos": 2,
        "validada": 1,
        "finalizada": 0,
        "motivo_rejeicao": null
    },
    {
        "id_publicacao": 3,
        "id_usuario": 3,
        "id_categoria": 2,
        "titulo": "compressor de pintura",
        "tipo_negociacao": "Troca",
        "preco": null,
        "descricao_produto": "Descrição do produto 3",
        "descricao_vendedor": "Descrição do vendedor 3",
        "id_fotos": 3,
        "validada": 1,
        "finalizada": 0,
        "motivo_rejeicao": null
    },
    {
        "id_publicacao": 4,
        "id_usuario": 4,
        "id_categoria": 2,
        "titulo": "celta 2000",
        "tipo_negociacao": "Venda",
        "preco": 8.000,
        "descricao_produto": "Descrição do produto 4",
        "descricao_vendedor": "Descrição do vendedor 4",
        "id_fotos": 4,
        "validada": 0,
        "finalizada": 0,
        "motivo_rejeicao": null
    },
    {
        "id_publicacao": 5,
        "id_usuario": 5,
        "id_categoria": 3,
        "titulo": "violao",
        "tipo_negociacao": "Venda",
        "preco": 99.99,
        "descricao_produto": "Descrição do produto 5",
        "descricao_vendedor": "Descrição do vendedor 5",
        "id_fotos": 5,
        "validada": 1,
        "finalizada": 1,
        "motivo_rejeicao": null
    },
    {
        "id_publicacao": 6,
        "id_usuario": 6,
        "id_categoria": 3,
        "titulo": "colecao moedas olimpicas",
        "tipo_negociacao": "Venda",
        "preco": 399.99,
        "descricao_produto": "Descrição do produto 6",
        "descricao_vendedor": "Descrição do vendedor 6",
        "id_fotos": 6,
        "validada": 1,
        "finalizada": 1,
        "motivo_rejeicao": null
    },

    {
        "id_publicacao": 7,
        "id_usuario": 7,
        "id_categoria": 4,
        "titulo": "mesa rustica 4 cadeiras",
        "tipo_negociacao": "Venda",
        "preco": 200.00,
        "descricao_produto": "Descrição do produto 7",
        "descricao_vendedor": "Descrição do vendedor 7",
        "id_fotos": 7,
        "validada": 1,
        "finalizada": 1,
        "motivo_rejeicao": null
    },
    {
        "id_publicacao": 8,
        "id_usuario": 8,
        "id_categoria": 4,
        "titulo": "guarda sol",
        "tipo_negociacao": "Venda",
        "preco": 25.00,
        "descricao_produto": "Descrição do produto 8",
        "descricao_vendedor": "Descrição do vendedor 8",
        "id_fotos": 8,
        "validada": 1,
        "finalizada": 0,
        "motivo_rejeicao": null
    },
    {
        "id_publicacao": 9,
        "id_usuario": 9,
        "id_categoria": 5,
        "titulo": "biquine pp",
        "tipo_negociacao": "Venda",
        "preco": 7.99,
        "descricao_produto": "Descrição do produto 9",
        "descricao_vendedor": "Descrição do vendedor 9",
        "id_fotos": 9,
        "validada": 1,
        "finalizada": 0,
        "motivo_rejeicao": null
    },
    {
        "id_publicacao": 10,
        "id_usuario": 10,
        "id_categoria": 5,
        "titulo": "notebook i5",
        "tipo_negociacao": "Venda",
        "preco": 800.00,
        "descricao_produto": "Descrição do produto 10",
        "descricao_vendedor": "Descrição do vendedor 10",
        "id_fotos": 10,
        "validada": 1,
        "finalizada": 0,
        "motivo_rejeicao": null
    }

];

