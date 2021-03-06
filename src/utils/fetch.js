
/***************************************************
Implementation async API call
q:string
******************************************************/
import constants from "./constants";

const fetchApi = async (q) =>{
    try{
        const queryParam = `?key=${constants.KEY}&q=${q.trim()}`;
        const response =  await fetch(`${constants.API_URL}${queryParam}`);
        return response.json();
    } catch(e){
        throw new Error(e.message);
    } 
}

export default fetchApi;