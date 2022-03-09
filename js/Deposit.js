class Deposit extends Data{
    static counterDeposit = 0;

    constructor(description, value){
        super(description, value);

        this._id = ++Deposit.counterDeposit;
    }

    get id(){
        return this._id;
    }
}