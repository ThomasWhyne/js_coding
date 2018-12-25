if(!Function.prototype.the_bind){
    Function.prototype.the_bind=function(context){
        if(!this || typeof this !== 'function')throw "Don't fucking do it";
        let self=this;
        let slice=Array.prototype.slice;
        let empty_fn=function(){};
        let bound_fn=function(){
            return self.apply(this instanceof empty_fn ? this : context, slice.call(arguments));
        }
        if(this.prototype){
            empty_fn.prototype=self.prototype;
        }
        bound_fn.prototype = new empty_fn();
        return bound_fn;
    }
}

var obj={
    name:'jack',
    jack: function() {
        console.log(this.name);
    }
}

var arr={
    name:'larry'
}
// var jack=obj.jack;
setTimeout(function(){
    obj.jack.the_bind(arr)();
},2000)
