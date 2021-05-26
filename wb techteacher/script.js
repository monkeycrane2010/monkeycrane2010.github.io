console.log ('X plus 2');

const cb = document.querySelector('#accept');
const btn = document.querySelector('#btn');
btn.onclick = () => {
    const result = cb.value;
    alert(result); // on
};