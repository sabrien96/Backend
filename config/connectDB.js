const mongoose = require("mongoose")
function connectDB() {
    mongoose
        .connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("successfully connected to db...")
        })
        .catch((error) => {
            console.log({error})
            console.error("error in connection with db ...!!")
            process.exit(1)
        })
}

module.exports = connectDB