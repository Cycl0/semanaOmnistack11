const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
/**
 * app.use(cors(
 *  origin: 'http://myapp.com'
 * ));
 */
app.use(express.json());
app.use(routes);

app.listen(80);
/**
 * Rota = localhost/users
 * Recurso = /users
 */

/**
 * Métodos HTTP:
 * 
 * "app.post('/users', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 11',
        aluno: 'Cycl0n'
    });
});"
 * 
 * GET: Busca informação no back-end
 * POST: Cria informação no back-end
 * PUT: Altera informação no back-end
 * DELETE: Deleta informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação), anexados com "&"
 * Ex Query Params: "http://localhost/users?page=2&nome=Lucas" 
 * (request.query)
 * 
 * Route Params: Parâmetros utilizados para identificar recursos
 * Ex Route Params: "http://localhost/users/1(:id com valor 1)"
 * (request.params)
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * (request.body)
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where();
 */


