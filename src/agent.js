import superagent from 'superagent';
import superagentPromise from 'superagent-promise';

const agent = superagentPromise(superagent, global.Promise);
const API_ROOT = "http://pokeapi.co/api/v2/";


const requestBody = (request) => request && request.body;



const request = {
    get: (url) => agent.get(`${API_ROOT}${url}`).then(requestBody)
};

const Pokemon = {
    get: (index) => request.get(`pokemon/${index}`)
};

export default {
    Pokemon
}