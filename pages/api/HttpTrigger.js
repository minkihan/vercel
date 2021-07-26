// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const common = require( "@minkihan/common" ) ;

export default async ( req, res ) => {
    // Create query to execute against the database
    const querySpec = { 
        text: "SELECT * FROM hash_tag_user"
    }
    try {
        // Execute the query against the client
        const client = await common.DatasourcePostgresql.getClient() ;
        const result = await client.query( querySpec ) ;
        // Release the connection
        client.release() ;
        // Return the query resuls back to the caller as JSON
        context.res = {
            status: 200,
            isRaw: true,
            body: result.rows,
            headers: {
                "Content-Type": "application/json"
            }
        } ;
    } catch ( err ) {
        context.log( err.message ) ;
    }
}
