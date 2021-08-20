const pc =document.getElementById("pc");
const ir = document.getElementById("ir");
const accumulator = document.getElementById("accumulator");
const ram= document.getElementById("memory"); //value at address number 3
const opBtn =document.getElementById("opBtn"); // Operation button to start the operation of Execute Fetch Cycle
const memoryMap =document.getElementById("mapping")
const add1 =document.getElementById("add1")
const add2 =document.getElementById("add2")
const val1 =document.getElementById("val1")
const val2 =document.getElementById("val2")
const addBtn1 =document.getElementById("addBtn")
const addBtn2 =document.getElementById("addBtn2")





let code=''                                        //dynamic memory mapping 
let output=''
var arrow ='↪️'
var initialCounter=300

var programs={                                  //instruction with address mapping
    300:"1940",
    301:"5941",
    302:"5942",
    303:"2942",

    
}

var memoryMapping={
    940:3,
    941:2,  
    942:2  

}
function icon(program){
  
    if(program ==initialCounter){
        return arrow
    }
    else{
        return ''
    }

  
}
function mainMemory(){

for(let program in programs){
    
    output+=`
    <tr>
  
    <td>${icon(program)}${program}</td>
    <td> ${programs[program]}</td>
  </tr>
`;
}

}



var counter=programs[initialCounter];
var result =0;                                 // initial accumulator value is 0. 


//function for the instructions
function codeSnippet(){
    for(let map in memoryMapping){  
                        
        code+=`
        <tr>
        <td>${map}</td>
        <td> ${memoryMapping[map]}</td>
      </tr>
    `;
    }
    
}
function loadFromMemory(address)
{
    var value= memoryMapping[address]

    ir.value="1"+address
    setTimeout(function(){
         accumulator.value=value
         initialCounter++
         pc.value=initialCounter
        
        }, 2000);

   
   




}

function storeToMemory(address){


    var value= accumulator.value
    memoryMapping[Number(address)]=Number(value)
    initialCounter++
    pc.value=initialCounter

    code =''
    memoryMap.innerHTML=code

}


function addToAC(address){
  
    ir.value= "5"+address
    var value= memoryMapping[address]
    

    setTimeout(function(){
        accumulator.value=Number(accumulator.value) + Number(value)
        initialCounter++
        pc.value=initialCounter
        
       }, 2000);

  


}


mainMemory()
ram.innerHTML+=output
codeSnippet()
memoryMap.innerHTML +=code



//event listeners for address and value addition
addBtn1.addEventListener("click",function(){

    if(!(add1==null || val1==null)){
        programs[add1.value]=val1.value;
    }
    output=''
    mainMemory()
    ram.innerHTML=output

  
   
})

addBtn2.addEventListener("click",function(){
    if(!(add2==null || val2==null)){
        memoryMapping[add2.value]=val2.value;
    }
    code=''
    codeSnippet()
    memoryMap.innerHTML=code

  

})


opBtn.addEventListener("click",function(){

    output=''
    mainMemory()
    ram.innerHTML=output

  

    
    if(programs[initialCounter]){
        
        counter=programs[initialCounter];
    pc.value=initialCounter
    var instruction= counter.substring(0,1)
    console.log(instruction)


    if(instruction == "1"){

        loadFromMemory(counter.substring(1))



    }
    else if(instruction == "2"){
        storeToMemory(counter.substring(1))
        console.log(memoryMapping)

        codeSnippet()
        memoryMap.innerHTML +=code

       

    }
    else if(instruction == "5"){

        addToAC(counter.substring(1))
        console.log(memoryMapping)

    }
 
    setTimeout(function(){
        output=''

        mainMemory()

        ram.innerHTML=output

       }, 2000);

  
    }

    else{
        alert("PC at last memory address...")
    }
   



   




//    if(counter+1 <= programs.length ?true:counter=0){
//     pc.value=counter;
    
//     ir.value = programs[counter];
//     result += 1
//     accumulator.value= accValues[counter];
//     if(counter==2){

//         address3.innerHTML= accumulator.value;
//     }
//     counter+=1;

   
//    }
});

