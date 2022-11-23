const calculate = document.querySelector('.calculate');

calculate.addEventListener('click', () => {
    // user date
    let inputDate = new Date(document.querySelector('.date').value);

    let userYear = inputDate.getFullYear();
    let userMonth = inputDate.getMonth() + 1;
    let userDay = inputDate.getDate();
    console.log(userYear, userMonth, userDay)


    // current date
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    console.log(currentYear, currentMonth, currentDay)
    console.log(currentDate)

    // get year
    let year = currentYear - userYear;

    // get month
    let month;

    if (currentMonth >= userMonth) {
        month = currentMonth - userMonth;
    } else {
        month = 12 + currentMonth - userMonth;
    }

    // get day
    let day;

    if (currentDay >= userDay) {
        day = currentDay - userDay;
    } else {
        day = 31 + currentDay - userDay;
    }


    document.querySelector('.year').innerHTML = year;
    document.querySelector('.month').innerHTML = month;
    document.querySelector('.day').innerHTML = day;
})