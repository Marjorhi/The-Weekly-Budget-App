//Classes

class Budget {
    constructor(budget) {
        this.budget = Number (budget);
        this.budgetLeft = this.budget;
    }

    //Subract from the budget
    substractFromBudget(amount) {
        return this .budgetLeft -= amount;
    }
}

//Everything related to HTML
class HTML {
    
    //Inserts the budget when the users submits it
    insertBudget(amount) {
        //Insert into HTML
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }

    //Displays a message (correct or invalid)
    printMessage(message, className) {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('text-center', 'alert', className);
        messageWrapper.appendChild(document.createTextNode(message));

        //Insert into HTML
        document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);

        //Clear the error 
        setTimeout(function(){

            document.querySelector('.primary .alert').remove();
            addExpenseForm.reset();
        }, 3000);
    }
    //Displays the expenses from the form into the list
    addExpenseToList(name, amount) {
        const expensesList = document.querySelector('#expenses ul');

        //Create a li
        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        //Create the template
        li.innerHTML = `
        ${name}
        <span class="badge badge-primary badge-pill">$ ${amount}</span>
        `;

        //Insert into the HTML
        expensesList.appendChild(li);
    }

    //Subtract expenses amount from budget
    trackBudget(amount) {
        const budgetLeftDollars = budget.substractFromBudget(amount);
        budgetLeft.innerHTML = `${budgetLeftDollars}`;

        //Check when 25% is left
        if( (budget.budget / 4) > budgetLeftDollars ){
            budgetLeft.parentElement.parentElement.classList.remove('alert-success',
            'alert-warning');
            budgetLeft.parentElement.parentElement.classList.add('alert-danger');
        } else if( (budget.budget / 2) > budgetLeftDollars) {
            budgetLeft.parentElement.parentElement.classList.remove('alert-success');
            budgetLeft.parentElement.parentElement.classList.add('alert-warning');
        }
    }
}

//Variables
const addExpenseForm = document.querySelector('#add-expense'),
budgetTotal = document.querySelector('span#total'),
budgetLeft = document.querySelector('span#left');

let budget, userBudget;

//Instantiate the HTML Class
const html = new HTML();

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
            budget = new Budget(userBudget);

            //Instantiate HTML class
            html.insertBudget(budget.budget);
        }
    });

    //When a new expense is added
    addExpenseForm.addEventListener('submit', function(e) {
        e.preventDefault();

        //Read the input values
        const expenseName = document.querySelector('#expense').value;
        const amount = document.querySelector('#amount').value;

        if(expenseName === '' || amount === '' ) {
            html.printMessage('There was an error, all the fields are mandatory',
            'alert-danger');
        } else {
            //Add the expenses into the list
            html.addExpenseToList(expenseName, amount);
            html.trackBudget(amount);
            html.printMessage('Added...', 'alert-success');
        }
    });
}