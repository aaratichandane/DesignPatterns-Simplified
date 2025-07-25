const EventEmitter = require('events');

class Notifier extends EventEmitter{}

const notifier = new Notifier();

notifier.on('userRegistered',(user)=>{
    console.log(`Send email to ${user.email}`);
});


module.exports = notifier;


