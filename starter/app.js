// Budget Controler

var budgetController = (function () {

    //some code



})();


var UIController = (function () {

    //Some code            

})();

// Global app controler
var controller = (function (budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function () {

        // to do list for this function when button is pressed.

        // 1. get field input data from button click

        // 2. add item to budget controler

        // 3. add new item to user interface

        // 4. calculate the budget

        // 5. display the budget on UI

    })

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            console.log('enter was pressed');
        }
    });


})(budgetController, UIController);
