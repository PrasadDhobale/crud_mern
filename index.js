import express from 'express';
import dotenv from 'dotenv';
import Routes from './routes/route.js';
import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';


const __dirname = path.resolve();
const app = express();

dotenv.config();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/', Routes);

app.use(express.static(path.join(__dirname, "./student/build")));

app.get('*', function(_, res){
	res.sendFile(path.join(__dirname, "./student/build/index.html"), function(err) {
		res.status(500).send(err);
	})
})


const PORT = process.env.PORT || 8000;

const username = "prasaddhobale";
const password = "CrudStudent";

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running on port  ${PORT} `));