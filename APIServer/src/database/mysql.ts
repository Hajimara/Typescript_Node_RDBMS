import mysql, { MysqlError } from 'mysql';

export default () => {
    const conn = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PW,
        database: process.env.MYSQL_DB
    })

    conn.connect((e: MysqlError) => {
        if (e) {
            console.log('❌ MySQL Error: ', e);
        } else {
            console.log(`
          #########################################
          ✅  Successful connection to MySQL: ${process.env.MYSQL_DB}
          #########################################
        `)
        }
    });
}
