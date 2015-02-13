module.exports = function(app) {
	app.get('/', function(req, res){
	res.render('index', {title: "Survey"});
	})
	app.post('/form_submit', function(req, res){
		res.render('display', {name: req.body.name,location: req.body.location,language: req.body.language,comment: req.body.comment})
	})
	app.get('/redirecting', function(req, res){
		console.log("We are redirecting");
		res.redirect('/');
	})
}