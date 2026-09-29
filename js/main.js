/**
 * Calculadora de Factorial
 * 
 * 1. Solicitar un número al usuario (prompt o input del DOM)
 * 2. Validar que el dato sea de tipo number
 * 3. Calcular el factorial
 * 4. Mostrar el resultado
 */


//  1: Obtener elementos del HTML
const numeroInput = document.getElementById('numeroImput');
const calcularBtn = document.getElementById('calcularBtn');
const errorMensaje = document.getElementById('errorMensaje');
const resultadoContenido = document.getElementById('resultadoContenido');
const resultadoValor = document.getElementById('resultadoValor');

// Función que hace todo el cálculo (la separamos para reutilizarla)
function calcularFactorial() {

    //  3: Obtener valor y validar
    const entrada = numeroInput.value;
    const numero = Number(entrada);

    // Validar: vacío o no es número
    if (isNaN(numero) || entrada === '') {
        errorMensaje.textContent = ' Error: Ingresa un número válido';
        errorMensaje.classList.remove('d-none');
        resultadoContenido.classList.add('d-none');
        numeroInput.classList.add('is-invalid');  // Pone el input en rojo
        return;
    }

    // Validar: número negativo
    if (numero < 0) {
        errorMensaje.textContent = ' Error: El factorial no existe para números negativos';
        errorMensaje.classList.remove('d-none');
        resultadoContenido.classList.add('d-none');
        numeroInput.classList.add('is-invalid');
        return;
    }

    // Validar: número decimal
    if (!Number.isInteger(numero)) {
        errorMensaje.textContent = ' Error: Ingresa un número entero, no decimal';
        errorMensaje.classList.remove('d-none');
        resultadoContenido.classList.add('d-none');
        numeroInput.classList.add('is-invalid');
        return;
    }

    // Si llegamos aquí, el número es válido
    // Ocultar error y quitar rojo del input
    errorMensaje.classList.add('d-none');
    numeroInput.classList.remove('is-invalid');

    //  4: Calcular factorial
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }

    //  5: Mostrar resultado
    resultadoValor.textContent = numero + '! = ' + factorial;
    resultadoContenido.classList.remove('d-none');

    console.log(numero + '! = ' + factorial);
}

//  2: Escuchar clic del botón
calcularBtn.addEventListener('click', calcularFactorial);

// También calcular cuando el usuario presione Enter
numeroInput.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        calcularFactorial();
    }
});

// Quitar el error
numeroInput.addEventListener('input', function () {
    numeroInput.classList.remove('is-invalid');
});
