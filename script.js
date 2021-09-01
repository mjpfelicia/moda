// const inputEmail = document.querySelector("input#email");


// if (input.validity.typeMismatch) {
//     input.setCustomValidity("Dude '" + input.value + "' não é um e-mail válido. Digite algo legal !!");
// }
// outro {
//     input.setCustomValidity("");
// }

function validaForm() {
    const input = document.querySelector('input');
    const erroMsg = document.querySelector('#emalErrorMsg');


    input.oninvalid = (e) => {

        e.target.setCustomValidity("");

        if (!e.target.validity.valid) {
            e.target.setCustomValidity("");

            erroMsg.style.display = 'block';

        }
        console.log({ e });

    }
}