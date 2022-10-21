const {spawn}=require('child_process')

for(var i=0; i<35; i++) {  
    var workerProcess = spawn('node', ['support.js', i]); 
     console.log(workerProcess.pid);
}

console.log(process.pid);



