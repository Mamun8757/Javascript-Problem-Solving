// Problem 01: KilometerToMeter Conversion Solution is here...

function kilometerToMeter(kilometer){
    if(kilometer > 0){
        var meter = kilometer * 1000;
        return meter;
    }
    else if(kilometer < 0){
        return "Error: length can't be Negative"; //Negative value Error handing.
    }
   
}
var result = kilometerToMeter();
console.log(result);


// Problem 02: BudgetCalculator Solution is here...

function budgetCalculator(watch, mobile, laptop){
   if(watch, mobile, laptop > 0){
        var watchPrice = watch * 50;
        var mobilePrice = mobile * 100;
        var laptopPrice = laptop * 500;
        var sum = watchPrice + mobilePrice + laptopPrice;
        return sum;
   }
   else if(watch, mobile, laptop < 0){
       return "Error: Quantity can't be negative"; //This Error handling only for Laptop.
   }
}
var result = budgetCalculator();
console.log(result);


// Problem 03: HotelCost Solution is here...

function hotelCost(totalDays){
    var totalRent = 0;
    if(totalDays <=10){
        var rent = totalDays * 100;
    }
    else if(totalDays <=20){
        var first_10_days_rent = 10 * 100;
        var remaining_days = totalDays - 10;
        var second_10_days_rent = remaining_days * 80;
        var rent = first_10_days_rent + second_10_days_rent;
    }
    else{
        var first_10_days_rent = 10 * 100;
        var second_10_days_rent = 10 * 80;
        var remaining_days = totalDays - 20;
        var after_20_days_rent = remaining_days * 50;
        var rent = first_10_days_rent + second_10_days_rent + after_20_days_rent;
    }
    return rent;
}
var output = hotelCost();
console.log(output);


// Problem 04: MegaFriend Solution is here...

function megaFriend(friendsName){
    if(friendsName.length > 0){
        var largestName = friendsName[0];
        for(i = 1; i < friendsName.length; i++){
            if(typeof friendsName[i] == 'string'){
                var element = friendsName[i];
                if(largestName.length < element.length){
                    largestName = element;
                }
            }
            else{
                return "Error: Please put the string only. "; //for unexpected error handling.
            }
    
        }
        return largestName;
    }
    else{
        return "You can't submit empty string" //Empty string error handling.
    }
    
}

// Ending...........
