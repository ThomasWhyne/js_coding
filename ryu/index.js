const Ryu={
    name:'Ryu',
    attack(){
        console.log('attack')
    },
    defense(){
        console.log('defence')
    },
    crouch(){
        console.log('crouch')
    }
}

const commandStack = [];

const makeCommand=function(receiver,state){
    if(receiver[state]){
        return (command)=>{
            receiver[state]();
            commandStack.push(command);
        }
    }else{
        return console.log
    }
}

const commands={
    "119":"jump",
    "115":"crouch",
    "97":"defense",
    "100":"attack"
}
document.onkeypress=function(eve) {
    var keyCode=eve.keyCode;
    var command=makeCommand(Ryu,commands[keyCode]);
    command(command);
}

document.querySelector('#backBtn').addEventListener('click',function(){
    var command;
    while(command=commandStack.shift()){
        command();
    }
},false)