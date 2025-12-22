alert("JS OK");

function startAll(){

  document.getElementById("problems").innerHTML = "";

  generateQ1();
  generateQ2();
  generateQ3();
  generateQ4();
  generateQ5();
  generateQ6();
  generateQ7();
  generateQ8();
  generateQ9();
  generateQ10();
  generateQ11();
  generateQ12();
  
  document.getElementById("btnStart").style.display = "none";

  document.getElementById("btnCheck").style.display = "block";

}

function checkAll(){

  let score = 0;
  
  let total = 12;

  if(checkQ1()) score++;

  if(checkQ2()) score++;
  
  if(checkQ3()) score++;
  
  if(checkQ4()) score++;
  
  if(checkQ5()) score++;
  
  if(checkQ6()) score++;
  
  if(checkQ7()) score++;
  
  if(checkQ8()) score++;
  
  if(checkQ9()) score++;
  
  if(checkQ10()) score++;
  
  if(checkQ11()) score++;
  
  if(checkQ12()) score++;
  
   let msg = "";

  if(score === total){

    msg = "🎉 完璧！全問正解！";

  }else{

    msg = `正解数：${score} / ${total}`;

  }
  
  document.getElementById("score").textContent =

  document.getElementById("btnCheck").style.display = "none";

  document.getElementById("btnReset").style.display = "block";

}

function resetAll(){

  document.getElementById("problems").innerHTML = "";

  document.getElementById("score").textContent = "";

  document.getElementById("btnReset").style.display = "none";

  document.getElementById("btnStart").style.display = "block";

}

let timer = null;

let timeLeft = 360; // 6分

function updateTimer() {

  const box = document.getElementById("timerBox");

  if (!box) return;

  const min = String(Math.floor(timeLeft / 60)).padStart(2, "0");

  const sec = String(timeLeft % 60).padStart(2, "0");

  box.textContent = `${min}:${sec}`;

  // 残り1分で色変更

  if (timeLeft <= 60) {

    box.classList.add("timer-warning");

  } else {

    box.classList.remove("timer-warning");

  }

}

function startTimer() {

  stopTimer();           // 二重起動防止

  timeLeft = 360;

  updateTimer();

  timer = setInterval(() => {

    timeLeft--;

    updateTimer();

    if (timeLeft <= 0) {

      stopTimer();
      
      checkAll();

    }

  }, 1000);

}

function stopTimer() {

  if (timer) {

    clearInterval(timer);

    timer = null;

  }

}

function resetTimer() {

  stopTimer();       // 止める

  timeLeft = 360;    // 6分に戻す

  updateTimer();     // 表示更新

}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker 登録成功:', reg))
      .catch(err => console.log('Service Worker 登録失敗:', err));
  });
}
