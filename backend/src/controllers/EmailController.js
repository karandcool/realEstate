const autoBind = require( 'auto-bind' );
const { EmailService } = require( '../services/Email' );
const { Email } = require( '../models/email' );
const emailService = new EmailService(
    new Email().getInstance()
);

class EmailController {
    constructor( service ) {
        this.service = service;
        autoBind( this );
    }

    async getAll( req, res, next ) {
        try {
            console.log( req.query, req.params, req.body );
            // console.log( 'inn' );
            const response = await this.service.getall( { 'email': req.body.email } );

            console.log( response );

            if( response.data[ 0 ].pass === req.body.pass ) {
                await res.status( response.statusCode ).json( response );
            } else {
                await res.status( response.statusCode ).json( 'not found' );
            }

            // console.log( response );

            
        }catch ( e ) {
            next( e );
        }
    }

    async create( req, res, next ) {
        try {
            console.log( req.body );
            // await res.status( res.statusCode ).json( 'Employee creted' );
            const response = await this.service.createEmail( req.body );

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

module.exports = new EmailController( emailService );
