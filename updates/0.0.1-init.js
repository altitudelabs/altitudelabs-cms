/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	User: [
		{ 'name.first': 'Altitude', 'name.last': 'Labs', email: 'hello@altitudelabs.com', password: 'Altitude123!', isAdmin: true }
	],
	Service: [
		{	"name" : "Product Design", 			"__ref": "productDesign"	},
		{	"name" : "User Experience", 		"__ref": "userExperience"	},
		{	"name" : "User Interface", 			"__ref": "userInterface"	},
		{	"name" : "Android Development", "__ref": "androidDevelopment"	},
		{ "name" : "iOS Development", 		"__ref": "iosDevelopment"	},
		{ "name" : "Web Development", 		"__ref": "webDevelopment"	}
	],
	CaseStudy: [
		{
			"projectName" : "Swiftcart",
			"metaTitle": "Swiftcart Case Study",
			"metaDescription": "A Grocery Shopping Experience",
			"headerDescription" : "Swiftcart is a grocery mobile commerce platform.",
			"client" : "Swiftcart",
			"year" : "2015",
			"services" : [ 'productDesign', 'userExperience', 'userInterface', 'androidDevelopment' ],
			"operationSystem" : "android",
			"themeColor" : "#fff",
			"themeHeader" : {
				"public_id" : "nyuhe4nwrm7zwlobvkbu",
				"version" : 1461723922,
				"signature" : "94a86994c76ac0bf97ccdd1f08fb3ac6743383a0",
				"width" : 1333,
				"height" : 733,
				"format" : "jpg",
				"resource_type" : "image",
				"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723922/nyuhe4nwrm7zwlobvkbu.jpg",
				"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723922/nyuhe4nwrm7zwlobvkbu.jpg"
			},
			"theChallengeTitle" : "Hong Kong’s First Mobile Only Grocery Experience",
			"theChallengeContent" :  "As efficient as Hong Kong is, the city has yet to offer a functionally sound grocery e-commerce mobile solution. Our client, Swiftcart, asked us to primarily focus on the details of user experience in this application. UX design has been trending in the past few years as app users have matured and customer expectations for intuitive solutions have risen. The challenge was to custom build a grocery shopping experience incorporating facts and tidbits of the product while providing an easy to use onboarding experience for the customer.",
			"ourSolutionTitle" : "A Human-centered Solution",
			"ourSolutionContent" : "The Altitude Labs team worked to create different user personas in order to identify and understand the target audience of the application. After in which we organized a product design sprint to prototype different outcomes of the same problem in order to choose an answer that made sense to build. As the Android deployment workflow took less time, the Client chose to deploy the app on the Google Playstore.",
			"theResultsTitle" : "Building Trust in E-commerce",
			"theResultsContent" : 'Our user interface design had been highly praised within the international design community. We delivered and deployed a seamless product that balanced the visual aesthetics, functionality and business results for the client. Altitude Labs works closely with their partners to reach a tangible and practical outcome, ultimately creating scalable value for the firm. Increase in revenue and sustainably contributing to the bottom line is what we aim to deliver.',
			"screenShot" : [
					{
						"public_id" : "su6c4iyl2zzoezvoppl8",
						"version" : 1461723914,
						"signature" : "8925a073614ec3f5b7ab6d99fdfc97fed7154fd6",
						"width" : 257,
						"height" : 459,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723914/su6c4iyl2zzoezvoppl8.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723914/su6c4iyl2zzoezvoppl8.png",
					},
					{
						"public_id" : "i0gjiikwbbwr9slsma96",
						"version" : 1461723914,
						"signature" : "432ac891c0eabee0fcd04e7aa0dfee48c295f4e0",
						"width" : 257,
						"height" : 459,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723914/i0gjiikwbbwr9slsma96.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723914/i0gjiikwbbwr9slsma96.png",
					},
					{
						"public_id" : "qdmrr5avrnabegua9hom",
						"version" : 1461723914,
						"signature" : "c4e52c2d8edf50cedc11ceffbd7bd4406cf7e813",
						"width" : 257,
						"height" : 459,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723914/qdmrr5avrnabegua9hom.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723914/qdmrr5avrnabegua9hom.png",
					},
					{
						"public_id" : "crxhqhyvbziiz9shkjre",
						"version" : 1461723914,
						"signature" : "8e77ce973f62b665c6ae2d61536c568401d84718",
						"width" : 257,
						"height" : 459,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723914/crxhqhyvbziiz9shkjre.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723914/crxhqhyvbziiz9shkjre.png",
					},
					{
						"public_id" : "eshmmunny65hl7vj2ttb",
						"version" : 1461723914,
						"signature" : "cb87a5905bbc10569337f3365347093595f08ff5",
						"width" : 257,
						"height" : 459,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723914/eshmmunny65hl7vj2ttb.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723914/eshmmunny65hl7vj2ttb.png",
					},
					{
						"public_id" : "ek4fcpjodbhgm6tudyq2",
						"version" : 1461723914,
						"signature" : "e206d831714cc3d7d7d18004b9651fc1a9b9b912",
						"width" : 257,
						"height" : 458,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723914/ek4fcpjodbhgm6tudyq2.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723914/ek4fcpjodbhgm6tudyq2.png",
					}
				],
				"gallery" : [
					{
						"public_id" : "ji1hreupbnkpxug7y0tm",
						"version" : 1461723917,
						"signature" : "5d7352cb1d5ec5e5b10c701df9e78475c5ffb0ac",
						"width" : 1136,
						"height" : 563,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723917/ji1hreupbnkpxug7y0tm.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723917/ji1hreupbnkpxug7y0tm.png",
					},
					{
						"public_id" : "ud6dr9meivahkusghnpc",
						"version" : 1461723917,
						"signature" : "dcd939c3551373538847996761ed38aaf77597b5",
						"width" : 1136,
						"height" : 563,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723917/ud6dr9meivahkusghnpc.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723917/ud6dr9meivahkusghnpc.png",
					},
					{
						"public_id" : "j9fm2rav7idpgu8wffwm",
						"version" : 1461723917,
						"signature" : "481e7cfc3bd681bdc54ac16ec004b56d6fb55a1c",
						"width" : 1136,
						"height" : 563,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723917/j9fm2rav7idpgu8wffwm.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723917/j9fm2rav7idpgu8wffwm.png",
					},
					{
						"public_id" : "i1cwqzoz26zcgkpriweb",
						"version" : 1461723918,
						"signature" : "e1e88cb087b8993f13d9c1da5ff64f5cbb7eb398",
						"width" : 1136,
						"height" : 563,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723918/i1cwqzoz26zcgkpriweb.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723918/i1cwqzoz26zcgkpriweb.png",
					},
					{
						"public_id" : "aytqhalm9bavtibtbxnh",
						"version" : 1461723918,
						"signature" : "93ae0e29868f636311bd9b5a742fe15f82d01f9f",
						"width" : 1136,
						"height" : 563,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723918/aytqhalm9bavtibtbxnh.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723918/aytqhalm9bavtibtbxnh.png",
					},
					{
						"public_id" : "ienzdtqvopfqre191hxx",
						"version" : 1461723918,
						"signature" : "3339e74a40132ce4d862638ae1bead98467ad2a2",
						"width" : 1136,
						"height" : 563,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723918/ienzdtqvopfqre191hxx.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723918/ienzdtqvopfqre191hxx.png",
					},
					{
						"public_id" : "uww0u9up9dudrwr0xrdl",
						"version" : 1461723918,
						"signature" : "9ba6f7e2498666349983e4c7fcc2b93318ac59ce",
						"width" : 1136,
						"height" : 563,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723918/uww0u9up9dudrwr0xrdl.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723918/uww0u9up9dudrwr0xrdl.png",
					}
				],
			"hoursSpent" : 148,
			"screensDesigned" : 13,
		},

		{
			"projectName" : "Wanderawe",
			"metaTitle": "Wanderawe Case Study",
			"metaDescription": "Wanderawe is an aggregation of works from the world’s top photographers.",
			"headerDescription" : "Travel Photography Platform",
			"client" : "Wanderawe",
			"year" : "2015",
			"services" : [ 'productDesign', 'userExperience', 'userInterface', 'webDevelopment' ],
			"operationSystem" : "web",
			"themeColor" : "#000",
			"themeHeader" : {
				"public_id" : "oxyxssjytztwnegs72zw",
				"version" : 1461723837,
				"signature" : "bd7f47d01800089f09e66e511b2c22176939f9ca",
				"width" : 1333,
				"height" : 733,
				"format" : "jpg",
				"resource_type" : "image",
				"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723837/oxyxssjytztwnegs72zw.jpg",
				"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723837/oxyxssjytztwnegs72zw.jpg"
			},
			"theChallengeTitle" : "An Aggregation of Works from the World’s Top Photographers",
			"theChallengeContent" : "A National Geographic photographer entrusted us to build an interactive social platform for wanderers of the world to discover and share their travel experiences through photos and stories.",
			"ourSolutionTitle" : "Engagement Through Social Interactions",
			"ourSolutionContent" : "From logo design to designing responsive elements for Wanderawe, we custom built the entire application in Javascript. As experts in fullstack javascript, the Altitude Labs team was able to focus on building this application in an agile manner. We have 2 week sprints scheduled to keep our client in the loop with progress and accommodate for any unplanned changes in the following sprint cycle. Our team works in a way that allows for maximum flexibility when it comes to product feature decisions.",
			"theResultsTitle" : "A Synchronized Web and Mobile Experience",
			"theResultsContent" : "We deployed a working MVP for the Wanderawe app on AWS allowing internet browsers and potential users to experience the joy of tagging, organizing and stitching of photographs in the form of meaningful stories. The application is fully mobile responsive and fits the dimensions of almost all screens found in the current market.",
			"screenShot" : [
					{
						"public_id" : "uxsx42pu8exui57urq0y",
						"version" : 1461723829,
						"signature" : "5c31688e15040b93d1fb42031f86a23917089f8a",
						"width" : 752,
						"height" : 469,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723829/uxsx42pu8exui57urq0y.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723829/uxsx42pu8exui57urq0y.png",
					},
					{
						"public_id" : "gwzneyetwewuqiblsksz",
						"version" : 1461723829,
						"signature" : "b8f6d14700058b24e3368e6eaa022df0eee8bb99",
						"width" : 752,
						"height" : 469,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723829/gwzneyetwewuqiblsksz.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723829/gwzneyetwewuqiblsksz.png",
					},
					{
						"public_id" : "d8r5jor94wnlaklvl9ww",
						"version" : 1461723830,
						"signature" : "bf61797fbb9c0b407069e7675f3af2be8b9a156c",
						"width" : 752,
						"height" : 469,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723830/d8r5jor94wnlaklvl9ww.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723830/d8r5jor94wnlaklvl9ww.png",
					}
				],
				"gallery" : [
					{
						"public_id" : "mflzsl8tkemaftxs6owt",
						"version" : 1461723833,
						"signature" : "9cd8903e91d8a97355938f2eddaee89da528394c",
						"width" : 1136,
						"height" : 563,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723833/mflzsl8tkemaftxs6owt.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723833/mflzsl8tkemaftxs6owt.png",
					},
					{
						"public_id" : "i7ot2gomvkk5kv9me8lr",
						"version" : 1461723834,
						"signature" : "228c4f33ab6dc11bf9347420bf41edc436631505",
						"width" : 1136,
						"height" : 563,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723834/i7ot2gomvkk5kv9me8lr.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723834/i7ot2gomvkk5kv9me8lr.png",
					},
					{
						"public_id" : "culcba14jbkbdcbxz9ab",
						"version" : 1461723834,
						"signature" : "93f9bedb410292d030f84ba888a68cfd492c10c2",
						"width" : 1136,
						"height" : 563,
						"format" : "png",
						"resource_type" : "image",
						"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461723834/culcba14jbkbdcbxz9ab.png",
						"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461723834/culcba14jbkbdcbxz9ab.png",
					}
				],
			"hoursSpent" : 192,
			"screensDesigned" : 32,
		},

		{
			"projectName" : "Icon",
			"metaTitle": "Icon Case Study",
			"metaDescription": "Icon is a fashion iOS app that reinvents the way we find the next big trend.",
			"headerDescription" : "Social Network for Fashionistas",
			"client" : "Icon",
			"year" : "2015",
			"services" : [ 'productDesign', 'userExperience', 'userInterface', 'iosDevelopment' ],
			"operationSystem" : "ios",
			"themeColor" : "#ccc",
	    "themeHeader": {
				"public_id" : "qhx71ehy7eldyhgraxpx",
				"version" : 1461667832,
				"signature" : "140f7e00bf27658d602375b899d13e4cd859b114",
				"width" : 1333,
				"height" : 733,
				"format" : "jpg",
				"resource_type" : "image",
				"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461667832/qhx71ehy7eldyhgraxpx.jpg",
				"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461667832/qhx71ehy7eldyhgraxpx.jpg"
			},
			"theChallengeTitle" : "Reinventing the Way We Find The Next Big Trend",
			"theChallengeContent" : 'We were sought after by a Mainland Chinese client to build a fashion related app with a heavy social component to it. Famous fashion applications in the West were blocked in China due to the firewall. Often times clients come to us with an overarching topic but rarely do they know how to tackle the problem. The challenge here was to narrow down the scope of build as the topic was broad to begin with. The Altitude Labs team thrives in complex design and development problems like these to help clients navigate through the initial building of an application.',
			"ourSolutionTitle" : "Iterative Brainstorming Leads to Final Prototype",
			"ourSolutionContent" : 'The Design team began with a product design sprint by doing iterative idea generation and heat mapping with potential users to understand the potential of social features. Upon confirming the feature set, connection maps were drawn up to display connectivity between screens. This is helpful for both development team and client team to understand potential links within the app and its complexity of build.',
			"theResultsTitle" : "Discover the People’s Choice of Fashion",
			"theResultsContent" : 'We deployed an iOS version of the application on the China App store allowing millions of users the potential of downloading the application. The application allows for a user to browse through photos posted and tagged by everyday fashionistas to showcase brands and colors they are wearing. The collected data is used to predict trends and build fashion sentiment around popular products and accessories.',
			"screenShot" : [
				{
					"public_id" : "fhcvil9splqrhixkvh8k",
					"version" : 1461722598,
					"signature" : "e6494e4aa99562034150ec6330891bcab2cb5f30",
					"width" : 240,
					"height" : 425,
					"format" : "png",
					"resource_type" : "image",
					"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461722598/fhcvil9splqrhixkvh8k.png",
					"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461722598/fhcvil9splqrhixkvh8k.png",
				},
				{
					"public_id" : "b46exqkq0ntmdqt1sban",
					"version" : 1461722598,
					"signature" : "6e6f378ab47441a35e1cbfeb968dc9b3c02d7e8b",
					"width" : 240,
					"height" : 425,
					"format" : "png",
					"resource_type" : "image",
					"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461722598/b46exqkq0ntmdqt1sban.png",
					"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461722598/b46exqkq0ntmdqt1sban.png",
				},
				{
					"public_id" : "bf2bojhkocffmekhk6ym",
					"version" : 1461722598,
					"signature" : "7345963fcec58a9bb62c6db5360e66f38c427487",
					"width" : 240,
					"height" : 425,
					"format" : "png",
					"resource_type" : "image",
					"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461722598/bf2bojhkocffmekhk6ym.png",
					"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461722598/bf2bojhkocffmekhk6ym.png",
				},
				{
					"public_id" : "dxa8tewrd8g5pyb4bld8",
					"version" : 1461722599,
					"signature" : "19f99e0b18f583423535560e55a2c1df3a7c9041",
					"width" : 240,
					"height" : 425,
					"format" : "png",
					"resource_type" : "image",
					"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461722599/dxa8tewrd8g5pyb4bld8.png",
					"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461722599/dxa8tewrd8g5pyb4bld8.png",
				},
				{
					"public_id" : "fegmeh7afuslwbmzuqdp",
					"version" : 1461722599,
					"signature" : "eed13c3407e0f7a5e4ee3b1a1704e0c3fd43289b",
					"width" : 240,
					"height" : 425,
					"format" : "png",
					"resource_type" : "image",
					"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461722599/fegmeh7afuslwbmzuqdp.png",
					"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461722599/fegmeh7afuslwbmzuqdp.png",
				},
				{
					"public_id" : "pj7f2w7po8flphyfkxqs",
					"version" : 1461722599,
					"signature" : "5a0ed4d8cdc3a5983eef2daccbe53a86abe89561",
					"width" : 240,
					"height" : 425,
					"format" : "png",
					"resource_type" : "image",
					"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461722599/pj7f2w7po8flphyfkxqs.png",
					"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461722599/pj7f2w7po8flphyfkxqs.png",
				}
			],
			"gallery" : [
				{
					"public_id" : "qscculuzg8bztejl87hl",
					"version" : 1461722602,
					"signature" : "74266d7b9cd6f3f21c59868fb54179bb1b3fa476",
					"width" : 1136,
					"height" : 563,
					"format" : "png",
					"resource_type" : "image",
					"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461722602/qscculuzg8bztejl87hl.png",
					"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461722602/qscculuzg8bztejl87hl.png",
				},
				{
					"public_id" : "i70r5tyfcmliae4446xx",
					"version" : 1461722602,
					"signature" : "d04645776ae6abc7db984afe73a0e64c8cbc8f19",
					"width" : 1136,
					"height" : 563,
					"format" : "png",
					"resource_type" : "image",
					"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461722602/i70r5tyfcmliae4446xx.png",
					"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461722602/i70r5tyfcmliae4446xx.png",
				},
				{
					"public_id" : "xw7rnztgcsyodxtpsgkh",
					"version" : 1461722602,
					"signature" : "3a1fdf0c9df311db9f6ae9782331c98f856bfbf4",
					"width" : 1136,
					"height" : 563,
					"format" : "png",
					"resource_type" : "image",
					"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461722602/xw7rnztgcsyodxtpsgkh.png",
					"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461722602/xw7rnztgcsyodxtpsgkh.png",
				},
				{
					"public_id" : "fdptr72vjpaklrg7hunr",
					"version" : 1461722602,
					"signature" : "4116cdd71dbf55c86b75d62bba8ec06d8909be6e",
					"width" : 1136,
					"height" : 563,
					"format" : "png",
					"resource_type" : "image",
					"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461722602/fdptr72vjpaklrg7hunr.png",
					"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461722602/fdptr72vjpaklrg7hunr.png",
				},
				{
					"public_id" : "qjwrrqaufzoxk4gohwo2",
					"version" : 1461722602,
					"signature" : "065b9ada5dbafc6625e7c9548e79c5bec4763650",
					"width" : 1136,
					"height" : 563,
					"format" : "png",
					"resource_type" : "image",
					"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461722602/qjwrrqaufzoxk4gohwo2.png",
					"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461722602/qjwrrqaufzoxk4gohwo2.png",
				},
				{
					"public_id" : "etykzmfwzigtpkypkqif",
					"version" : 1461722602,
					"signature" : "56d66eb282ca98dbaf13a254287175d7f0f60272",
					"width" : 1136,
					"height" : 563,
					"format" : "png",
					"resource_type" : "image",
					"url" : "http://res.cloudinary.com/db2bgy4r2/image/upload/v1461722602/etykzmfwzigtpkypkqif.png",
					"secure_url" : "https://res.cloudinary.com/db2bgy4r2/image/upload/v1461722602/etykzmfwzigtpkypkqif.png",
				}
			],
			"hoursSpent" : 112,
			"screensDesigned" : 14
		}


	]
};

/*

// This is the long-hand version of the functionality above:

var keystone = require('keystone'),
	async = require('async'),
	User = keystone.list('User');

var admins = [
	{ email: 'user@keystonejs.com', password: 'admin', name: { first: 'Admin', last: 'User' } }
];

function createAdmin(admin, done) {

	var newAdmin = new User.model(admin);

	newAdmin.isAdmin = true;
	newAdmin.save(function(err) {
		if (err) {
			console.error("Error adding admin " + admin.email + " to the database:");
			console.error(err);
		} else {
			console.log("Added admin " + admin.email + " to the database.");
		}
		done(err);
	});

}

exports = module.exports = function(done) {
	async.forEach(admins, createAdmin, done);
};

*/
