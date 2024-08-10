const mysql = require("mysql/promise");

const insertIntoDB = async ()=> {
    const connection = await mysql.createConnection({
        host: "sql12.freesqldatabase.com",
        user: "sql12656447",
        password: "kMbr6ClmZS",
        database: "sql12656447",
        port: 3306,
    })
    
    try {
        await connection.query(
            "INSERT INTO PYZZLEDB ("UserID,Name,Age,Birthday,Gender") VALUES (1,'Admin','21','06/14/02','M')"
        );
    } catch (error) {
        console.log(e)
    }
}