
var cm;var inch;var foot;

function clear_text(){
    document.getElementById('ft').value = "";
      document.getElementById('inch').value = "";
      document.getElementById('cm').value = "";
  }

function cm_to_im() {
  cm = document.getElementById('cm').value ;
    foot = 0;
    inch = cm/2.54;
    
    if(inch > 12){
      foot = Math.trunc(inch/12);
      inch =  inch%12;
      inch = Number(inch.toFixed(0));
    }
    document.getElementById('ft').value = foot;
    document.getElementById('inch').value = inch;
    
    if(foot ==0) 
      document.getElementById('ft').value = "";
    if(inch == 0)
      document.getElementById('inch').value = "";
};
function in_to_cm(){
  inch = document.getElementById('inch').value;
  foot = document.getElementById('ft').value;

  cm = Math.round(2.54*(12*Number(foot) +Number(inch))) ;
  
  document.getElementById('cm').value = cm;
  if(cm ==0) 
      document.getElementById('cm').value = "";
      
}

function moving(){
  if(document.activeElement === document.getElementById('ft'))
    document.getElementById('inch').focus();
  else
    document.getElementById('ft').focus();
}
document.addEventListener('keydown', function(e) {
  if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
    moving();
  }
  if(e.key === 'ArrowUp' || e.key === 'ArrowDown'){
    if(!document.getElementById('cm').disabled){
      document.getElementById('ft').disabled = false;
      document.getElementById('inch').disabled = false;
      document.getElementById('cm').disabled = true;
      document.getElementById('ft').focus();
    }
    else{
      document.getElementById('ft').disabled = true;
      document.getElementById('inch').disabled = true;
      document.getElementById('cm').disabled = false;
      document.getElementById('cm').focus();
    }
  }
},true);

function check(){
  if(document.getElementById('inch').disabled && document.getElementById('ft').disabled)
    cm_to_im();
  else{
    in_to_cm();
  }
}

    document.addEventListener('keyup', function(e) {
      check();
      if(e.key ==='Delete'){
        clear_text();
      }},true);


    


document.getElementById('change').onclick = function() {
  
  if(!document.getElementById('cm').disabled){
    document.getElementById('ft').disabled = false;
    document.getElementById('inch').disabled = false;
    document.getElementById('cm').disabled = true;
  }
  else{
    document.getElementById('ft').disabled = true;
    document.getElementById('inch').disabled = true;
    document.getElementById('cm').disabled = false;
  }
 
}
