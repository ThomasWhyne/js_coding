'use strict'
//函数的执行方式决定this指向：
    //1、普通函数调用 this指向全局，在浏览器端即为window，在node端即为global，当启用严格模式之后，其指向undefined；
    //2、作为对象方法被调用时，
var Book=function(isbn,title,author){
    if(isbn=== undefined) throw new Error('Book constructor requires an isbn');
    if(!this.checkIsbn(isbn)) throw new Error('Book Invalid ISBN.');
    this.isbn=isbn;
    this.title=title || 'no title specified';
    this.author = author || 'no title specified';
}
Book.prototype={
    checkIsbn:function(){return true},
    getIsbn:function(){
        console.log(this.isbn);
    },
    setIsbn:function(){

    },
    getTitle:function(){
        return this.title;
    },
    setTitle:function(){},
    getAuthor:function(){},
    setAuthor:function(){},

};
let book=new Book('123456x789');
book.getIsbn();