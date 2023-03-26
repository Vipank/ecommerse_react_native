import axios from 'axios';

const ip = "10.0.2.2:3000"

export const getCategories = async ()=>{
    try{
        let categories =  await axios.get(`http://${ip}/categories`);
        return categories.data;
    }catch (err){
        console.log(err)
        return [];
    }
    
}