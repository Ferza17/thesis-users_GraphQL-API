import mongoose from "mongoose"

const Schema = mongoose.Schema

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})

export default mongoose.model("user", UserSchema)