const socket = io()

function levelfunc(){
    socket.emit('level');

    socket.on('LevelIRR2',message=>{
    console.log('LevelIRR2: ', message);
    var volume = `${((message)*10*15).toFixed(2)}`
    document.getElementById("tanklevel").value = message
    document.getElementById("tankvolume").value = volume
    });

    socket.emit('drinkinglevel');
    socket.on('DrinkL1',message=>{
        console.log('DrinkL1: ', message);
        var volume = `${((message)*4.88*5).toFixed(2)}`
        document.getElementById("drinkinglevel").value = message
        document.getElementById("drinkingvolume").value = volume
    });

    socket.emit('drinkingflow');

    socket.on('FR8',message=>{
        console.log('FR8: ', message);
        document.getElementById("flowincoming").value = message
    });

    socket.emit('outflow');

    socket.on('FR4',message=>{
        console.log('FR4: ', message);
        document.getElementById("outflows").value = message
    });
}

function frontpage(){
    socket.emit('level');

    socket.on('LevelIRR2',message=>{
    console.log('LevelIRR2: ', message);
    var data = document.getElementById("tank");
    data.setAttribute("data-tooltip", `  Level: ${((message * 100)/3.4).toFixed(2)}%`);
    });

    socket.on('TF116',message=>{
        console.log('TF116: ', message);
        var data = document.getElementById("zon1");
        data.setAttribute("total-flow", `  Total-Flow:${message} m3`);
        });

    socket.on('TF64',message=>{
        console.log('TF64: ', message);
        var data = document.getElementById("zon2");
        data.setAttribute("total-flow", `  Total-Flow:${message} m3`);
        });
    
    socket.on('TF120',message=>{
        console.log('TF120: ', message);
        var data = document.getElementById("zon3");
        data.setAttribute("total-flow", `  Total-Flow:${message} m3`);
        });
    socket.on('TF113',message=>{
        console.log('TF113: ', message);
        var data = document.getElementById("zon4");
        data.setAttribute("total-flow", `  Total-Flow:${message} m3`);
        });
    socket.on('TF114',message=>{
        console.log('TF114: ', message);
        var data = document.getElementById("zon5");
        data.setAttribute("total-flow", `  Total-Flow:${message} m3`);
        });
    socket.on('TF115',message=>{
        console.log('TF115: ', message);
        var data = document.getElementById("zon6");
        data.setAttribute("total-flow", `  Total-Flow:${message} m3`);
        });
    socket.on('TF118',message=>{
        console.log('TF118: ', message);
        var data = document.getElementById("zon7");
        data.setAttribute("total-flow", `  Total-Flow:${message} m3`);
        });
    socket.on('TF112',message=>{
        console.log('TF112: ', message);
        var data = document.getElementById("zon8");
        data.setAttribute("total-flow", `  Total-Flow:${message} m3`);
        });

}
 
$(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});



function  getselectedvalue(){
    
    val = document.getElementById("zoneselect").value;
    console.log(val);
    
    switch(val){

        case "0":
            socket.emit('case');
            document.getElementById('textbox1').value = " ";
            document.getElementById('textbox').value = " ";
        break;

        case "1":
            socket.emit('case1');

            socket.on('TF64', message => {
                console.log('From server TF64: ', message)
                document.getElementById('textbox1').value = message
            })
            socket.on('FR64', message => {
                console.log('From server FR64: ', message)
                document.getElementById('textbox').value = message
            })
            
        break;

        case "2":
            socket.emit('case2');

            socket.on('TF116', message => {
                console.log('From server TF116: ', message)
                document.getElementById('textbox1').value = message
            })
            socket.on('FR116', message => {
                console.log('From server FR116: ', message)
                document.getElementById('textbox').value = message
            })
        break;
        
        case '3':
            socket.emit('case3');
            
            socket.on('TF120', message => {
                console.log('From server TF120: ', message)
                document.getElementById('textbox1').value = message
            })
            socket.on('FR120', message => {
                console.log('From server FR120: ', message)
                document.getElementById('textbox').value = message
            })
        break;

        case '4':
            socket.emit('case4');
            
            socket.on('TF113', message => {
                console.log('From server TF113: ', message)
                document.getElementById('textbox1').value = message
            })
            socket.on('FR113', message => {
                console.log('From server FR113: ', message)
                document.getElementById('textbox').value = message
            })
        break;

        case '5':
            socket.emit('case5');
            
            socket.on('TF114', message => {
                console.log('From server TF114: ', message)
                document.getElementById('textbox1').value = message
            })
            socket.on('FR114', message => {
                console.log('From server FR114: ', message)
                document.getElementById('textbox').value = message
            })
        break;

        case '6':
            socket.emit('case6');
            
            socket.on('TF115', message => {
                console.log('From server TF115: ', message)
                document.getElementById('textbox1').value = message
            })
            socket.on('FR115', message => {
                console.log('From server FR115: ', message)
                document.getElementById('textbox').value = message
            })
        break;

        case '7':
            socket.emit('case7');
            
            socket.on('TF118', message => {
                console.log('From server TF118: ', message)
                document.getElementById('textbox1').value = message
            })
            socket.on('FR118', message => {
                console.log('From server FR118: ', message)
                document.getElementById('textbox').value = message
            })
        break;

        case '8':
            socket.emit('case8');
            
            socket.on('TF112', message => {
                console.log('From server TF112: ', message)
                document.getElementById('textbox1').value = message
            })
            socket.on('FR112', message => {
                console.log('From server FR112: ', message)
                document.getElementById('textbox').value = message
            })
        break;

    }

}

function postItem() {

     $.ajax
     ({
         type: "POST",
         url: "/auth/Onswitch",
         timeout: 2000,
         data: {
             data:"1"
         },
         success: function(data) {
             //show content
             alert('Success!')
         },
         error: function(jqXHR, textStatus, err) {
             //show error message
             alert('text status '+textStatus+', err '+err)
         }
     });
 }
 function postitem() {

    $.ajax
    ({
        type: "POST",
        url: "/auth/Offswitch",
        timeout: 2000,
        data: {
            data:"0"
        },
        success: function(data) {
            //show content
            alert('Success!')
        },
        error: function(jqXHR, textStatus, err) {
            //show error message
            alert('text status '+textStatus+', err '+err)
        }
    });
}

 
function onCbChange(cb) {
    var b = document.getElementById(cb).checked;

    var confirmBox = confirm("Are You Sure?");

    if (confirmBox == true) {
        if (b) {
            document.getElementById(cb).checked = true;
            document.getElementById("status").innerHTML = "Open";
            postItem();

        } else {
            document.getElementById(cb).checked = false;
            document.getElementById("status").innerHTML = "Close"
            postitem();
        }
    } else {
        
        document.getElementById(cb).checked = !b;
    };

}


