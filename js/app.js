//Classes




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
    });

    //When a new expense is added
    addExpenseForm.eventListeners('submit', function (e) {
        e.preventDefault();
    });
}