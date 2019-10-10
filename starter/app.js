// Budget Controler

var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var allExpenses = [];
    var allIncomes = [];
    var totalExpenses = 0;

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        
        totals: {
            exp: 0,
            inc: 0,
        }
        
    }


})();


// UI controllor iffy function
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getinput: function () {
            return {
                // below gets values from UI input
                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp type from HTML
                description: document.querySelector(DOMstrings.inputDescription).value,

                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    };

})();

// Global app controler
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        });


    };




    var ctrlAddItem = function () {

        // to do list for this function when button is pressed.

        // 1. get field input data from button click
        var input = UICtrl.getinput();
        //        console.log(input);

        // 2. add item to budget controler

        // 3. add new item to user interface

        // 4. calculate the budget

        // 5. display the budget on UI


    };

    return {
        init: function () {
            console.log('app has started');
            setupEventListeners();
        }
    }

})(budgetController, UIController);


controller.init();
