const nodeexec = require( '../node-exec' );
const gh_core  = require( '@actions/core' );
const log      = require( '../logger/index' );

module.exports = async( work_dir, user, email, show_log = true ) => {
	let status = true;
	let cmd    = `git config --local user.name "${user}" && git config --local user.email "${email}"`;
	await nodeexec( cmd, work_dir ).then( () => {
		if( show_log ) {
			log( '' );
			log( '🗃 Git Config' );
			log( `	> Name  : ${user}` );
			log( `	> Email : ${email}` );
			log( '' );
		}
	} ).catch( ( error ) => {
		if( show_log ) {
			log.error( 'Unable To Set GIT Identity' );
			gh_core.error( error );
		}
		status = false;
	} );
	return status;
};
