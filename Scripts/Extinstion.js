const button=document.getElementById("btn");
let array=[];
let list=document.getElementById("list");
let savetab=document.getElementById("saveTab");
console.log(savetab);

let localStorage=window.localStorage;
function setUp() {
    array=JSON.parse(localStorage.getItem("myArray"));
    if (array==null) {
        array=[];
    }
    for (let i = 0; i < array.length; i++) {
        list.innerHTML+=`<li>
            <a target="_blank" href='${array[i]}'>
            ${array[i]}

            </a>
        </li>`;
    }

}
savetab.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        array.push(tabs[0].url);
        localStorage.setItem("myArray",JSON.stringify(array));
        setUp();
    });
});


function Clear() {
    localStorage.clear();
    array=[];
    list.innerHTML="";
}

button.addEventListener("click", function(){
    let inputn=document.getElementById("input-el").value;
    array.push(inputn);
        list.innerHTML+=`<li>
            <a target="_blank" href='${array[array.length-1]}'>
            ${array[array.length-1]}

            </a>
        </li>`;
        document.getElementById("input-el").value="";
        localStorage.setItem("myArray",JSON.stringify(array));

   
});


