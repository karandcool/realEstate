/* eslint-disable quote-props */
const mongoose = require( 'mongoose' );
const { Schema } = require( 'mongoose' );

class Email {

    initSchema() {
        const schema = new Schema( {

            'name': {
                'type': String
            },
            'phoneNo': {
                'type': Number
            },
            'email': {
                'type': String
            },
            'propertyName': {
                'type': String
            },
        }, { 'timestamps': true } );

        schema.set( 'toJSON', {
            virtuals: true,
            versionKey: false,
            transform: function( doc, ret ) {
                delete ret._id;
            }
        } );


        try {
            mongoose.model( 'email', schema );
        } catch ( e ) {
            console.log( e );
        }
    }

  
    getInstance() {
        this.initSchema();
        return mongoose.model( 'email' );
    }
}

module.exports = { Email };
