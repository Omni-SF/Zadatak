import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Proizvodi from './models/Proizvodi';
//import { runInNewContext } from 'vm';

import vlasnici from './routes/vlasniciRoutes';
import klienti from './routes/klientiRoutes';
import kontakti from './routes/kontaktiRoutes';
import proizvodi from './routes/proizvodiRoutes';
import upravitelji from './routes/upraviteljiRoutes';

const app = express();
const router = express.Router();

var connectionString = 'mongodb://Zamisljeni_S_Admin:54Dmin@ds249503.mlab.com:49503/test_kompanija';
var port = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(connectionString);

const connection = mongoose.connection;

connection.once('open', function(){
    console.log('Connection to ' + connection.name + ' -OK-');
});

app.use('/pozivi', vlasnici);
app.use('/pozivi', klienti);
app.use('/pozivi', kontakti);
app.use('/pozivi', proizvodi);
app.use('/pozivi', upravitelji);

app.use('/',router);

app.listen(port, function(){
    console.log('Express running on port '+ port)+'!';
});