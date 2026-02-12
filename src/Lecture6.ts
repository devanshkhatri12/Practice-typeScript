// when we don't know how many time our datatype is used
// write this 1 way
function masalachai(order: {type: string; sugar: number; strong: boolean}){
    console.log(order)
}

function gingerchai(order: {type: string; sugar: number; strong: boolean}){
    console.log(order);
}


// Another way write this - make more readeable
// if the type is common
type chaiOrder = {
    type: string;
    sugar: number
    strong: boolean
}

function elaichiChai(order: chaiOrder){
    console.log(order);
}


// to make type to interface : include keyword interface in front and remove equall to

// another form of type
type teaRecipe = {
    water: string | number
    milk: string | number
}

class adhrakChai implements teaRecipe{
    water = 100;
    milk = 50
}

// generally class can work on interface type some time might be type will work properly
// here problem will arrise
type cupsize = "small" | "large"

// here clas can only implement object type and intersection of object - not custome type
// class chai implements cupsize{
// }

// here how can i solve this
interface glasssize {
    size: "small" | "large"
}

class chai implements glasssize{
    size: "small" | "large" = "large"
}

// example that interface also required during union(|)
interface Response{
    ok: true | false;
}

class Server implements Response{
    ok: boolean = true;
}




type oil = {spoon: number}

// literal type: means yhi value m se kch ho skta h iske alava kch nhi
type masala = {type : "medium" | "light" | "strong"}


type omelete = oil & masala

const Plate: omelete = {
    spoon: 2,
    type: "medium"
}


// make it readOnly 
type config = {
    readonly appName: string
    version: number
}

const cfg: config = {
    appName: "Opal",
    version: 2
}

// can't assign bcz we only assign only 1 time to readonly - otherwise it give error
// cfg.appName = "Vimmo"

