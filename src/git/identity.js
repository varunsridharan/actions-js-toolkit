const nodeexec = require( '../node-exec' );
const gh_core  = require( '@actions/core' );
const log      = require( '../logger/index' );

module.exports = async( GIT_PATH, GIT_USER, GIT_EMAIL, LOG = true ) => {
	let status = true;
	let cmd    = `git config --local user.name "${GIT_USER}" && git config --local user.email "${GIT_EMAIL}"`;
	await nodeexec( cmd, GIT_PATH ).then( () => {
		if( LOG ) {
			log( '' );
			log( '🗃 Git Config' );
			log( `	> Name  : ${GIT_USER}` );
			log( `	> Email : ${GIT_EMAIL}` );
			log( '' );
		}
	} ).catch( ( error ) => {
		if( LOG ) {
			log.error( 'Unable To Set GIT Identity' );
			gh_core.error( error );
		}
		status = false;
	} );
	return status;
};
