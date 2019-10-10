// Budget Controler

var budgetController = (function () {

    //some code



})();


var UIController = (function () {

    //Some code            

})();

// Global app controler
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

        // to do list for this function when button is pressed.

        // 1. get field input data from button click

        // 2. add item to budget controler

        // 3. add new item to user interface

        // 4. calculate the budget

        // 5. display the budget on UI


    }

    document.querySelector('.add__btn').addEventListener('click', function () {



    })

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem(); //need to rewind 1 minute on video to see what/why this is****
        }
    });


})(budgetController, UIController);
