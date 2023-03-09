
var cm;var inch=0;var foot=0;


function rest() {
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
document.addEventListener('keyup', function(e) {rest()
if(e.key ==='Delete'){
  document.getElementById('ft').value = "";
    document.getElementById('inch').value = "";
    document.getElementById('cm').value = "";
}
},true);
document.addEventListener('keydown', function(e) {rest()},true);