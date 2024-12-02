'use server'
import { Pool } from "pg";
import conn from "./db";


export const getUser = async () => {
    try {
        const query = 'SELECT * FROM users'
        const result = await (conn as Pool).query(
            query, []
        );
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (email: string, password: string) => {
    if(!email || !password) {
        console.log('No email or password')
    }
    console.log('works')
}