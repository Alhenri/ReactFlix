import config from '../config'

const URL_videos = `${config.URL}/videos`

function create(objetoDoVideo){

    // Normalmente isso faz um get, mas agora será um POST
    return fetch(`${URL_videos}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo)
    })
    .then(async (resposta) => {
        if(resposta.ok){
            const respostaJSON = await resposta.json();
            return respostaJSON;
        }
        throw new Error('Servidor fora do ar')
    });
}

export default {
    create,
};