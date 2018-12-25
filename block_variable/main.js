var x=1;
function jack(x,y=function(){console.log(x)}){
    var x=1;
    y();
    console.log(x);
}
//console.log(x);
jack();
