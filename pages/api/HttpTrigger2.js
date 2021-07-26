// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import { Pool } from "pg" ;
const pool = require( "../../common/cp.js" ) ;

export default async ( req, res ) => {
    // Create query to execute against the database
    const querySpec = { 
        text: "SELECT * FROM hash_tag_user"
    }
    try {
        // Execute the query against the client
        //const client = await common.DatasourcePostgresql.getClient() ;
        // const config = {
        //     host: "minki.postgres.database.azure.com",
        //     user: "ayakano5@minki",
        //     password: "xkdlrj!2",
        //     database: 'postgres',
        //     port: 5432,
        //     ssl: true
        // } ;
        // const pool = new Pool( config ) ;
        const client = await pool.connect() ;
        const result = await client.query( querySpec ) ;
        // Release the connection
        client.release() ;
        // Return the query resuls back to the caller as JSON

        res.statusCode = 200
        res.json( result.rows )
    } catch ( err ) {
        console.log( err.message ) ;
    }
}
