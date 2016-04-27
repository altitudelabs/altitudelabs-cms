var keystone = require('keystone'),
	Types = keystone.Field.Types;
/**
 * Post Model
 * ==========
 */

var CaseStudy = new keystone.List('CaseStudy', {
	sortable: true,
	map: { name: 'projectName' },
	autokey: { path: 'slug', from: 'projectName', unique: true },
	defaultSort: 'sortOrder'
});

CaseStudy.add({
	projectName: 				{ type: String, required: true },
	metaTitle:					{	type: String},
	metaDescription:		{	type: String},
  headerDescription: 	{ type: String},
  themeColor: 				{ type: String, required: true, default: '#3b3380' },
	themeHeader:				{ type: Types.CloudinaryImage, folder: '/' },
  operationSystem: 		{ type: Types.Select, options: 'web, ios, android', default: 'web' },
  client: 						{ type: String },
  year: 							{ type: String, default: '2016' , required: true },
  services: 					{ type: Types.Relationship, ref: 'Service', many: true },
  theChallengeTitle: 	{ type: String },
  theChallengeContent: { type: Types.Html, height: 400},
  ourSolutionTitle: 	{ type: String},
  ourSolutionContent: { type: Types.Html, height: 400 },
  theResultsTitle: 		{ type: String},
  theResultsContent: 	{ type: Types.Html, height: 400},
  hoursSpent : 				{ type: Types.Number, required: true, default: 0 },
  screensDesigned : 	{ type: Types.Number, required: true, default: 0 },
	gallery: 						{ type: Types.CloudinaryImages, folder: '/', note: 'Size recommended: 1136 × 563' },
	screenShot: 				{ type: Types.CloudinaryImages, folder: '/', note: 'Size recommended: <br>Web - 752 × 469, <br>iOS - 240 × 425, <br>Android - 257 × 459'  },
});


CaseStudy.defaultColumns = 'projectName, headerDescription|60%';
CaseStudy.register();
