const autoBind = require( 'auto-bind' );
const { PropertyDetailService } = require( '../services/PropertyDetail' );
const { PropertyDetail } = require( '../models/propertyDetails' );
const propertyService = new PropertyDetailService(
    new PropertyDetail().getInstance()
);


class PropertyController {
    constructor( service ) {
        this.service = service;
        autoBind( this );
    }

    async getAll( req, res, next ) {
        try {
            // console.log( 'inn' );
            const response = await this.service.getall( req.query );

            // console.log( response );

            await res.status( response.statusCode ).json( response );
        }catch ( e ) {
            next( e );
        }
    }

    async create( req, res, next ) {
        try {
            console.log( req.body );
            // await res.status( res.statusCode ).json( 'Employee creted' );
            const response = await this.service.createProperty( req.body );

            await res.status( response.statusCode ).json( response );
        } catch ( e ) {
            next( e );
        }
    }

    async delete( req, res, next ) {

        try {
            // req.param.id
            // console.log(req.query);
            
            const response = await this.service.Delete( req.query.id );
            

            return res.status( response.statusCode ).json( response );
        } catch ( e ) {
            next( e );
        }
    }

    async update( req, res, next ) {

        try {

            // console.log(req.query.id);

            const response = await this.service.Update( req.query.id, req.body );

            return res.status( response.statusCode ).json( response );
        }catch ( e ) {
            next( e );
        }
    }

    async getbyid( req, res, next ) {
        try {
            // console.log( 'enter' );

            const response = await this.service.getById( req.params.id );

            // console.log( response );

            await res.status( response.statusCode ).json( response );
        }catch ( e ) {
            next( e );
        }
    }
    
}

module.exports = new PropertyController( propertyService );
