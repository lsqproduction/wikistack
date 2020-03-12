const {Page, User, db} = require('./models/index');

const connect = async () =>{
    await db.sync();
    console.log('sweet, we are connected')
}

connect();