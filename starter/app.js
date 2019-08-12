// Budget Controler

var budgetController = (function () {

    //some code

})();


var UIController = (function () {

    //Some code            

})();


var controller = (function (budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function () {
        console.log('Button Was clicked');
    })


})(budgetController, UIController);
