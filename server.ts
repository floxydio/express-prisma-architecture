import 'reflect-metadata'
import app from './app'
import { prisma } from './src/config/prisma'
import dotenv from 'dotenv'


dotenv.config()

const PORT = process.env.PORT || 3000

async function startServer() {
    try {
        await prisma.$connect()
        console.log("=== Database is Connected ===")

        app.listen(PORT, () => {
            console.log(`=== Server is running on port :${PORT} ===`)
        })
    } catch (err) {
        console.error('Failed to connect to the database:', err);
        process.exit(1);
    }
}


startServer()