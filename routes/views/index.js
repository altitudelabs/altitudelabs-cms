var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'case-study';
	locals.project = {};
	locals.meta = {
		title: '',
		description: '',
		slug: ''
	};
	var projectSlug = req.params.projectSlug;

	view.on('init', function(next) {
		var q = keystone.list('CaseStudy').model.findOne({'slug': projectSlug }).populate('services');
    q.exec(function(err, result) {
			if (err || !result) return res.redirect('http://altitudelabs.com/404');
			locals.project = result;
			if (locals.project.operationSystem === 'web') {
				locals.project.operationSystem = 'pc';
			}
			locals.meta = {
				title: result.metaTitle,
				description: result.metaDescription,
				slug: projectSlug
			};
			console.log(result.sortOrder);
			var sortOrder = result.sortOrder;
			var preivousProject = keystone.list('CaseStudy').model.find({sortOrder: {$lt: sortOrder}}).sort('-sortOrder').limit(1);
			var lastProject = keystone.list('CaseStudy').model.find().sort('-sortOrder').limit(1);
			preivousProject.exec(function(err, result) {
				if (err || !result[0]) {
					lastProject.exec(function(err, result) {
						locals.project.previousProject = result[0].slug;
					});
				} else {
					locals.project.previousProject = result[0].slug;
				}
			});
			var nextProject = keystone.list('CaseStudy').model.find({sortOrder: {$gt: sortOrder}}).sort('sortOrder').limit(1);
			var firstProject = keystone.list('CaseStudy').model.find().sort('sortOrder').limit(1);
			nextProject.exec(function(err, result) {
				if (err || !result[0]) {
					firstProject.exec(function(err, result) {
						locals.project.nextProject = result[0].slug;
					});
				} else {
					locals.project.nextProject = result[0].slug;
				}
			});
      next(err);
    });
  });
	// Render the view
	view.render('project',{ layout: 'empty' });

};
