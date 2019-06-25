import axios from 'axios'


const url = 'http://localhost:3003/api/register'

const login =  async (cre) => {

    const res = await axios.post(url, cre);
    return res;
}

export default login;