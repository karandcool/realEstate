/* eslint-disable quote-props */
const mongoose = require( 'mongoose' );
const { Schema } = require( 'mongoose' );

class PropertyDetail {

    initSchema() {
        const schema = new Schema( {

            'name': {
                'type': String
            },
            'rate': {
                'type': Number
            },
            'area': {
                'type': String
            },
            'location': {
                'type': mongoose.Schema.ObjectId,
                'ref': 'location',
                'autopopulate': true
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
            mongoose.model( 'propertyDetail', schema );
        } catch ( e ) {
            console.log( e );
        }
    }

  
    getInstance() {
        this.initSchema();
        return mongoose.model( 'propertyDetail' );
    }
}

module.exports = { PropertyDetail };
