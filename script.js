const initialPrice = document.querySelector('#initial-price');
const stockQuantity = document.querySelector('#stock-quantity');
const currentPrice = document.querySelector('#current-price');
const submitbutton = document.querySelector('#submit-btn');
const outputArea = document.querySelector('#output-area');

function checkProfitOrLoss() {
    // console.log(initialPrice.value);
    let initialPriceNum = Number(initialPrice.value);
    let stockQuantityNum = Number(stockQuantity.value);
    let currentPriceNum = Number(currentPrice.value);

    if (initialPriceNum <= 0 || stockQuantityNum <= 0 || currentPriceNum <= 0) {
        outputArea.innerText = "Please give valid inputs.";
    }
    else{
        calculateProfitAndLoss(initialPriceNum, stockQuantityNum, currentPriceNum);
    }

}

function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current){
        let loss = (initial - current) * quantity;
        let lossPercentage = ((loss / initial) * 100).toFixed(2);

        outputArea.innerText = `loss is ${loss} and loss percentage is ${lossPercentage}%.`;
    }
    else if (initial < current){
        let profit = (current - initial) * quantity;
        let profitPercentage = ((profit / initial) * 100).toFixed(2);

        outputArea.innerText = `profit is ${profit} and profit percentage is ${profitPercentage}%.`;
    }
    else{
        outputArea.innerText = `Neither profit nor loss!`;
    }
}



submitbutton.addEventListener('click', checkProfitOrLoss);