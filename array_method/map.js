var winner=['jack','larry','tom'];
var race='100 meters dash';
var arr=winner.map((x,i)=>({
    name:x,
    race,
    place:i+1,
}));
console.log(arr)