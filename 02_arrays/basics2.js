const mheroes=["thor","spiderman","ironman"]
const dc_heroes=["superman","batman","flash"]
// mheroes.push(dc_heroes)
// console.log(mheroes)
// console.log(mheroes[3][2])
// const y=mheroes.concat(dc_heroes)\
const y=[...mheroes,...dc_heroes]//developers most preference
// console.log(y)
const another_array=[1,2,3,[4,5,6],[7,8,9]]
console.log(Array.isArray("rohan"))
console.log(Array.from("rohan"))
console.log(Array.from({name:"rohan"}))//interestiong case