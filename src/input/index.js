const gh_core      = require( '@actions/core' );
const log          = require( '../logger/index' );
const gh_env       = ( key, _default ) => ( typeof process.env[ key ] !== 'undefined' ) ? process.env[ key ] : _default;
const env_validate = ( key, message = false ) => {
	if( undefined === gh_env( key ) ) {
		message = ( '' === message || false === message ) ? `🚩  ${key} Not Found. Please Set It As ENV Variable` : message;
		gh_core.setFailed( message );
	}
};
const set_env      = ( key, value, silent = false ) => {
	gh_core.exportVariable( key, value );
	if( !silent ) {
		//"✔️ ENV  : ${key}  =>  ${value}"
		log.success( `ENV : ${key}	=>	${value}` );
	}
};

module.exports = {
	tobool: ( value ) => ( value === 'true' ),
	env: gh_env,
	env_validate: env_validate,
};
