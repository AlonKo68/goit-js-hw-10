// library flatpickr
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

//library iziToast
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const elements = {
    input: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    day: document.querySelector('[data-days]'),
    hour: document.querySelector('[data-hours]'),
    minute: document.querySelector('[data-minutes]'),
    second: document.querySelector('[data-seconds]')
}
console.log(elements);

let userSelectedDate;
let timerInterval;

elements.btnStart.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDate) {
        userSelectedDate = selectedDate[0];

        if (userSelectedDate > new Date()) {
            elements.btnStart.disabled = false;
        } else {
            iziToast.show({
                title: 'Error',
                message: 'Please choose a date in the future',
                backgroundColor: '#ff5733',
                messageColor: '#F5F5F5',
                titleColor: '#F5F5F5',
                iconColor: '#F5F5F5',
                overlayColor: '#F5F5F5',
                position: 'topRight',
            });
        }
    },
};

flatpickr('#datetime-picker', options);

elements.btnStart.addEventListener('click', startCountDown);

function startCountDown() {
    elements.btnStart.disabled = true;
    elements.input.disabled = true;
    const endTime = userSelectedDate.getTime();

    timerInterval = setInterval(() => {
        const currenTime = new Date().getTime();
        const diffTime = endTime - currenTime;

        if (diffTime <= 0) {
            clearInterval(timerInterval);
            elements.input.disabled = false;
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(diffTime);
        updateTimerDisplay(days, hours, minutes, seconds);

    }, 1000)

}

function updateTimerDisplay(days, hours, minutes, seconds) {
    elements.day.textContent = addLeadingZero(days);
    elements.hour.textContent = addLeadingZero(hours);
    elements.minute.textContent = addLeadingZero(minutes);
    elements.second.textContent = addLeadingZero(seconds);
}


function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}