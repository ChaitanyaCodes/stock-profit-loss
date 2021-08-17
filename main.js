const listOfInputs = document.querySelectorAll(".input");
const checkBtn = document.querySelector(".check-btn");
const messageArea = document.querySelector(".message-area");


checkBtn.addEventListener("click", handleCheck);

function handleCheck(){
    let stockPrice = Number(listOfInputs[0].value);
    let stockQuantity = Number(listOfInputs[1].value);
    let stockCurrentPrice = Number(listOfInputs[2].value);

    if(stockPrice > 0 && stockQuantity > 0 && stockCurrentPrice > 0){
        if(stockPrice > stockCurrentPrice){ // loss
            let originalTotalValue = stockPrice * stockQuantity;
            let diff = (stockPrice - stockCurrentPrice) * stockQuantity;
            let lossPercentage = calculatePercentage(originalTotalValue, diff);
            messageArea.innerText = `You lost ${lossPercentage}%. Your total loss is ₹${diff}.`;
            
        }else{
            // profit
            let originalTotalValue = stockPrice * stockQuantity;
            let diff = (stockCurrentPrice - stockPrice) * stockQuantity;
            let profitPercentage = calculatePercentage(originalTotalValue, diff)
            messageArea.innerText = `You gained ${profitPercentage}%. Your total profit is ₹${diff}`;
        }

    }else{
        messageArea.innerText = "Please enter numbers in all fields & make sure the values are greater then 0 ";
    }

}

function calculatePercentage(originalValue, diff){
    let percentage = (diff / originalValue) * 100;
    return percentage;
}