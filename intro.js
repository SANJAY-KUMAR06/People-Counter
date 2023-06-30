let count=0;
let countEl=document.getElementById('count');

function increase(){
    count+=1;
    countEl.innerHTML=count;
}
let saveEl=document.getElementById("showing-lastEntires");

function save(){
    
   let entrires=count +" - "
   saveEl.textContent+= entrires;
   count=0;
   countEl.textContent=count;
  
}


