var keystone = require('keystone');

/**
 * Post Model
 * ==========
 */

var Service = new keystone.List('Service', {
	sortable: true,
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
	defaultSort: 'sortOrder'
});

Service.add({
	name: { type: String, required: true }
});

Service.relationship({ ref: 'CaseStudy', path: 'caseStudies', refPath:'Services'});
Service.defaultColumns = 'name';
Service.register();
