
export const get = async () =>{
let res = await fetch('https://jsonplaceholder.typicode.com/todos');
let data = await res.json()
console.log(data)
return data
}
