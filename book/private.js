var Book = (function () {
    var numOfBooks=0;
    return function () {
        var isbn,title,author;
        var checkIsbn=function(isbn){
            if(!isbn||typeof isbn!== 'string'){
                console.log('isbn 有误');
            }
        };
        this.setIsbn=function(newisbn){
            if(checkIsbn(newisbn)){
                isbn=newisbn;
            }
        }
        this.getIsbn=function(){
            return isbn;
        }
        this.setTitle=function(newTitle){
            numOfBooks+=1;
            console.log(`创建了${numOfBooks}本书`)
            title=newTitle||'no title specified';
        }
        this.getTitle=function(){
            return title;
        }
        this.getNumofBooks=function(){
            return numOfBooks;
        }
    }
})();
Book.convertToTitlecase=function(inputString){
    return inputString.toUpperCase();
}   
Book.prototype={
    display:function(){
        console.log(`这本书的书名是${this.getTitle()}.`)
    },
};
var book=new Book('1230','飞鸟集','泰戈尔');
book.setTitle('飞鸟集');
console.log(book.getTitle());