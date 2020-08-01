import config from '../config'

const URL_categories = `${config.URL}/categorias`

function getAll(){
    return fetch(`${URL_categories}`)
    .then(async (resposta) => {
        if(resposta.ok){
            const respostaJSON = await resposta.json();
            return respostaJSON;
        }
        throw new Error('Servidor fora do ar')
    });
}

function getAllWithVideos(){
    return fetch(`${URL_categories}?_embed=videos`)
    .then(async (resposta) => {
        if(resposta.ok){
            const respostaJSON = await resposta.json();
            return respostaJSON;
        }
        throw new Error('Servidor fora do ar')
    });
}

export default {
    getAllWithVideos,
    getAll,
};