export default function numberVisual(string){
    let number = '';
    let str = string;
    while (str.length > 2){
        const ind = str.length - 3;
        ind === 0 ? number = str.slice(ind) + number : number = ' ' + str.slice(ind) + number;
        str = str.slice(0 , ind);
    }
    
    number = str + number;
    return number;
}