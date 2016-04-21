var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Locomotive';
  this.render();
}

var passport=require('passport');

pagesController.before('login',function(next){
	var __self=this;
	passport.authenticate('local', function(err, user, info) {
		__self.req.session.uAuthentication={
	         authenticated:true,
	         user:user
	    };
	    __self.res.write(JSON.stringify(user));
	    __self.res.end();
	    next();
	})(this.__req, this.__res, this.__next);
});

pagesController.login=function(){
	console.log('############## login Controller ###############');
	console.log(this.req.isAuthenticated());
}

pagesController.test=function(){
	console.log(this.req.isAuthenticated());	
}

module.exports = pagesController;
