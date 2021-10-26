//Classes
class Budget {
    constructor(budget) {
        this.budget = Number (budget);
        this.budgetLeft = this.budget;
    }
}



//Variables
const addExpenseForm = document.querySelector('#add-expense');


let budget, userBudget;



//Event Listeners
eventListeners();
function eventListeners() {

    //App Init
    document.addEventListener('DOMContentLoaded', function() {
        //Will ask the visitor weekly budget
        userBudget = prompt('What\'s your budget for this week?');
        //Validate the user Budget
        if(userBudget === null || userBudget === '' || userBudget === '0') {
            window.location.reload();
        } else {
            //Budget is valid then instantiate the budget class
        }
    });

    //When a new expense is added
    addExpenseForm.eventListeners('submit', function (e) {
        e.preventDefault();
    });
}