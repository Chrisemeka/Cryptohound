const bcoin = document.querySelector('.bcoin');
const ecoin = document.querySelector('.ecoin');
const dcoin = document.querySelector('.dcoin');


const bitcoin = async () => {
    const response = await fetch('https://api.coincap.io/v2/assets/bitcoin')
    const data = await response.json();
    return data;
}

const ethereum = async () => {
    const response = await fetch('https://api.coincap.io/v2/assets/ethereum')
    const data = await response.json();
    return data;
}

const dogecoin = async () => {
    const response = await fetch('https://api.coincap.io/v2/assets/dogecoin')
    const data = await response.json();
    return data;
}



const updatePrice = async data => {
    const bitcoinPrice = await bitcoin();
    const ethereumPrice = await ethereum();
    const dogecoinPrice = await dogecoin();

    return{
        bitcoinPrice: bitcoinPrice,
        ethereumPrice: ethereumPrice,
        dogecoinPrice: dogecoinPrice
    }
}

const updateUi = data => {
    const ethprice = data.ethereumPrice;
    const ethresult = parseFloat(ethprice.data.priceUsd).toFixed(3);

    const bitprice = data.bitcoinPrice;
    const bitresult = parseFloat(bitprice.data.priceUsd).toFixed(3);

    const dodgeprice = data.dogecoinPrice;
    const dodgeresult = parseFloat(dodgeprice.data.priceUsd).toFixed(3);


    bcoin.textContent = `${ethresult} USD`;
    ecoin.textContent = `${bitresult} USD`;
    dcoin.textContent = `${dodgeresult} USD`; 

}

updatePrice().then(data => {
    updateUi(data);
}).catch(err => {
    console.log(err);
});
