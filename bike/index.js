//变量=变量名 + 值 + 类型；
//变量为赋值之前-->undefined;
//js里变量的类型由其值决定，类型决定变量的职责和功能；
var BicycleShop=function(name,){
    this.name=name;

}
var bicycleshop = new BicycleShop('Giant');
//为什么这里属性赋值提升(hoisting)了；
//工厂模式：
BicycleShop.prototype={
    sellBicycle:function(model){
        var bicycle=BicycleFactory.createBicycle(model);
        /**/
    },
};
var BicycleFactory=function(model){

};
BicycleFactory.createBicycle=function(model){
    let bicycle;
    switch (model) {
        case 'The Speedster':
            bicycle = new Speedster();
            break;
    }
    bicycle.assemble();
    bicycle.wash();
    return bicycle;
}
var Speedster=function(){
    this.name='Speedster';
    this.price='$999';
    this.assemble=function(){
        console.log('Assembled!')
    };
    this.wash=function(){
        console.log('Washed!')
    };
};
bicycleshop.sellBicycle('The Speedster');