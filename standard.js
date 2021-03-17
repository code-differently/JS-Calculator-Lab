// let text=document.getElementById('calfield').value;

function clk(val){

    document.getElementById('calfield').value=document.getElementById('calfield').value+val;
}
function clrdisp(){
    document.getElementById('calfield').value=" "
}

function eql(){
    var text=document.getElementById('calfield').value;
    var result=eval(text);
    document.getElementById('calfield').value=result;

}
function cos(){
    var text=document.getElementById('calfield').value;
    var result=Math.cos(text);
    document.getElementById('calfield').value=result;
}
function sin(){
    var text=document.getElementById('calfield').value;
    var result=Math.sin(text);
    document.getElementById('calfield').value=result;
}
function test(val){
    var text=document.getElementById('calfield').value;
    var newWord="Math." + val + (text);
    var result=newWord;
    document.getElementById('calfield').value=result;
    console.log(newWord);


}


    


// function percentage(num, per){
//   var text=document.getElementById('calfield') (num/100)*per;
//    var result=
