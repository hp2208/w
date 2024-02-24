// Function to format the date
function formatDate(date) {
    var monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    var dayNames = ['日', '月', '火', '水', '木', '金', '土'];
    var month = monthNames[date.getMonth()];
    var day = date.getDate();
    var weekday = dayNames[date.getDay()];
    return `${month}${day}日(${weekday})`;
}

// Display the formatted date
function displayFormattedDate(date) {
    var formattedDateLink = document.getElementById('formattedDateLink');
    formattedDateLink.textContent = formatDate(date);
}

// Get the current date
var today = new Date();

// Calculate the next weekday
var nextWeekday = new Date(today);
nextWeekday.setDate(nextWeekday.getDate() + (4 + 7 - nextWeekday.getDay()) % 7);

// Set the default value of the date input to the next weekday
var dateInput = document.getElementById('dateInput');
dateInput.valueAsDate = nextWeekday;
displayFormattedDate(nextWeekday);

// Add event listener to date input
dateInput.addEventListener('change', function() {
    var selectedDate = new Date(dateInput.value);
    displayFormattedDate(selectedDate);
    fillCanvasWithText(bindTextToArray(inputCache), formatDate(new Date(dateInput.value)));
});


document.addEventListener('mousemove', evt => {
    //let x = (evt.clientX / innerWidth*100).toFixed(0) + 'vw';
    //let y = (evt.clientY / innerHeight*100).toFixed(0) + 'vh';
    let y = evt.clientY + 'px';

    //document.documentElement.style.setProperty('--mouse-x', x);
    document.documentElement.style.setProperty('--mouse-y', y);
});