// // This file will handle connection logic to the MongoDB database

// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true }).then(() => {
//     console.log("Connected to MongoDB successfully :)");
// }).catch((e) => {
//     console.log("Error while attempting to connect to MongoDB");
//     console.log(e);
// });

// // To prevent deprectation warnings (from MongoDB native driver)
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);


// module.exports = {
//     mongoose
// };


// This file will handle connection logic to the MongoDB database

// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//     console.log("Connected to MongoDB successfully :)");
// }).catch((e) => {
//     console.log("Error while attempting to connect to MongoDB");
//     console.log(e);
// });

// // To prevent deprecation warnings (from MongoDB native driver)
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

// module.exports = {
//     mongoose
// };




// mongodb+srv://usenkarlygash:<password>@cluster0.af6a1ok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Updated connection string for MongoDB Atlas
const atlasConnectionString = 'mongodb+srv://usenkarlygash:NarxozUniversity@cluster0.af6a1ok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(atlasConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // 5 seconds timeout
    socketTimeoutMS: 45000,
}).then(() => {
    console.log("Connected to MongoDB Atlas successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB Atlas");
    console.log(e);
});

module.exports = {
    mongoose
};
