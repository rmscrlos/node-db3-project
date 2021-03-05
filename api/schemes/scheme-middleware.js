const Schemes = require('./scheme-model');

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
	const { scheme_id } = req.params;
	Schemes.findById(scheme_id)
		.then(scheme => {
			console.log(scheme);
			if (scheme < 1) {
				res.status(404).json({
					message: `Scheme with ${scheme_id} not found.`
				});
			}
			next();
		})
		.catch(next);
};

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {};

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {};

module.exports = {
	checkSchemeId,
	validateScheme,
	validateStep
};
