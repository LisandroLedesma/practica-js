const btns = document.querySelectorAll('.btn');
const value = document.querySelector('.counter');
let count = 0;

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('reset')) {
            count = 0;
        }
        if (styles.contains('increase')) {
            count++;
        }
        if (styles.contains('decrease')) {
            count--;
        }
        if (count === 0) {
            value.style.color = "rgb(4, 25, 25)";
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        value.textContent = count;
    })
})

// No olvidar la importancia de los btn.removeEventListener(...)