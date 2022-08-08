let currencyElement_1=document.getElementById('currency-one');
let currencyElement_2=document.getElementById('currency-two');

let amountElement_1=document.getElementById('amount-one');
let amountElement_2=document.getElementById('amount-two');

let rateElement=document.getElementById('rate');

let swap=document.getElementById('swap');

function Calculate(){
    const currency1=currencyElement_1.value;
    const currency2=currencyElement_2.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/59ff872c7cadc834bb3d99e9/latest/${currency1}`)
    .then(response=>response.json())
    .then((data)=>{
        let rate=data.conversion_rates[currency2];
        rateElement.innerText=`1 ${currency1}=${rate} ${currency2}`;
        
        amountElement_2.value=(amountElement_1.value * rate).toFixed(2);
    });
}

currencyElement_1.addEventListener('change',Calculate);
currencyElement_2.addEventListener('change',Calculate);
amountElement_1.addEventListener('change',Calculate);
amountElement_2.addEventListener('change',Calculate);

swap.addEventListener('click',()=>{
    let temp=currencyElement_1.value;
    currencyElement_1.value=currencyElement_2.value;
    currencyElement_2.value=temp;
    Calculate();
})

Calculate();