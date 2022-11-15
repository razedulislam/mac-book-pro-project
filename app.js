// get total price value 
function getValue(id){
    const totalPrice = document.getElementById(id) ;
    const totalPriceText = totalPrice.innerText ;
    const totalPriceValue = parseInt(totalPriceText) ;
    return totalPriceValue ;
}

// total price calculation 
function totalPrice(extra , id){
    // const totalPrice = document.getElementById('total-price') ;
    // const totalPriceText = totalPrice.innerText ;
    // const totalPriceValue = parseInt(totalPriceText) ;
    const totalPriceValue = getValue('total-price') ;
    const totalBonusPriceValue = getValue('bonus-total') ;

    const memoryPrice = document.getElementById(id) ;
    const memoryPriceText = memoryPrice.innerText ;
    const memoryPriceValue = parseInt(memoryPriceText) ;
    if(memoryPriceValue === extra){
        memoryPrice.innerText = memoryPriceValue - extra ;
        document.getElementById('total-price').innerText = totalPriceValue -extra ;
        document.getElementById('bonus-total').innerText = totalPriceValue -extra ;
    }
    else{
        document.getElementById('total-price').innerText = totalPriceValue ;
        document.getElementById('bonus-total').innerText = totalPriceValue ;
    }  
    return totalPriceValue ;
}

// total price with extra price 
function extraTotal(extra , id){
    // const totalPrice = document.getElementById('total-price') ;
    // const totalPriceText = totalPrice.innerText ;
    // const totalPriceValue = parseInt(totalPriceText) ;
    const totalPriceValue = getValue('total-price') ;
    // const totalBonusPriceValue = getValue('bonus-total') ;

    const memoryPrice = document.getElementById(id) ;
    const memoryPriceText = memoryPrice.innerText ;
    const memoryPriceValue = parseInt(memoryPriceText) ;
    memoryPrice.innerText = memoryPriceValue ;
    const extraCost = extra ;
    const memoryPriceCost = memoryPriceValue + extra ;
    if(memoryPriceCost <= extraCost){
        memoryPrice.innerText = extraCost ;
        let totalExtraPrice = totalPriceValue + extraCost ;
        document.getElementById('total-price').innerText = totalExtraPrice ;
        document.getElementById('bonus-total').innerText = totalExtraPrice ;
    }
    return totalPriceValue ;
}

document.getElementById('eightGbMemory').addEventListener('click' , function(){
   const totalPrices =  totalPrice(120 , 'memory-price') ;
}) ;

document.getElementById('sixteenGBMemory').addEventListener('click' , function(){
    const totalPrice = extraTotal(120 , 'memory-price') ;
});

document.getElementById('ssd1').addEventListener('click' , function(){
 
    totalPrice(80 , 'storage-price') ;
    totalPrice(120 , 'storage-price') ;
});

document.getElementById('ssd2').addEventListener('click' , function(){
    extraTotal(80 , 'storage-price') ;
    
});
document.getElementById('ssd3').addEventListener('click' , function(){
    extraTotal(120 , 'storage-price') ;
    
});
document.getElementById('freeCharge').addEventListener('click' , function(){
    totalPrice(120 , 'delivery-price') ;
    
});
document.getElementById('extraChargr').addEventListener('click' , function(){
    extraTotal(120 , 'delivery-price') ;
    
});


document.getElementById('promoBtn').addEventListener('click' , function(){
    const promoInput = document.getElementById('promoInput') ;
    const promoText = promoInput.value ;
    
    let totalBonus = document.getElementById('bonus-total') ;
    let totalBonusPrice = parseInt(totalBonus.innerText) ;
    if(promoText === 'offer2022'){
       totalBonusPrice = totalBonusPrice - (totalBonusPrice*20)/100 ;
       totalBonus.innerText = totalBonusPrice ;
    }

    promoInput.value = '' ;

},  {once : true})


