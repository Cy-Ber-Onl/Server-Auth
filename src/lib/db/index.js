import mysql from 'mysql2/promise';
import * as secret from '$env/static/private';
import { building } from '$app/environment';

let SECRET_HOST = null,
	SECRET_USER = null,
	SECRET_PASS = null,
	SECRET_DB = null;

if (!building) {
    SECRET_HOST = secret.SECRET_HOST;
    SECRET_USER = secret.SECRET_USER;
    SECRET_PASS = secret.SECRET_PASS;
    SECRET_DB = secret.SECRET_DB;
}



const pool = mysql.createPool({
	host: SECRET_HOST,
	user: SECRET_USER,
	password: SECRET_PASS,
	database: SECRET_DB
});


let dbExport = null

if(!building){
    dbExport = pool
}else{
    dbExport = null
}


const db = dbExport;
export default db