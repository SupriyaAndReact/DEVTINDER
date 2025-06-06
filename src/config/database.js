const mongoose  = require("mongoose");

// const url= "mongodb+srv://namastedev:9paTAbl3x75e01jc@namastenode.oewpr0n.mongodb.net/DEVTINDER"
const url= "mongodb+srv://namastedev:9paTAbl3x75e01jc@namastenode.dfykgid.mongodb.net/devTinder"
const connectDb= async() => {
    await mongoose.connect(url)
}

module.exports = {
    connectDb
}
