const socket = io()

socket.emit('level');

socket.on('LevelIRR2',message=>{
    console.log('LevelIRR2: ', message);
    var data = document.getElementById("tank");
    data.setAttribute("data-tooltip", `Level: ` + `${((message * 100)/3.4).toFixed(2)}%`);

})
