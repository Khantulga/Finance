// Дэлгэцтэй ажиллах event listner
var uiController = (function(){})();

// Санхүүтэй ажиллах контролер
var financeController = (function() {})();   

// Программын холбогч контроллер
var appController = (function(uiController, financeController){
var ctrlAddItem =function(){
  // Оруулах өгөгдлийг дэлгэцээс олж авна
    console.log('delgetsees ugugdul awah heseg');
   // Олж авсан өгөгдлийг санхүүгийн контроллерт дамжуулж тэнд хадгална
   // Олж авсан өгөгдлийг вэб дээр  тохирох хэсэгт нь гаргана
   // Төсвийг тооцоолно.
   // Эцсийн үлдэгдлийг дэлгэцэнд гаргах
}

document.querySelector('.add__btn').addEventListener('click', function(){
 ctrlAddItem();
});
  
    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13 ) {
ctrlAddItem();
        }
    });
})(uiController, financeController);   