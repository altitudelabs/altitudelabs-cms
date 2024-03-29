// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');
// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'Altitude Labs',
	'brand': 'Altitude Labs',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs'
	}).engine,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User'

});
// Load your project's Models

//keystone.set('cloudinary config', { cloud_name: 'db2bgy4r2', api_key: '731744781961812', api_secret: 'wCbzDB_nhqrpAk4zu1MtrJQfXOw' });
// or
//keystone.set('cloudinary config', 'cloudinary://api_key:api_secret@cloud_name' );

// optional, will prefix all built-in tags with 'keystone_'
//keystone.set('cloudinary prefix', 'keystone');

// optional, will prefix each image public_id with [{prefix}]/{list.path}/{field.path}/
//keystone.set('cloudinary folders', true);

// optional, will force cloudinary to serve images over https
//keystone.set('cloudinary secure', true);


// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

var cloudName = process.env.CLNY_CLOUD_NAME;
var apiKey = process.env.CLNY_API_KEY;
var apiSecret = process.env.CLNY_API_SECRET;
keystone.set('cloudinary config', { cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });
keystone.import('models');
// Load your project's Routes

keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'users': 'users',
	'caseStudies': ['case-studies',	'services']

});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
