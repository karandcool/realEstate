'use strict';
const LocationController = require( '../controllers/LocationController' );
const express = require( 'express' ),
    router = express.Router();

router.post( '/', LocationController.create );
router.get( '/', LocationController.getAll );
router.put( '/', LocationController.update );
router.delete( '/', LocationController.delete );

module.exports = router;
