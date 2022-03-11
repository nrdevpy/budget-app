// === Arrays Variables ===
const deposits = [
    new Deposit('Salario', 1600),
    new Deposit('Venta de coche', 5000),
    new Deposit('Venta de consola', 200),
];

const expenses = [
    new Expense('Hipoteca', 800),
    new Expense('Ropa', 100),
    new Expense('Mochila', 30),
];

// === Calculate total value of deposit and expense ===
let totalDeposit = () => {
    let totalDeposit = 0;

    for (let data of deposits) {
        totalDeposit += data.value;
    }
    return totalDeposit;
};

let totalExpense = () => {
    let totalExpense = 0;

    for (let data of expenses) {
        totalExpense += data.value;
    }
    return totalExpense;
};

// === Apply format to values depend of the locale ===
const currencyFormat = (value) => {
    return value.toLocaleString(
        'es-ES', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0
        }
    );
}
const ptgFormat = (value) => {
    return value.toLocaleString(
        'es-ES', {
            style: 'percent',
            minimumFractionDigits: 2
        }
    )
};

// === Reload Header ===
let reloadBudget = () => {
    let budget = totalDeposit() - totalExpense();
    let ptgExpense = totalExpense() / totalDeposit();

    document.getElementById('budget').innerHTML = currencyFormat(budget);
    document.getElementById('deposit').innerHTML = currencyFormat(totalDeposit());
    document.getElementById('expense').innerHTML = currencyFormat(totalExpense());

    document.getElementById('ptgExpense').innerHTML = ptgFormat(ptgExpense);
};

// === Upload Deposits and Expenses ===
const uploadDeposit = () => {
    let depositHTML = '';

    for (let deposit of deposits) {
        depositHTML += createDepositHTML(deposit);
    }

    document.getElementById('list__deposit').innerHTML = depositHTML;
};
const uploadExpense = () => {
    let expenseHTML = '';

    for (let expense of expenses) {
        expenseHTML += createExpenseHTML(expense);
    }

    document.getElementById('list__expense').innerHTML = expenseHTML;
};

// === Create deposit and expense HTML ===
const createDepositHTML = (deposit) => {
    let depositHTML = `
    <div class="list__element" id="list__deposit">
        <div class="deposit__element">
            <div class="element__description">
                <p>${deposit.description}</p>
            </div>
        </div>
        <div class="element__value">
            <p>${currencyFormat(deposit.value)}</p>
            <button class="element__remove--btn">
                <ion-icon
                    name="close-circle-outline"
                    onclick="dltDeposit(${deposit.id})">
                </ion-icon>
            </button>
        </div>
    </div>
    `;
    return depositHTML;
};
const createExpenseHTML = (expense) => {
    let ptgExpense = expense.value / totalDeposit();
    let expenseHTML = `
    <div class="list__element" id="list__deposit">
        <div class="expense__element">
            <div class="element__description">
                <p>${expense.description}</p>
            </div>
        </div>
        <div class="element__value">
            <p>${currencyFormat(expense.value)}</p>
            <p class="expenseLightColor">${ptgFormat(ptgExpense)}</p>
            <button class="element__remove--btn">
                <ion-icon
                    name="close-circle-outline"
                    onclick="dltExpense(${expense.id})">
                </ion-icon>
            </button>
        </div>
    </div>
    `;
    return expenseHTML;
};
// === Function to remove elements from list ===
const dltDeposit = (id)=>{
    let idRemove = deposits.findIndex(deposits => deposits.id === id);
    deposits.splice(idRemove, 1);
    uploadDeposit();
    reloadBudget();
};

const dltExpense = (id)=>{
    let idRemove = expenses.findIndex(expenses => expenses.id === id);
    expenses.splice(idRemove, 1);
    uploadExpense();
    reloadBudget();
};
// === Submit of colors ===

// ! I Tried more option like functions of below, but doesn't works in Microsoft Edge.
/* const turnIconColor = ()=>{
    let selectValueHandler = document.forms['form']['select'].value;
    let btnStyleHandler = document.getElementById('add-btn').style;
    
    if (selectValueHandler === 'deposit'){
        btnStyleHandler.color = 'var(--depositColor)';
    }
    else if (selectValueHandler === 'expense'){
        btnStyleHandler.color = 'var(--expenseColor)';
    }
} */

/* const turnIconSeaGreen = () => {
    let btnStyleHandler = document.getElementById('add-btn').style;

    return btnStyleHandler.color = 'var(--depositColor)';
    console.log(btnStyleHandler);
}
const turnIconRed = () => {
    let btnStyleHandler = document.getElementById('add-btn').style;
    
    return btnStyleHandler.color = 'var(--expenseColor)';
    console.log(btnStyleHandler);
} */

const turnIconColor = ()=>{
    let selectHandler = document.forms['form']['select'];
    let btnStyle = document.getElementById('add-btn').style;

    if (selectHandler.value === 'deposit'){
        btnStyle.color = 'var(--depositColor)';
    }
    else if (selectHandler.value === 'expense'){
        btnStyle.color = 'var(--expenseColor)';
    }
};

// === App ===
let startApp = () => {
    uploadDeposit();
    uploadExpense();
    reloadBudget();
};