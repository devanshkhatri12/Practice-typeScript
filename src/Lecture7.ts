const dosa = {
    name: 'masaladosa',
    price: 70,
    isHot:  true
}

// typescript behind the scene infer
// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }

// example 
type chai = {
    name: string;
    price: Number;
    ingrediants: String[]
}

const adhrakChai: chai = {
    name: "adharak chai",
    price: 30,
    ingrediants: ['adhrak', 'sugar', 'eleaichi']
}

console.log(adhrakChai)

// Duck Typing

type cup = {size: string};
let smallCup: cup = {size: "200ml"}

let bigcup = {size: '500ml', color: 'blue'}

smallCup = bigcup

console.log(smallCup)


// structure Typing VS duck typing

type Brew = {brewTime: string}
const coffee = {brewTime: 5, beans: 'Arabica'}

// show error 
// const chaiBrew:Brew = coffee

// split out DT

type Item = {name: string; quantity: number}
type Address = {street: string, pin: number}

type order = {
    id: string;
    item: Item[];
    address: Address[]
}


// datatype define in one way and used in diff. ways
// partial keyword: depends on u how much property u will pass
type dish = {
    name: string
    price: number
    state: "solid" | "liquid"
    ishot: true
}

const orderDish = (update: Partial<dish>) => {
    console.log("Ordered dish is...", update)
}

orderDish({price: 70})
orderDish({state: "solid"})
orderDish({})

// required keyword: no matter what, u have to pass all the properties
type book ={
    author?: string
    price?: number
}

const orderBook = (update: Required<book>) => {
    console.log("Ordered book is...", update)
}

orderBook({
    author: "yashwant",
    price: 270
})
// orderBook({author: "yashwant"})

// pick keyword : when we have to work with only seleccted data

type pasta = {
    name: string
    price: number
    isGravy: boolean
    ingrediants: string[]
}

type pastaInfo = Pick<pasta, "name" | "price">

const orderPasta: pastaInfo = {
    name: "Red sauce pasta",
    price: 120
}

console.log(orderPasta)


// omit keyword: when we don't want to use some data
 type chaiNew = {
    name: string;
    price: number
    ishot: boolean
    specialIngrediants: string[]
}

type orderNewChai = Omit<chaiNew, "specialIngrediants">;

const publicChai: orderNewChai = {
    name: "masala chai",
    price: 35,
    ishot: false
}

console.log(publicChai)


