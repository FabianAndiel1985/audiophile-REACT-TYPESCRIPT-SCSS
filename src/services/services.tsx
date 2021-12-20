import data from "../assets/data.json";

export const grabWelcomeProduct = (id:number) =>{
    return data.filter((item)=>item.id == id);
}