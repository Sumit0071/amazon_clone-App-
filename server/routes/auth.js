const express = require( 'express' );
const authRouter = express.Router();
const User = require( '../models/user' );
authRouter.post( 'api/signup', async ( req, res ) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.finOne( { email } );

        if ( existingUser ) {
            return res.status( 400 ).json( { msg: "User with same Email already exists" } );
        }
        let user = new User( {
            name,
            email,
            password,

        } )
        user = await user.save();
        res.json( user );
    }
    catch ( e ) {
        res.status( 500 ).json( { error: e.message } );
    }
} );


module.exports = authRouter;