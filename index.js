let totalBill = 0;
let totalPeople = 0;

/* input bill */
const inputBill = document.getElementById('bill');
inputBill.addEventListener('input', () => {
    totalBill = inputBill.value;
})

/* input people */
const inputPeople = document.getElementById('people');
inputPeople.addEventListener('input', () => {
    totalPeople = inputPeople.value;
    totalPeople == 0?  spanError.classList.add('error') : spanError.classList.remove('error');
})

/* span container */
let spanAmount = document.getElementById('tip-amount');
let spanTotal = document.getElementById('tip-total');
let spanError = document.getElementById('msg-error');

/* buttons percentage */
const btns = document.querySelectorAll('.btn-value');
btns.forEach( btn => {
    btn.addEventListener('click', () => {
        if(totalPeople != 0){
            spanError.classList.remove('error');
            inputPeople.classList.remove('input-error');
            let totalValue = totalBill;
            let peopleValue = totalPeople; 
            let tipAmounth = tipAmounthValue(totalValue, btn.value, peopleValue);
            let total = tipTotal(totalValue, tipAmounth, peopleValue);
            spanAmount.innerText = `$${tipAmounth}`;
            spanTotal.innerText = `$${total}`;
        }else{
            spanError.classList.add('error');
            inputPeople.classList.add('input-error');
        }

    });
});

function tipAmounthValue (value, percentage, numberPeople){
    let percentageValue = ((value/100) * percentage).toFixed(2);
    let percentagePPerson = (percentageValue / numberPeople).toFixed(2); 
    return Number(percentagePPerson);
};

function tipTotal(value, tipAmounth, totalPeople){
    return ((value / totalPeople) + tipAmounth).toFixed(2);
};

const btnCustom = document.getElementById('custom');

btnCustom.addEventListener('keypress', (e) => {
    if(e.key == 'Enter' && btnCustom.value != 0 && /\d+/.test(btnCustom.value) && totalPeople != 0){
        spanError.classList.remove('error');
        inputPeople.classList.remove('input-error');
        let totalValue = totalBill;
        let peopleValue = totalPeople;
        let percentage = btnCustom.value;
        let tipAmounth = tipAmounthValue(totalValue, percentage, peopleValue);
        let total = tipTotal(totalValue, tipAmounth, peopleValue);
        spanAmount.innerText = `$${tipAmounth}`;
        spanTotal.innerText = `$${total}`;
    }else{
        spanError.classList.add('error');
        inputPeople.classList.add('input-error');
    }
});

const btnReset = document.querySelector('.btn-reset');

btnReset.addEventListener('click', () => {
    resetValues();
});

function resetValues(){
    spanAmount.innerText = '$0.00';
    spanTotal.innerText = '$0.00';
    inputBill.value = '0';
    inputPeople.value = '0';
    spanError.classList.add('error');
    inputPeople.classList.add('input-error');
};
