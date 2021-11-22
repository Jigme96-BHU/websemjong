const socket = io()
$(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});
var color = ['transparent', 'green'];
var colors = ['transparent', 'red'];
var active =0;

var level = 0;
var FR116 = 0;
var FR64 = 0;
var FR120 = 0;
var FR113 = 0;
var FR114 = 0;
var FR115 = 0;
var FR118 = 0;
var FR112 = 0;


datarecieve();

function datarecieve(){
try {
    socket.emit('alarm');

    socket.on('LevelIRR2', message => {
        console.log('From server LevelIRR2: ', message)
        level = message;
    })

    socket.on('FR116', message => {
        console.log('From server FR116: ', message)
        FR116 = message;
    })
    socket.on('FR64', message => {
        console.log('From server TF64: ', message)
        FR64 = message;
        
    })
    socket.on('FR120', message => {
        console.log('From server TF120: ', message)
        FR120 = message;
        
    })
  
    socket.on('FR113', message => {
        console.log('From server TF113: ', message)
        FR113 = message
        
    })
    socket.on('FR114', message => {
        console.log('From server TF114: ', message)
        FR114 = message;
        
    })
    socket.on('FR115', message => {
        console.log('From server TF115: ', message)
        FR115 = message;
        
    })
    socket.on('FR118', message => {
        console.log('From server TF118: ', message)
        FR118 = message;
        
    })
    socket.on('FR112', message => {
        console.log('From server TF112: ', message)
        FR112 = message;
    
    })
   
} catch (error) {
    console.error(error.message);
}
}

setInterval(function(){

    document.getElementById("bar").style.height = `${((level * 100)/3.4).toFixed(2)}%`;
    document.getElementById("bar").innerHTML = `${((level * 100)/3.4).toFixed(2)}%`;

    if(level != 0){
        
        document.getElementById("c1").style.backgroundColor= color[active]; 
    }else{
        document.getElementById("c1").style.backgroundColor= colors[active];
    }

    if(FR116 != 0){
        
        document.getElementById("c2").style.backgroundColor= color[active]; 
    }else{
        document.getElementById("c2").style.backgroundColor= colors[active];
    }
    
    if(FR64 != 0){
        
        document.getElementById("c3").style.backgroundColor= color[active]; 
    }else{
        document.getElementById("c3").style.backgroundColor= colors[active];
    }

    if(FR120 != 0){
        
        document.getElementById("c4").style.backgroundColor= color[active]; 
    }else{
        document.getElementById("c4").style.backgroundColor= colors[active];
    }

    if(FR113 != 0){
        document.getElementById("c5").style.backgroundColor= color[active]; 
    }else{
        document.getElementById("c5").style.backgroundColor= colors[active];
    }
     
    if(FR114 != 0){
        
        document.getElementById("c6").style.backgroundColor= color[active]; 
    }else{
        document.getElementById("c6").style.backgroundColor= colors[active];
    }

    if(FR115 != 0){
        
        document.getElementById("c7").style.backgroundColor= color[active]; 
    }else{
        document.getElementById("c7").style.backgroundColor= colors[active];
    }
    if(FR118 != 0){
        
        document.getElementById("c8").style.backgroundColor= color[active]; 
    }else{
        document.getElementById("c8").style.backgroundColor= colors[active];
    }
    if(FR112 != 0){
        document.getElementById("c9").style.backgroundColor= color[active]; 
    }else{
        document.getElementById("c9").style.backgroundColor= colors[active];
    }

    active++;
    if(active == color.length) active =0;
}, 1000);


