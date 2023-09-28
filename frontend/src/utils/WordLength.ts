
export default function WordLength(str:string){
    if(str.length > 100){
        return str.substring(0,100) + "..."
    }
    else {
        return str
    }
}
