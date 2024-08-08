let hr = document.getElementById("hr");
let min =  document.getElementById("min");
let sec =  document.getElementById("sec");
let whichTime = document.getElementById("whichTime");

setInterval(()=>{
    hr.innerHTML = new Date().getHours();
    min.innerHTML= new Date().getMinutes();
    sec.innerHTML = new Date().getSeconds();

    hr.innerHTML = ( hr.innerHTML < 10 ? "0"+ hr.innerHTML : hr.innerHTML);
    min.innerHTML = ( min.innerHTML < 10 ? "0"+ min.innerHTML : min.innerHTML);
    sec.innerHTML = ( sec.innerHTML < 10 ? "0"+ sec.innerHTML : sec.innerHTML);

    whichTime.innerHTML = (hr.innerHTML < 10 ? "am" : "pm");

},1000);
