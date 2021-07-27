import '../../css/timer.css';
//
import Swal from 'sweetalert2';
//
import { convertMs } from './convert-timer';
import { input, startButton, days, hours, minutes, seconds } from './refs-timer';

let timeEmpt = null;
let deadlineObject = null;

startButton.disabled = true;

class Timer {
    getDeadline(event) {
        const currentTime = Date.now();
        const term = Date.parse(event.target.value);

        timeEmpt = term - currentTime;

        if (term > currentTime) {
            startButton.disabled = false;
        }

        if (term <= currentTime) {
            Swal.fire({
                title: 'Error!',
                text: 'Please choose a date in the future',
                icon: 'error',
                confirmButtonText: 'Understood',
            });

            startButton.disabled = true;
        }
    }

    start() {
        let deadline = timeEmpt;

        const intervalId = setInterval(() => {
            if (deadline > 999) {
                //Тут
                deadline -= 1000;

                deadlineObject = convertMs(deadline);

                days.textContent = deadlineObject.days;
                hours.textContent = deadlineObject.hours;
                minutes.textContent = deadlineObject.minutes;
                seconds.textContent = deadlineObject.seconds;
            }

            if (deadline < 1000) {
                //Тут
                clearInterval(intervalId);

                Swal.fire({
                    title: 'Finish!',
                    text: 'The time has come',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
            }
        }, 1000);
    }
}

const timer = new Timer();

input.addEventListener('change', timer.getDeadline);
startButton.addEventListener('click', () => {
    timer.start();
    input.disabled = true;
    startButton.disabled = true;
});