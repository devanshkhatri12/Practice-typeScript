// type narrowing
// it give suggestion based on type of datatype
function chaitype(kind: string | number){
    if(typeof kind === "string"){
        return `Making ${kind} kind.`
    }
    return `chai order: ${kind}`;
}

// truthy-ness
function messPrint(msg?: string){
    if(msg){
        return `Printing ${msg}`
    }
    return `No message is passed...`
}

// exostive check
function serveMeals(type: "breakfast" | "lunch" | "dinner" | number){
    if(type === "breakfast"){
        return `Serving Breakfast...`
    }

    if(type === "lunch"){
        return `Serving Lunch...`
    }else if(type === "dinner"){
        return `Serving Dinner...`
    }else{
        return `Servering total ${type} number meals`
    }
}


// userbased 
class kulladChai{
    serve(){
        return `servering kullad chai..`
    }
}

class masalaChai{
    serve(){
        return `servering masala chai..`
    }
}

function servering(chai: kulladChai | masalaChai){
    if(chai instanceof kulladChai){
        return chai.serve();
    }
}


// guard checking or type guard
// starting "type" is keyword
type bioData = {
    name: string
    age: number
}

function bio(obj:any):obj is bioData{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.name === "string" &&
        typeof obj.age === "number"
    )
}

function aboutUs(data: bioData | string){
    if(bio(data)){
        return `My name is ${data.name} and my age is ${data.age}`
    }
    return `about my self ${data}`
}