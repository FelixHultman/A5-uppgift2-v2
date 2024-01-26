import express from 'express';
import {engine} from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './pages');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/movies', (req, res) => {
	res.render('movies', {
		layout: 'mainMovies',
	});
});

app.use('/static', express.static('./static'));

app.listen(5080, () => {
	console.log('Matrix online');
});
