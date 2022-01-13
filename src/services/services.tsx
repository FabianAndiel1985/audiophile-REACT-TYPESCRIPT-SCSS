import data from "../assets/data.json";

export const grabWelcomeProduct = (id:number) =>{
    return data.filter((item)=>item.id == id);
}

export const grabCategories = (): Set<string> =>{
    let categorieSet: Set<string> = new Set();
    data.forEach((item)=>{
        categorieSet.add(item.category)
    })
   return categorieSet;
}