/**
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
 * If the function is passed a valid PIN string, return true, else return false.
 * ESPAÑOL
 * Los cajeros automáticos permiten códigos PIN de 4 o 6 dígitos y los códigos PIN no pueden contener nada más que exactamente 4 dígitos o exactamente 6 dígitos.
 * Si a la función se le pasa una cadena de PIN válida, devuelve verdadero, de lo contrario, devuelve falso.
 * 
 * Examples (Input --> Output)
 * "1234"   -->  true
 * "12345"  -->  false
 * "a234"   -->  false
 * 
 */

function validatePIN (pin) {
    // return /^(\d{4}|\d{6})$/.test(pin) // solucion optima
    const regex = /^[0-9]*$/;
    const len = pin.length;
    return regex.test(pin) && (len === 4 || len === 6) ? true : false
}

validatePIN("1234") //   -->  true
validatePIN("12345") //  -->  false
validatePIN("a234") //   -->  false
validatePIN("-1.234") //   -->  false