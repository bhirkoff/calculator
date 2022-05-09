let result = document.getElementById("input-text");

let calculate=(num)=>{
  result.value += num;
}

function clr(){
  result.value = " ";
}

function del(){
  result.value = result.value.slice(0, -1);
}

let finalResult = () => {
  try {
    result.value = eval(result.value);
  }

  catch(err) {
    alert("Pls, enter valid figures that can be calculated");
  }
}

const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');

const btn = document.querySelectorAll('button');

btn.addEventListener('click', () => {
  audio.play();
})