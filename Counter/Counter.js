

const fun = () => {
let tmpcnt=document.getElementById("count").textContent;
tmpcnt++;
document.getElementById("count").textContent=tmpcnt;
}
function save(){
    let str=document.getElementById("saveCountp").textContent;
    let cnt=document.getElementById("count").textContent;
    str+=(cnt+' - ');
   document.getElementById("saveCountp").textContent=str;
   document.getElementById("count").textContent=0;


}