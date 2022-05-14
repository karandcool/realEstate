'use strict';
const autoBind = require( 'auto-bind' );
const { Service } = require( '../../system/services/Service' );

class PropertyDetailService extends Service {
    constructor( model ) {
        super( model );
        this.model = model;
        autoBind( this );
    }


    async createProperty( data ) {
        try {

            if( data.id ) {
                return await this.update( data.id, data );
            // eslint-disable-next-line no-else-return
            } else {

                return await this.insert( data );
            }
            
        } catch ( error ) {
            throw error;
        }
    }

    async getall( params ) {
        try {
            return await this.getAll( params );
        } catch ( error ) {
            throw error;
        }
    }
    async Delete( id ) {
        try{
            return await this.delete( id );
        }catch( error ) {
            throw error;
        }
    }

    async Update( id, data ) {
        try{
            return await this.update( id, data );
        }catch( error ) {
            throw error;
        }
    }
    
    async getById( id ) {
        try{

            return await this.get( id );

        }catch( error ) {
            throw error;
        }
    }
}

module.exports = { PropertyDetailService };
