//connect to the html

//OUTPUTS
let originalRoomCost = 0;
let discountAmmount = 0;// discount, if any
let discountedRoomCost = 0;
let taxAmount = 0;
let totalCost  = 0;
const TAX_RATE = 0.12;

//INPUTS PARAMETERS
function isPeak(checkInDate){
    const JUNE = 5
    const AUGST = 7
    const m = checkInDate.getMonth() //0-11
    return m >= JUNE && m <= AUGST; 
}
function getRate(roomType, checkInDate){
    let rate = 150;//set defualt for non-peak/non-suite
    const peak = isPeak(checkInDate)
    if(peak){
        rate = 250;
    }
    if(roomType != "suite"){
        return rate;// We are done
    }

    //DEFINITALY A SUITE FROM HERE ON OUT 
    if(peak){
        rate = 350;
    }else{
        rate = 210;
    }
    return rate;
}
function getDiscountRate(discountCode){
    let discountPercent = 0.0;//default for none
    return discountPercent; 
}
function calculate(checkInDate, nights, roomType, childrenQuantity, discountType){
    let baseRate = getRate(roomType, checkInDate);
     originalRoomCost = baseRate * nights;
    let discountPercent = getDiscountRate(discountType)
    discountAmmount = originalRoomCost * discountPercent;
    discountedRoomCost = originalRoomCost - discountAmmount;
    taxAmount = discountedRoomCost * TAX_RATE;
    totalCost = discountedRoomCost + taxAmount;
}
calculate(new Date(), 1, "queen", 1, "senior")
console.log(originalRoomCost, discountAmmount, discountedRoomCost, taxAmount, totalCost)
calculate(new Date(), 1, "suite", 1, "senior")
console.log(originalRoomCost, discountAmmount, discountedRoomCost, taxAmount, totalCost)
