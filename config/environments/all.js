var util = require('util');
var passport=require('passport');
var express = require('express')
  , poweredBy = require('connect-powered-by');

module.exports = function() {
  // Warn of version mismatch between global "lcm" binary and local installation
  // of Locomotive.
  if (this.version !== require('locomotive').version) {
    console.warn(util.format('version mismatch between local (%s) and global (%s) Locomotive module', require('locomotive').version, this.version));
  }

  this.set('view engine', 'ejs');
  this.use(poweredBy('Locomotive'));
  this.use(express.logger());
  this.use(express.static(__dirname + '/../../public'));
  this.use(express.cookieParser());
  this.use(express.bodyParser());
  this.use(express.session({ secret: 'keyboard cat' }));
  this.use(passport.initialize());
  this.use(passport.session());
  this.use(this.router);

}
