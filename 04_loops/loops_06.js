// const mynums=[1,2,3,4]
// // const mytotal=mynums.reduce(function(accumulator,currval){
// //     console.log(`accumullator ${accumulator}and currval ${currval}`)
// //     return accumulator+currval
// // },0)//comma ke baad wali value accumulator ke pass jaati h
// const mytotal=mynums.reduce((acc,curr)=>acc+curr,0)

// console.log(mytotal);

const shoppingcart=[{
        itemname:"python",
        price: 1200
    },
    {
        itemname:"web dev",
        price:399
    },
    {
        itemname:"js course",
        price:588
    }
]
const price2pay=shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(price2pay);

