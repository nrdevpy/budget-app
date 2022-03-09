class Expense extends Data{
    static counterExpense = 0;

    constructor(description, value){
        super(description, value);

        this._id = ++Expense.counterDeposit;
    }

    get id(){
        return this._id;
    }
}