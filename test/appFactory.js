'use strict';

var koa = require('koa');

exports.create = function(type) {
	var app = koa();
	var router = require('koa-router')();
	if(1 == type) {
		app.use(require('koa-body')({multipart:true , formidable:{keepExtensions:true}}));
	}else {
		app.use(require('koa-body')())
	}
	app.use(require('../validate.js')(app));
	app.use(router.routes())
  	.use(router.allowedMethods());
  	app.router = router;
	return app;
}