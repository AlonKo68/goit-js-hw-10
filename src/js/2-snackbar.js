import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();

    const delay = event.target.elements.delay.value;
    let state = document.querySelector('input[name="state"]:checked').value;

    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                res('fulfilled');
            } else {
                rej('rejected');
            }
        }, delay);
    });

    promise
        .then(res => {
            iziToast.show({
                title: '✅ Ok',
                message: `Fulfilled promise in ${delay} ms`,
                backgroundColor: '#59a10d',
                messageColor: '#fff',
                titleColor: '#fff',
                icon: '',
                position: 'topRight',
            });
        })
        .catch(rej => {
            iziToast.show({
                title: '❌ Error',
                message: `Rejected promise in ${delay} ms`,
                backgroundColor: '#ef4040',
                messageColor: '#fff',
                titleColor: '#fff',
                icon: '',
                position: 'topRight',
            });
        });
}