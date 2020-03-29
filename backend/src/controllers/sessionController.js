const connection = require('../database/connection')

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first(); // não retorna um array, apenas um resultado

        if(!ong)
            return response.status(400).json({error: "This ONG ID doesn't exist"});

        return response.json(ong);
    }
}