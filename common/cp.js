import { Pool } from "pg" ;
const config = {
    host: "minki.postgres.database.azure.com",
    user: "ayakano5@minki",
    password: "xkdlrj!2",
    database: 'postgres',
    port: 5432,
    ssl: true,
    idleTimeoutMillis: 600 * 1000
} ;
//const pool = new Pool( config ) ;
module.exports = new Pool( config ) ;
// const get = async() => {
//     return await pool.connect() ;
// }
// export default get ;