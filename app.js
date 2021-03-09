// Дэлгэцтэй ажиллах event listner
var uiController = (function(){
    var DOMstrings ={
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        addBtn : '.add__btn'
    };
    return{
      getInput:function(){
          return{
              type : document.querySelector(DOMstrings.inputType).value,
              description : document.querySelector(DOMstrings.inputDescription).value,
              value : document.querySelector(DOMstrings.inputValue).value
          }
      },
      getDomstrings: function(){
          return DOMstrings;
      }
    };
})();

// Санхүүтэй ажиллах контролер
var financeController = (function() {
    var Income = function (id, description, value){
        this.id = id;
        this.descripton = description;
        this.value = value;
    };
        
    var Expense = function (id, description, value){
        this.id = id;
        this.descripton = description;
        this.value = value;
    };
    var idata = {
        allItems : {
            inc : [],
            exp : []
        },
        totals : {
            inc : 0,
            exp : 0
        }
    }
})();   

// Программын холбогч контроллер
var appController = (function(uiController, financeController){


var ctrlAddItem =function(){
  // Оруулах өгөгдлийг дэлгэцээс олж авна
   console.log(uiController.getInput())
   // Олж авсан өгөгдлийг санхүүгийн контроллерт дамжуулж тэнд хадгална
   // Олж авсан өгөгдлийг вэб дээр  тохирох хэсэгт нь гаргана
   // Төсвийг тооцоолно.
   // Эцсийн үлдэгдлийг дэлгэцэнд гаргах
};

var setupEventListeners = function(){

var DOM =uiController.getDomstrings();

    document.querySelector(DOM.addBtn).addEventListener('click', function(){
        ctrlAddItem();
       });
         
           document.addEventListener('keypress', function(event){
               if(event.keyCode === 13 || event.which === 13 ) {
       ctrlAddItem();
               }
           });
};

return {
    init: function(){
        console.log('App starting...');
        setupEventListeners();
    }

}

})(uiController, financeController);   

appController.init();