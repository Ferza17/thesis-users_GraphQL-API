import {GraphQLServer} from "graphql-yoga"
import dotenv from "dotenv"
import mongoose from "mongoose";

const StartApplication = async () => {

    const resolvers = {}

    dotenv.config()
    const db = await mongoose
        .connect(process.env.MONGODB_URL, {keepAlive: true})
        .then((res) => {
            console.log("Database Connected!")
        })
        .catch(err => {
            console.log("Database Error " + err)
        })

    const server = new GraphQLServer({
        typeDefs: "./src/Apps/schema.graphql",
        resolvers: resolvers,
        context: {
            db
        }
    })

    await server
        .start()
        .then(() => {
            console.log("Server is Running")
        })
        .catch(err => {
            console.log("Unable to start Server : ", err)
        })
}

export default StartApplication;