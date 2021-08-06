const pc =document.getElementById("pc");
const ir = document.getElementById("ir");
const accumulator = document.getElementById("accumulator");

const opBtn =document.getElementById("opBtn"); // Operation button to start the operation of Execute Fetch Cycle
var counter=0;
var programs=[
    "Load 6","Add 7","Store 4","Jump 1","1"
]
opBtn.addEventListener("click",function(){
   if(counter+1 <= programs.length){
    pc.value=counter;
    
    ir.value = programs[counter];
    counter+=1;
   }
});

function operation(){
    alert();
}