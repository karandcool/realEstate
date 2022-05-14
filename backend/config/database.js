
const mongoose = require( 'mongoose' );
// config = require( './config' ).getConfig();

// Mongo Connection Class
class Connection {
    constructor() {
    // const url = config.MONGO_URL;
        // const url = 'mongodb+srv://karansaini1996:7827231196@cluster0.dqrzb.mongodb.net/packfnd-manager?retryWrites=true&w=majority';
        const url = 'mongodb+srv://karansaini01031996:7827231196@cluster0.geiro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
        // const url = 'mongodb+srv://c2-financial:JC12fKn2xyOGLkbF@cluster0.fxbae.mongodb.net/05_202105_CP_payroll?retryWrites=true&w=majority';

        mongoose.Promise = global.Promise;
        mongoose.set( 'useNewUrlParser', true );
        mongoose.set( 'useFindAndModify', false );
        mongoose.set( 'useCreateIndex', true );
        mongoose.set( 'useUnifiedTopology', true );
        mongoose.set( 'debug', true );
        this.connect( url )
            .then( () => {
                console.log( '✔ Database Connected' );
            } )
            .catch( ( err ) => {
                console.error( '✘ MONGODB ERROR: ', err.message );
            } );
    }

    async connect( url ) {
        try {
            await mongoose.connect( url );
        } catch ( e ) {
            throw e;
        }
    }
}

module.exports = new Connection();
