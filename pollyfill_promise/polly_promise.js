class Polly_Promise{
    constructor(executor){
        this.status='pending';
        this.value=undefined;
        this.reason=undefined;
        this.onRejectedCallbacks=[];
        this.onResolveCallbacks=[];
        let resolve=(value)=>{
            this.status="resolved";
            this.value=value;
            this.onResolveCallbacks.forEach(fn=>fn(this.value));
        };
        let reject=(reason)=>{
            this.status="rejected";
            this.reason=reason;
            this.onRejectedCallbacks.forEach(fn=>fn());
        };
        executor(resolve,reject);
    }
    polly_then(onFullfilled,onRejected){
        if(this.status==='pending'){
            this.onResolveCallbacks.push(onFullfilled.bind(this));
            this.onRejectedCallbacks.push(()=>onRejected);
        }
    }
}

module.exports=Polly_Promise;