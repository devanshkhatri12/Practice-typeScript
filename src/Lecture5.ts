// force full asertion
// let numericLength: number = (Response as string).length;

type Book = {
    name: "string"
}
// data type jrur pta ho
let bookString = '{"name": "Bhagwat Gita "}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);


//type assertion
const insertElement = document.getElementById("username") as HTMLInputElement


//any VS unkown
let value:any

value = 21;
value = [1,2,3]
value = 1.2;
value.toUpperCase();

let newValue:unknown

newValue = 21;
newValue = [1,2,3]
newValue = 1.2;

// if it is type of string then we apply fn to it
if(typeof newValue === "string"){
    newValue.toUpperCase(); 
}


// how to handle error type
try{

}catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
}


// void : refer to "didn't return anything" or "i didn't care about what fn. return"
// never dataype
type Role = "user" | "admin" | "manager"
function redirectBasedRole(role: Role): void {
    if(role == "user"){
        console.log("go to user dashboard")
        return;
    }

    if(role == "admin"){
        console.log("go to admin dashboard")
        return;
    }

    role;
}

function neverEnd():never{
    while(true){
        // 
    }
}
