/* eslint-disable quote-props */
const mongoose = require( 'mongoose' );
const { Schema } = require( 'mongoose' );

class Location {

    initSchema() {
        const schema = new Schema( {

            'name': {
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
            mongoose.model( 'location', schema );
        } catch ( e ) {
            console.log( e );
        }
    }

  
    getInstance() {
        this.initSchema();
        return mongoose.model( 'location' );
    }
}

module.exports = { Location };
