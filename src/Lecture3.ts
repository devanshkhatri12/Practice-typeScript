// Union
let address : string | number = '6 om vihar'

let response : "pending" | "success" | "error" = "pending"

// response = "done"        --> it give us error

// any 
const orders = ['21', '45', '11', '33']

// yha pr hume pta nhi kis type ka data aayega or ayega bhi nhi aayega
let currentOrder: string | undefined;

for(let order of orders){
    if(order === '21'){
        currentOrder = order;
        break;
    }
    currentOrder = '11'
}

console.log(currentOrder);


