const gh_core      = require( '@actions/core' );
const gh_env       = ( key, _default ) => ( typeof process.env[ key ] !== 'undefined' ) ? process.env[ key ] : _default;
const evn_validate = ( key, message = false ) => {
	if( undefined === gh_env( key ) ) {
		message = ( '' === message || false === message ) ? `🚩  ${key} Not Found. Please Set It As ENV Variable` : message;
		gh_core.setFailed( message );
	}
};
module.exports     = {
	tobool: ( value ) => ( value === 'true' ),
	env: gh_env,
	evn_validate,
};
