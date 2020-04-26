require('dotenv').config()
const mongoose = require("mongoose");

CONNECTION_STRING  = "mongodb+srv://Jackie:<password>@cluster0-jbvyw.mongodb.net/test?retryWrites=true&w=majority";
MONGO_URL = CONNECTION_STRING.replace("<password>",process.env.MONGO_PASSWORD);

mongoose.connect(MONGO_URL,
    useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	dbName: "wittyAcceleration"
});

const db = mongoose.connection;
db.on("error", err => {
console.error(err);
process.exit(1);
});
db.once("open", async () => {
console.log("Mongo connection started on " + db.host + ":" +
db.port);
});
require("./item");
