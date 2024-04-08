const express = require( 'express' );
const PORT = 3000;
const authRouter = require( './routes/auth' );
const mongoose = require( "mongoose" );
require( 'dotenv' ).config();
const uri = process.env.MONGODB_URI;

const app = express();

//middleware
app.use( express.json() );
app.use( authRouter );


//database connection
mongoose.connect( uri ).then( () => {
    console.log( 'DB connected Successfully' );
} ).catch( ( e ) => {
    console.log( `Error  connecting to the database: ${e}` );
} )

app.listen( PORT, "0.0.0.0", () => {
    console.log( `app is running on ${PORT}` );
}
);