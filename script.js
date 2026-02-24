window.onload = function(){
  setTimeout(()=>document.getElementById("line1").style.opacity=1,800);
  setTimeout(()=>document.getElementById("line2").style.opacity=1,2000);
  setTimeout(()=>document.getElementById("line3").style.opacity=1,3500);

  const finalTexts = document.querySelectorAll(".overlay p");
  finalTexts.forEach((el,i)=>{
    setTimeout(()=>el.style.opacity=1,5000+(i*1200));
  });
}

function startMeter(){
  const bar = document.getElementById("progress");
  const text = document.getElementById("meterText");
  bar.style.width="87%";
  text.innerText="Still growing.";
}
