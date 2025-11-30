var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: ''
    },
    beforeDestroy: function () {
        clearInterval(timerID);
    }
});

var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
];
var timerID = setInterval(updateTime, 1000);
updateTime();

function updateTime() {
    var cd = new Date();
    var hours = cd.getHours();
    var period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    
    clock.time = zeroPadding(hours, 2) + ':' 
        + zeroPadding(cd.getMinutes(), 2) + ':' 
        + zeroPadding(cd.getSeconds(), 2) 
        + ' ' + period;
        
    clock.date = week[cd.getDay()] + ', ' 
        + months[cd.getMonth()] + ' ' 
        + cd.getDate() + ', ' 
        + cd.getFullYear();
}

function zeroPadding(num, digit) {
    return num.toString().padStart(digit, '0');
}
