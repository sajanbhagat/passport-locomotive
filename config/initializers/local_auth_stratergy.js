var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

module.exports = function() {
 	
  passport.serializeUser(function(user, done) {
  	console.log('############### serializing user #########################');
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    console.log('############### serializing user #########################');
  	done(err,{id:'1',name:'sajan'});
  });

  passport.use(new LocalStrategy(
    
    function(username, password, done) {
  	  	if(username=='sajan'&&password=='donttrust0073'){
	  		console.log('############# inside LocalStrategy ##############');
	  		console.log('user Authenticated');
	  		return done(null,{
	  			id:'1',
	  			name:'sajan'
	  		});
	  	}
  	}

  ));

}