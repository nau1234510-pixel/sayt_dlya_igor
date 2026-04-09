
const btnWT = document.querySelector('#warthunder');
const btnCS2 = document.querySelector('#cs2');
const btnBS = document.querySelector('#BS');
const btnCR = document.querySelector('#CR');
const buy150ge = document.querySelector('#ge150');
const buy5000ge = document.querySelector('#ge5000');
const buyT3457 = document.querySelector('#t3457');
const buySU25K = document.querySelector('#su25k');
const buyFB = document.querySelector('#FB');
const buyUNC = document.querySelector('#UNC');
const buyPAW = document.querySelector('#PAW');
const buyBL = document.querySelector('#BL');
const buyL = document.querySelector('#L');
const buyG1000 = document.querySelector('#G1000');
const buyG500 = document.querySelector('#G500');
const buyG1 = document.querySelector('#G1');
const buyGCR80 = document.querySelector('#GCR80');
const buyGCR500 = document.querySelector('#GCR500');
const buyGCR1200 = document.querySelector('#GCR1200');
const buyDP = document.querySelector('#DP');
const payBtn = document.querySelector('#buy-button');

btnWT?.addEventListener('click', () => {
    window.location.assign('warthunder.html');
});
btnCS2?.addEventListener('click', () => {
    window.location.assign('cs2.html');
});
btnBS?.addEventListener('click', () => {
    window.location.assign('brawlstars.html');
});
btnCR?.addEventListener('click', () => {
    window.location.assign('clashroyale.html');
});
buy150ge?.addEventListener('click', () => {
    window.location.assign('150ge.html');
});
buy5000ge?.addEventListener('click', () => {
    window.location.assign('5000ge.html');
});
buyT3457?.addEventListener('click', () => {
    window.location.assign('t3457.html');
});
buySU25K?.addEventListener('click', () => {
    window.location.assign('su25k.html');
});
buyFB?.addEventListener('click', () => { window.location.assign('fb.html'); });
buyUNC?.addEventListener('click', () => {
    window.location.assign('UNC.html');
});
buyPAW?.addEventListener('click', () => {
    window.location.assign('PAW.html');
});
buyBL?.addEventListener('click', () => {
    window.location.assign('BL.html');
});
buyL?.addEventListener('click', () => {
    window.location.assign('L.html');
});
buyG1000?.addEventListener('click', () => {
    window.location.assign('g1000.html');
});
buyG500?.addEventListener('click', () => {
    window.location.assign('g500.html');
});
buyG1?.addEventListener('click', () => {
    window.location.assign('g1.html');
});
buyGCR80?.addEventListener('click', () => {
    window.location.assign('gcr80.html');
});
buyGCR500?.addEventListener('click', () => {
    window.location.assign('gcr500.html');
});
buyGCR1200?.addEventListener('click', () => {
    window.location.assign('gcr1200.html');
});
buyDP?.addEventListener('click', () => {
    window.location.assign('dp.html');
});

payBtn?.addEventListener('click', () => {
    window.location.assign('pay.html');
});

setTimeout(() => {
    const payElem = document.getElementById('waitforpay');
    if (payElem) {
        payElem.textContent = "Ваш платіж завершено";

        const btnHome = document.createElement('button');
        btnHome.textContent = "На головну";
        btnHome.className = "buy-button";
        btnHome.style.marginTop = "10px";
        btnHome.style.padding = "10px 20px";
        btnHome.style.fontSize = "16px";
        btnHome.style.cursor = "pointer";

        btnHome.addEventListener('click', () => {
            window.location.assign('index.html');
        });

        const parent = payElem.parentElement;
        if (parent) {
            const imgs = parent.querySelectorAll('img');
            if (imgs.length > 0) {
                imgs[imgs.length - 1].insertAdjacentElement('afterend', btnHome);
            } else {
                payElem.insertAdjacentElement('afterend', btnHome);
            }
        }
    }
}, 3000);


const API_KEY = "6072ffe45fe53e585229b337";

const rates = [
    { code: "USD", elemId: "usd-rate", inputId: "usd-input", resultId: "usd-uah-result" },
    { code: "PLN", elemId: "pln-rate", inputId: "pln-input", resultId: "pln-uah-result" },
    { code: "EUR", elemId: "eur-rate", inputId: "eur-input", resultId: "eur-uah-result" },
    { code: "HUF", elemId: "ltl-rate", inputId: "ltl-input", resultId: "ltl-uah-result" }
];

rates.forEach(rate => {
    let conversionRate = 0;

    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${rate.code}`)
        .then(res => res.json())
        .then(data => {
            if (data.result === "success") {
                conversionRate = data.conversion_rates.UAH;
                const rateElem = document.getElementById(rate.elemId);
                if (rateElem) {
                    rateElem.textContent = `1 ${rate.code} = ${conversionRate.toFixed(2)} грн`;
                }
            }
        })
        .catch(err => console.log(`Помилка завантаження ${rate.code}:`, err));

    const inputElem = document.getElementById(rate.inputId);
    const resultElem = document.getElementById(rate.resultId);

    if (inputElem && resultElem) {
        inputElem.addEventListener('input', () => {
            const val = parseFloat(inputElem.value);
            if (!isNaN(val)) {
                const uah = val * conversionRate;
                resultElem.textContent = `Сума в гривнях: ${uah.toFixed(2)} грн`;
            } else {
                resultElem.textContent = "Сума в гривнях: ...";
            }
        });
    }
});
