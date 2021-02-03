var count = document.getElementById('res');
function less(){
  count= count - 1;
  if(count < 0)
  count = 0;
  document.getElementById('res').innerHTML = count;
}
function more(){
 count+= 1;
 document.getElementById('res').innerHTML = count;
}
function reset(){
  count = 0;
   document.getElementById('res').innerHTML = count;
}
