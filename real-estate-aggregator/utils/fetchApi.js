import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"



export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'dc864da060msh255642ab597e753p10214cjsnfc0a72efcc66',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    return data;
}