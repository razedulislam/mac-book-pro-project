function totalPrice(extra , id){
    const totalPrice = document.getElementById('total-price') ;
    const totalPriceText = totalPrice.innerText ;
    const totalPriceValue = parseInt(totalPriceText) ;
    const memoryPrice = document.getElementById(id) ;
    const memoryPriceText = memoryPrice.innerText ;
    const memoryPriceValue = parseInt(memoryPriceText) ;
    if(memoryPriceValue === extra){
        memoryPrice.innerText = memoryPriceValue - extra ;
        totalPrice.innerText = totalPriceValue -extra ;
    }
    else{
        totalPrice.innerText = totalPriceValue ;
    }
   
    
}


function extraTotal(extra , id){
    const totalPrice = document.getElementById('total-price') ;
    const totalPriceText = totalPrice.innerText ;
    const totalPriceValue = parseInt(totalPriceText) ;
    const memoryPrice = document.getElementById(id) ;
    const memoryPriceText = memoryPrice.innerText ;
    const memoryPriceValue = parseInt(memoryPriceText) ;
    memoryPrice.innerText = memoryPriceValue ;
    const extraCost = extra ;
    const memoryPriceCost = memoryPriceValue + extra ;
    if(memoryPriceCost <= extraCost){
        memoryPrice.innerText = extraCost ;
    totalPrice.innerText = totalPriceValue + extraCost ;
    }
}

document.getElementById('eightGbMemory').addEventListener('click' , function(){
    totalPrice(120 , 'memory-price') ;
}) ;

document.getElementById('sixteenGBMemory').addEventListener('click' , function(){
    extraTotal(120 , 'memory-price') ;
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
    const totalPrice = document.getElementById('total-price') ;
    let totalPriceValue = parseInt(totalPrice.innerText) ;
    if(promoText === 'offer2022'){
       totalPriceValue = totalPriceValue - (totalPriceValue*20)/100 ;
       totalPrice.innerText = totalPriceValue ;
    }

    promoInput.value = '' ;

},  {once : true})


