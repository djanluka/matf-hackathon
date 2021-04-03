class Socket {

    constructor(server) {
        this.io = require('socket.io')(server)

        this.io.on('connection', socket => {
            console.log('Heey connection');
            
            socket.on('startModel', () => {
                console.log('startModel')
                
                const CO = "0.47"
                const program = "/home/boris/matf-hackathon/backend/pollution/load_model.py" + " CO";

                var child = require('child_process').exec(program)
                const exec = require("child_process").execSync;
                var resultCO = exec(program);
                
                console.log(resultCO)
            
            })
            
        })
            
    }
}

module.exports = Socket;
