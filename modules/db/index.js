import mysql from 'mysql/promise';

const db = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
});

const query = async (sql, params) => {
    const [rows, fields] = await db.execute(sql, params);
    return rows;
}

export default query;