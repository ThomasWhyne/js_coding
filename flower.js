//object literal
var xiaoming={
    name:'xiaoming',
    sex:'male',
    single:true,
    class:'16-01',
    hometown:'GZ',
    sendFlower:function(target){
        target.receiveFlower();
    }
};
var xiaohong={
    name:'xiaohong',
    sex:'female',
    single:false,
    class:'16-01',
    hometown:'NC',
    moodchange:function(){
        let i = setInterval(() => { xiaohong.isHappy = false }, 1000);
        let j = setInterval(() => { xiaohong.isHappy = true }, 10000);
    },
    isHappy: false,
    listenGoodMood:function(){
        setTimeout(()=>{
            this.receiveFlower()
        },0)
    },
    receiveFlower:function(){
        if(!this.isHappy){
            console.log('扔了')
        }else{
            console.log('可以去看电影')
        }
    }
};
var xiaoli={
    name:'xiaoli',
    sex:'female',
    single:true,
    hometown:'GZ',
    receiveFlower:function(){
            xiaohong.moodchange();
            let k=setInterval(()=>{
                if(xiaohong.isHappy===false){
                    console.log('小红目前心情不好，送花失败，再等等吧。');
                }else{
                    console.log('小红现在很开心，送花成功。');
                    xiaohong.listenGoodMood();
                }
            },2000);
    },
};
xiaoming.sendFlower(xiaohong);
xiaoming.sendFlower(xiaoli);