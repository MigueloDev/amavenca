
const toFixed = (num, fixed) => {///funcion para cortar montos con dos decimales sin redondear
  const re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
  return num.toString().match(re)[0];
}

export default toFixed