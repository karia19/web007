import axios from 'axios'

//const url = 'http://localhost:3003/api/files/'
const url2 = 'https://pekkaparviainen.com/api/files'

const getImages = async () => {
    const response = await axios.get(url2)
    const filtered = await response.data.filter(x => x.metadata)
    const re = filtered.filter(x => x.metadata.artName !== null)
    console.log("sas", re)
    return re

}


export default { getImages }
