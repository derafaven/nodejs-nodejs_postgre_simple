//console.log('Hello word')
const {Pool} = require('pg');
const connectionString = 'postgresql://postgres:pgroot@localhost:5432/postgres'


const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'pgroot',
    database: 'postgres',
    port:5432
};

const pool = new Pool({connectionString})

const getUsuariosSin = () => {
    console.log('Getting usuarios')
    //consulta sincrona, node bloquea o espera que la bd retorne algo
    pool.query('select * from usuario');
};

const getUsuariosAsin = async () => {
    try {
        //consulta asincrona, node no bloquea o espera que la bd retorne algo
        const res = await pool.query('select * from usuario');
        console.log(res.rows);
        pool.end(); //cierra conexion
    } catch (e) {
        console.log(e);
    }
};

const insertUsuariosAsin = async () => {
    try {
        //consulta asincrona, node no bloquea o espera que la bd retorne algo
        const sql = 'INSERT INTO public.usuario(email, nombre) VALUES($1, $2);';
        const values = ['g2@gmail.com', 'rafa2']
        const res = await pool.query(sql, values);
        console.log(res);
        pool.end(); //cierra conexion
    } catch (e) {
        console.log(e);
    }
};

const deleteUsuariosAsin = async () => {
    try {
        //consulta asincrona, node no bloquea o espera que la bd retorne algo
        const sql = 'DELETE FROM usuario WHERE id = $1';
        const values = ['2'];

        const res = await pool.query(sql, values);
        console.log(res);
        pool.end(); //cierra conexion
    } catch (e) {
        console.log(e);
    }
};

const updateUsuariosAsin = async () => {
    try {
        //consulta asincrona, node no bloquea o espera que la bd retorne algo
        const sql = 'UPDATE usuario SET email = $1 WHERE id = $2';
        const values = ['cng@gmail.com', '2'];

        const res = await pool.query(sql, values);
        console.log(res);
        pool.end(); //cierra conexion
    } catch (e) {
        console.log(e);
    }
};

//insertUsuariosAsin();
getUsuariosAsin();
//updateUsuariosAsin();