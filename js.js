// ADD FUNCTIONALITY that gets time from birth using seconds minutes hours and more information from user

// set user input to input element with id date
let userInput = document.getElementById("date");
let result = document.getElementById("result");

// stops users selecting dates later than current 
// can only select past date using max property - create new date, toISOString converts date object to inverse string format of date layout, seperated by "T" which is time with [0] accessing the date portion of the array data with . max being set to the current date to prevent users from accessing dates later than the current date
userInput.max = new Date().toISOString().split("T")[0];

// calculate age will use the current date, then extrapolate days between using users birthdate and math.
function calculateAge(){
    // birthdate is user value
    let birthDate = new Date(userInput.value);
    // get day - month ++ 0 indexed - year
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() +1;
    let y1 = birthDate.getFullYear();
    // get todays date
    let today = new Date();
    // day month++ year
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    // create 3 new variables to save difference between dates
    let d3,m3,y3;

    // get year difference
    y3 = y2 - y1;

    // get month difference
    // if todays month is bigger or equal
    if (m2 >= m1){
        m3= m2-m1;
    } else {
        // minus one from year
        y3--;
        // 12 plus todays month - larger birth month
        m3 = 12 + m2 -m1;
    }

    if (d2 >= d1){
        d3 = d2-d1;
    } else{
        m3--;
        // run function with birth year and birth month
        // grab limit, minus todays + birthdate
        d3 = getDaysInMonth(y1,m1) + d2 - d1;
        
    }

    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    // get day difference
    // console.log(y3,m3,d3);
    // console.log(result);
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;

}

// get exact days in month
// 0 represents last day
// date return between 1 - 31
function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}

// console.log(getDaysInMonth(2023, 5));