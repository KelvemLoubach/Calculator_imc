
const calculate = () => {
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let imc = weight / (height * height);
    return imc;
};

const showModal = () => {
    const imc1 = calculate();
    const imc = imc1.toFixed(2);
    if (imc < 18.5) {
        document.getElementById('exampleModalLabel').innerHTML = 'Está abaixo do normal';
        document.getElementById('informations').innerHTML = `Seu índice de massa corporal é ${imc}%!
        Experimente comer mais um pouco.`;
        $('#showModal1').modal('show');
    } if (imc > 18.5 && imc < 24.9) {
        document.getElementById('exampleModalLabel').innerHTML = 'Está normal!';
        document.getElementById('informations').innerHTML = `Seu índice de massa corporal é ${imc}%!
        Experimente comer mais um pouco.`;
        $('#showModal1').modal('show');
    } if (imc > 25 && imc < 29.9) {
        document.getElementById('exampleModalLabel').innerHTML = 'Está acima do normal!';
        document.getElementById('informations').innerHTML = `Seu índice de massa corporal é ${imc}%!
        Experimente comer um pouco menos!`;
        $('#showModal1').modal('show');
    };
};

const display = () => {
    let width = window.innerWidth;
    if (width < 576) {
        document.getElementById('controlWindow').className = 'container mt-5';
    } else {
        document.getElementById('controlWindow').className = 'col-8 mt-5 mb-5';
    };
    console.log(width);
};

