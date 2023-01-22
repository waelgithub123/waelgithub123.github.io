class Display {
    constructor(value) {
        this.counter = false;
        this.displayCurrentValue = value;
        this.displayresult = '';
        this.calculator = new Calculator();
        this.currentValue = '';
        this.result = '';
        this.operationType = undefined;
        this.sign = {
            add : '+',
            subtract : '-',
            divide : '÷',
            multiply : '×',
            percentage : '%'
        }
    }

    addNumber(number) {
        this.counter = false;
        if(number === '.' && this.currentValue.includes('.')) {
            return;
        }
        this.currentValue = this.currentValue + number.toString();
        this.printValue();
    }
    
    printValue() {
        console.log('result - ' + this.result);
        if (this.counter || this.currentValue === '') {
            this.displayCurrentValue.textContent = ` ${this.result} `;
        } else
        {
            this.displayCurrentValue.textContent = this.currentValue;
        }
    }

    deleteAll() {
        this.currentValue = '';
        this.result = '';
        this.operationType = undefined;
        this.printValue();
    }

    calculate() {
        const currentValue = parseFloat(this.currentValue);
        const result = parseFloat(this.result);

        if(isNaN(result) || isNaN(currentValue)) {
            return;
        } else {
            this.currentValue = this.calculator[this.operationType](result, currentValue);
        }
    }

    compute(type) {
        // If this.operationType is not equals to 'equal' then call the method this.calculate()
        this.operationType !== 'equal' && this.calculate();
        this.operationType = type;
        this.result = this.currentValue || this.result;
        this.currentValue = '';
        this.counter = !(this.counter);
        this.printValue();
    }

    changeSign() {
        if (this.currentValue !== "")
            this.currentValue = -parseFloat(this.currentValue);
        else
            this.result = -parseFloat(this.result);
        this.printValue();
    }

    percentage() {
        if (this.currentValue !== "")
            this.currentValue = this.calculator.percentage(parseFloat(this.currentValue));
        else
            this.result = this.calculator.percentage(parseFloat(this.result));
        this.printValue();
    }
}