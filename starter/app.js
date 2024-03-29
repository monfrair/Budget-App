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

    var data = {
        allItems: {
            exp: [],
            inc: []
        },

        totals: {
            exp: 0,
            inc: 0
        }

    };

    return {
        addItem: function (type, des, val) {
            var newItem, ID;

            //ID = last ID + 1
            // Create new ID
            if (data.allItems[type].length > 0) {
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                
            } else {
                ID = 0;
            }
            
            
            //Creat new item based on inc or exp type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            //Push into our data structure
            data.allItems[type].push(newItem);
            // Return the new element
            return newItem;
        },
        testing: function() {
            console.log(data);
        }
    };


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

                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        
        addListItem: function(obj, type) {
            var html, newHtml
            // Create HTML string with placeholder text
            if (type === 'inc') {
            
            html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            
            
            } else if (type === 'exp') {
            
            html = '<div class="item clearfix" id="expense-%id%"><divclass="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            // Insert the HTML into the DOM
            
            
        }
        
        
        
        getDOMstrings: function () {
            return DOMstrings;
        }
    };

})();

// Global app controler tell other modules what to do.
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
        var input, newItem;
        // to do list for this function when button is pressed.

        // 1. get field input data from button click
        var input = UICtrl.getinput();
        //        console.log(input);

        // 2. add item to budget controler
        var newItem = budgetCtrl.addItem(input.type, input.description, input.value);

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
