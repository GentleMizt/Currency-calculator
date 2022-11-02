    const currencyOne = document.getElementById('currency-one').value;
    const currencyTwo = document.getElementById('currency-two').value;
    
    
    
    async function calcRate (){
        const result = await fetch(`https://v6.exchangerate-api.com/v6/0a82f17f0ad06435b9e76ae8/latest/${currencyOne}`);
        const data = await result.json();
        const ratesObj = data.conversion_rates
        console.log(ratesObj);
        console.log(ratesObj[`${currencyOne}`]);
        console.log(ratesObj[`${currencyTwo}`]);

       
        
    }
    calcRate();




    // fetch('https://v6.exchangerate-api.com/v6/0a82f17f0ad06435b9e76ae8/latest/USD').then((data) => {
    //     return data.json();
    // }).then((result) => {
    //     console.log(result)
    // }).catch(error => 
    //     console.log(error)
    // );

