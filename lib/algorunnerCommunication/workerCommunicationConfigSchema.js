const adapters = require('./consts').adapters;
const loopbackWorkerCommunicationSchema = {
    type:'object',
    properties:{
        prop1:{
            type:'string'
        }
    }
}
const socketWorkerCommunicationSchema = {
    type:'object',
    properties:{
        connection:{
            type:'object',
            properties:{
                host:{
                    type:'string',
                    default:'localhost'
                },
                port:{
                    type: ['integer', 'string'],
                    default:3000
                },
                protocol:{
                    type:'string',
                    default:'ws'
                }        
            }
        },
        pingTimeout:{
            type:'integer',
            default:30000
        }
    }
}
const workerCommunicationSchema = {
    type:'object',
    properties:{
        adapterName:{
            type:'string',
            default:adapters.socket
        },
        config:{
            type:'object',
            required:'true'
        }
    }
}
module.exports={
    socketWorkerCommunicationSchema,
    workerCommunicationSchema
}