import axios from "axios";

  
export const getPlacesData = async (type, sw, ne) => {
    try{
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`, {
            params: {
              latitude: ne.lat,
              longitude: sw.lng,
              limit: '7',
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': '200439e515msh8fbedf248c210ecp19a63ejsn529377c43379'
            }
        })  
        console.log(data);
        return data
    }catch(error){
        console.log(error);
    }
}