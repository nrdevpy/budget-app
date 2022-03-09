// === Arrays Variables ===
const deposit = [
    new Deposit('Salario', 1600),
    new Deposit('Venta de coche', 5000)
];

const expense = [
    new Expense('Hipoteca', 800),
    new Expense('Ropa', 100)
];

// === Calcule total value of deposit and expense ===
let totalDeposit = ()=>{
    let totalDeposit = 0;

    for (let data of deposit){
        totalDeposit += data.value;
    }
    return totalDeposit;
};

let totalExpense = ()=>{
    let totalExpense = 0;

    for (let data of expense){
        totalExpense += data.value;
    }
    return totalExpense;
};

// === Apply format to values depend of the locale ===
const currencyFormat = (value)=>{
    return value.toLocaleString(
        'es-ES',{
            style:'currency',
            currency:'EUR',
            minimumFractionDigits: 0
        }
    );
}
const ptgFormat = (value)=>{
    return value.toLocaleString(
        'es-ES',{
            style:'percent',
            minimumFractionDigits:2
        }
    )
}

// === Reload Header ===
let reloadBudget = ()=>{
    let budget = totalDeposit() - totalExpense();
    let ptgExpense = totalExpense() / totalDeposit();

    document.getElementById('budget').innerHTML = currencyFormat(budget);
    document.getElementById('deposit').innerHTML = currencyFormat(totalDeposit());
    document.getElementById('expense').innerHTML = currencyFormat(totalExpense());

    document.getElementById('ptgExpense').innerHTML = ptgFormat(ptgExpense);
};

// === App ===
let startApp = ()=>{
    reloadBudget();
};
