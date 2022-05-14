'use strict';
const EmailController = require( '../controllers/EmailController' );
const express = require( 'express' ),
    router = express.Router();

router.post( '/', EmailController.create );
router.get( '/', EmailController.getAll );
router.put( '/', EmailController.update );
router.delete( '/', EmailController.delete );

module.exports = router;
