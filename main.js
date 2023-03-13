/* LIVE 3: 
dato un array di numeri interi, stampare solo i numeri dispari */

const arrayNumber = [1, 2, 5, 6, 7, 12, 55];
const container = document.querySelector('.container');


for (let i = 0; i < arrayNumber.length; i++) {
    let element = arrayNumber[i];
    const divEl = document.createElement('div');
    if (element % 2 != 0) {
        divEl.innerHTML = element;
    }
    container.append(divEl);
}