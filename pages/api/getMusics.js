import axios from 'axios';

const url = 'http://localhost:5000/musics'

export default async (req, res) => {
    try {
        const response = await axios.get(url)

        console.log(response)
        
        return res.status(200).json(response.data)
    } catch(err) {}
}