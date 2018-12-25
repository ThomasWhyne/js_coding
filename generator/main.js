function* generator(){
    yield 1;
    yield 2;
}



for(let i of generator()){
    console.log(i)
};
