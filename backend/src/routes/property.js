'use strict';
const PropertyController = require( '../controllers/PropertyController' );
const express = require( 'express' ),
    router = express.Router();

router.post( '/', PropertyController.create );
router.post( '/', PropertyController.getAll );
router.put( '/', PropertyController.update );
router.delete( '/', PropertyController.delete );

module.exports = router;
