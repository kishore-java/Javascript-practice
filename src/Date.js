
var today = new Date(); //returns date

var day = today.getDay(); //returns the number

var dayList = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];// create an arrray of days

console.log(`today is: ${dayList[day]}` )

var hour = today.getHours();// returns the no of hours

var minutes= today.getMinutes();// return exact mins

var second = today.getSeconds(); // retutn the exact seconds

var prepand = (hour>=12)?'pm':'am'; // stores the meridian

hour = (hour>=12)?(hour-12):hour;

if(hour===0 && prepand==='pm'){   //checking the condition for hour
    if(minutes===0 && second===0){ // checking the condition for minutes
         hour=12;
         prepand='noon';
    }
else {                
    hour = 12;
    prepand='pm';
}
}

if(hour===0 && prepand==='am'){
    if(minutes===0 && second===0){
        hour=12;
        prepand='midnight'
    }
    else{
        hour=12;
        prepand='am'
    }
}
console.log(`time is: ${hour} ${prepand} : ${minutes}: ${second}`);