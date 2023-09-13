
export const get = async (apiEndPoint) =>{
let res = await fetch('https://jsonplaceholder.typicode.com/'+apiEndPoint);
if(!res.ok){
    throw new Error(res.statusText);
}
let data = await res.json()
console.log(data)
return data
}
