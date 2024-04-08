const mongoose = require( "mongoose" );

const userSchema = mongoose.Schema( {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        required: true,
        trim: true,
        type: String,
        validate: ( value ) => {
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return value.match( re ); // returns a regexp object if the input matches
        },
        message: "Please enter a valid  email address."
    },
    password: {
        required: true,
        type: String,
        validate: ( value ) => {
            if ( value.length < 6 || value > 12 )
                throw new Error( "Password must be between 6 and 12 characters." );
        }
    },
    address: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'User',
    },
} )

const User = mongoose.model( 'User', userSchema );
module.exports = User;