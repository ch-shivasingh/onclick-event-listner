let count=0;
function increment(){
    count =count+1;
    document.getElementById('jk').innerText=count;
}
function reset(){
    count=0;
    document.getElementById('jk').innerText=count;
}
function save(){
    document.getElementById('para').innerText+=" - "+count;
    count=0;
    document.getElementById('jk').innerText=count;

}