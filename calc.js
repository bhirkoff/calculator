let result = document.getElementById("input-text");

let calculate=(num)=>{
  result.value += num;
}

let finalResult = () => {
  try {
    result.value = eval(result.value);
  }

  catch(err) {
    alert("Pls, enter valid figures that can be calculated");
  }
}

let clr = () => {
  result.value = " ";
}

let del = () => {
  result.value = result.value.slice(0, -1);
}