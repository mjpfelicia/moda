const emailValido = (email = "") => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email);
}

function validaForm() {
    const input = document.querySelector('input');
    const erroMsg = document.querySelector('#emalErrorMsg');
    const form = document.querySelector('form');
    const inputError = document.querySelector('#inputError');

    if (!emailValido(input.value)) {
        inputError.style.display = 'block';
        erroMsg.style.display = 'block';
        form.style.border = '1px solid red';
    }

}