function clk(val){

    document.getElementById('calfield').value=document.getElementById('calfield').value+val;
  }
  function clk(val){
  document.getElementById('calfield2').value=document.getElementById('calfield2').value+val; //scientific cal
  }
  function clrdisp(){
    document.getElementById('calfield').value="";
  }
  
  function clrdisp(){
    document.getElementById('calfield2').value=""; //scietific cal
  }
  
  function eql(){
    var text=document.getElementById('calfield').value;
    var result=eval(text);
    document.getElementById('calfield').value=result;
  }
  
  function eql(){
    var text=document.getElementById('calfield2').value; //scientific cal
    var result=eval(text);
    document.getElementById('calfield2').value=result;
  }
  
  function cos() {
    var text=document.getElementById('calfield').value;
    var result=Math.cos(text);
    document.getElementById('calfield').value=result;
  }
  function sin() {
    var text=document.getElementById('calfield').value;
    var result=Math.sin(text);
    document.getElementById('calfield').value=result;
  }
  