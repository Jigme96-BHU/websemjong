const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const app = express();
//for mqtt
const server = require('http').createServer(app)
const port = process.env.PORT || 5000
const io = require('socket.io')(server)
const fs = require('fs')
const mqtt = require('mqtt');
const { json } = require("express");
// const ajax = require('ajax')

dotenv.config({ path: './.env'});

const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// var options = {
//     host: process.env.MQTT_HOST,
//     port: process.env.MQTT_PORT,
//     protocol: 'mqtts',
//     username: process.env.MQTT_USERNAME,
//     password: process.env.MQTT_PASSWORD
// }

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//parse URL-encoded bodies( as sent by HTML forms)

app.use(express.urlencoded({extended:false}));
//Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'hbs');

db.connect((error)=>{
    if(error){
        console.log("Error in connection")
    }else{
        console.log("MYSQL connected")
    }
});

// var client = mqtt.connect(options);
const client = mqtt.connect('mqtt://broker.hivemq.com')

client.on('connect',()=>{
    console.log('MQTT Connected');
});
client.on('error',()=>{
    console.log('error');
});

client.subscribe("TF116");

client.subscribe("TF64");

client.subscribe("TF120");

client.subscribe("TF113");

client.subscribe("TF114");

client.subscribe("TF115");

client.subscribe("TF118");

client.subscribe("TF112");

// client.on('message',(topic,message)=>{
//     var topic = topic;
//     // console.log(topic);
//     var msg = message.toString();
//     // console.log(msg);

//     if(topic == "TF116"){
//         db.query('INSERT INTO totalflowz1 SET ?', {TF116:msg}, (error, results) => {
//             if(error) {
//               console.log(error);
//             } else {
//               console.log("Zone1 OK");
//             }
//           })
//     }

//     if(topic == 'TF64'){
//         db.query('INSERT INTO totalflowz2 SET ?',{TF64:msg},(error,result)=>{
//             if(error){
//                 console.error(error);
//             }else{
//                 console.log("Zone2 OK");
//             }
//         })
//     }
//     if(topic == 'TF120'){
//         db.query('INSERT INTO totalflowz3 SET ?',{TF120:msg},(error,result)=>{
//             if(error){
//                 console.error(error);
//             }else{
//                 console.log("Zone3 OK");
//             }
//         })
//     }
//     if(topic == 'TF113'){
//         db.query('INSERT INTO totalflowz4 SET ?',{TF113:msg},(error,result)=>{
//             if(error){
//                 console.error(error);
//             }else{
//                 console.log("Zone4 Ok");
//             }
//         })
//     }
//     if(topic == 'TF114'){
//         db.query('INSERT INTO totalflowz5 SET ?',{TF114:msg},(error,result)=>{
//             if(error){
//                 console.error(error);
//             }else{
//                 console.log("Zone5 OK");
//             }
//         })
//     }
//     if(topic == 'TF115'){
//         db.query('INSERT INTO totalflowz6 SET ?',{TF115:msg},(error,result)=>{
//             if(error){
//                 console.error(error);
//             }else{
//                 console.log("Zone6 OK");
//             }
//         })
//     }
//     if(topic == 'TF118'){
//         db.query('INSERT INTO totalflowz7 SET ?',{TF118:msg},(error,result)=>{
//             if(error){
//                 console.error(error);
//             }else{
//                 console.log("Zone7 OK");
//             }
//         })
//     }
//     if(topic == 'TF112'){
//         db.query('INSERT INTO totalflowz8 SET ?',{TF112:msg},(error,result)=>{
//             if(error){
//                 console.error(error);
//             }else{
//                 console.log("Zone8 ok");
//             }
//         })
//     }

// })

io.on('connection',socket =>{

    socket.on('case',()=>{

        client.unsubscribe("FR64");
        client.unsubscribe("TF64");

        client.unsubscribe("FR116");
        client.unsubscribe("TF116");

        client.unsubscribe("TF120");
        client.unsubscribe("FR120");

        client.unsubscribe("TF113");
        client.unsubscribe("FR113");

        client.unsubscribe("TF114");
        client.unsubscribe("FR114");

        client.unsubscribe("TF115");
        client.unsubscribe("FR115");

        client.unsubscribe("TF118");
        client.unsubscribe("FR118");

        client.unsubscribe("TF112");
        client.unsubscribe("FR112");
        
    })

    socket.on('case1',()=>{
        
        client.unsubscribe("FR64");
        client.unsubscribe("TF64");

        client.unsubscribe("TF120");
        client.unsubscribe("FR120");

        client.unsubscribe("TF113");
        client.unsubscribe("FR113");

        client.unsubscribe("TF114");
        client.unsubscribe("FR114");

        client.unsubscribe("TF115");
        client.unsubscribe("FR115");

        client.unsubscribe("TF118");
        client.unsubscribe("FR118");

        client.unsubscribe("TF112");
        client.unsubscribe("FR112");

        client.subscribe("TF116");
        client.subscribe("FR116");
    
        client.on('message',(topic,message)=>{
            io.emit(topic,message.toString());
        });
    })

    socket.on('case2',()=>{
        client.unsubscribe("FR116");
        client.unsubscribe("TF116");

        client.unsubscribe("TF120");
        client.unsubscribe("FR120");

        client.unsubscribe("TF113");
        client.unsubscribe("FR113");

        client.unsubscribe("TF114");
        client.unsubscribe("FR114");

        client.unsubscribe("TF115");
        client.unsubscribe("FR115");

        client.unsubscribe("TF118");
        client.unsubscribe("FR118");

        client.unsubscribe("TF112");
        client.unsubscribe("FR112");
       
        client.subscribe("FR64");
        client.subscribe("TF64");


        client.on('message',(topic,message)=>{
            io.emit(topic,message.toString());
        });
    })

    socket.on('case3',()=>{
        client.unsubscribe("FR64");
        client.unsubscribe("TF64");

        client.unsubscribe("FR116");
        client.unsubscribe("TF116");

        client.unsubscribe("TF113");
        client.unsubscribe("FR113");

        client.unsubscribe("TF114");
        client.unsubscribe("FR114");

        client.unsubscribe("TF115");
        client.unsubscribe("FR115");

        client.unsubscribe("TF118");
        client.unsubscribe("FR118");

        client.unsubscribe("TF112");
        client.unsubscribe("FR112");
    
        client.subscribe("TF120");
        client.subscribe("FR120");
       
        client.on('message',(topic,message)=>{
            io.emit(topic,message.toString());
        });
    })

    socket.on('case4',()=>{
        client.unsubscribe("FR64");
        client.unsubscribe("TF64");

        client.unsubscribe("FR116");
        client.unsubscribe("TF116");

        client.unsubscribe("TF120");
        client.unsubscribe("FR120");

        client.unsubscribe("TF114");
        client.unsubscribe("FR114");

        client.unsubscribe("TF115");
        client.unsubscribe("FR115");

        client.unsubscribe("TF118");
        client.unsubscribe("FR118");

        client.unsubscribe("TF112");
        client.unsubscribe("FR112");
    
        client.subscribe("TF113");
        client.subscribe("FR113");
       
        client.on('message',(topic,message)=>{
            io.emit(topic,message.toString());
        });
    })

    socket.on('case5',()=>{
        client.unsubscribe("FR64");
        client.unsubscribe("TF64");

        client.unsubscribe("FR116");
        client.unsubscribe("TF116");

        client.unsubscribe("TF120");
        client.unsubscribe("FR120");

        client.unsubscribe("TF113");
        client.unsubscribe("FR113");

        client.unsubscribe("TF115");
        client.unsubscribe("FR115");

        client.unsubscribe("TF118");
        client.unsubscribe("FR118");

        client.unsubscribe("TF112");
        client.unsubscribe("FR112");

        client.subscribe("TF114");
        client.subscribe("FR114");
       
        client.on('message',(topic,message)=>{
            io.emit(topic,message.toString());
        });
    })
    socket.on('case6',()=>{
        client.unsubscribe("FR64");
        client.unsubscribe("TF64");

        client.unsubscribe("FR116");
        client.unsubscribe("TF116");

        client.unsubscribe("TF120");
        client.unsubscribe("FR120");

        client.unsubscribe("TF113");
        client.unsubscribe("FR113");

        client.unsubscribe("TF114");
        client.unsubscribe("FR114");

        client.unsubscribe("TF118");
        client.unsubscribe("FR118");

        client.unsubscribe("TF112");
        client.unsubscribe("FR112");
    
        client.subscribe("TF115");
        client.subscribe("FR115");
       
        client.on('message',(topic,message)=>{
            io.emit(topic,message.toString());
        });
    })
    socket.on('case7',()=>{
        client.unsubscribe("FR64");
        client.unsubscribe("TF64");

        client.unsubscribe("FR116");
        client.unsubscribe("TF116");

        client.unsubscribe("TF120");
        client.unsubscribe("FR120");

        client.unsubscribe("TF113");
        client.unsubscribe("FR113");

        client.unsubscribe("TF114");
        client.unsubscribe("FR114");

        client.unsubscribe("TF115");
        client.unsubscribe("FR115");

        client.unsubscribe("TF112");
        client.unsubscribe("FR112");
    
        client.subscribe("TF118");
        client.subscribe("FR118");
       
        client.on('message',(topic,message)=>{
            io.emit(topic,message.toString());
        });
    })
    socket.on('case8',()=>{
        client.unsubscribe("FR64");
        client.unsubscribe("TF64");

        client.unsubscribe("FR116");
        client.unsubscribe("TF116");

        client.unsubscribe("TF120");
        client.unsubscribe("FR120");

        client.unsubscribe("TF113");
        client.unsubscribe("FR113");

        client.unsubscribe("TF114");
        client.unsubscribe("FR114");

        client.unsubscribe("TF115");
        client.unsubscribe("FR115");

        client.unsubscribe("TF118");
        client.unsubscribe("FR118");
    
        client.subscribe("TF112");
        client.subscribe("FR112");
       
        client.on('message',(topic,message)=>{
            io.emit(topic,message.toString());
        });
    })


    socket.on('level',()=>{
        client.subscribe("LevelIRR2");
        client.on('message',(topic,message)=>{
            io.emit(topic,message.toString());
        })
    })
    socket.on('drinkinglevel',()=>{
        client.subscribe("DrinkL1");
        client.on('message',(topic,message)=>{
            io.emit(topic,message.toString());
        })
    })
    socket.on('drinkingflow',()=>{
        client.subscribe("FR8");
        client.on('message',(topic,message)=>{
            io.emit(topic,message.toString());
        })
    })
    socket.on('outflow',()=>{
        client.subscribe("FR4");
        client.on('message',(topic,message)=>{
            io.emit(topic,message.toString());
        })
    })


    socket.on('alarm',()=>{

        client.subscribe("LevelIRR2");

        client.subscribe("FR64");
        client.subscribe("TF64");

        client.subscribe("FR116");
        client.subscribe("TF116");

        client.subscribe("TF120");
        client.subscribe("FR120");

        client.subscribe("TF113");
        client.subscribe("FR113");

        client.subscribe("TF114");
        client.subscribe("FR114");

        client.subscribe("TF115");
        client.subscribe("FR115");

        client.subscribe("TF118");
        client.subscribe("FR118");

        client.subscribe("TF112");
        client.subscribe("FR112");

        client.on('message',(topic,message)=>{
            io.emit(topic,message.toString());
        });
    })

   
})
//define routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

server.listen(port, ()=>{
    console.log("Server started on port 5000")
});