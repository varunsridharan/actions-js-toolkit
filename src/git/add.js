const nodeexec = require( '../node-exec' );
const gh_core  = require( '@actions/core' );
const log      = require( '../logger/index' );

module.exports = async( work_dir, file, force_or_args = false, show_log = false ) => {
	let status = true;
	let cmd    = 'git add';
	if( true === force_or_args ) {
		cmd += ' -f';
	} else if( false !== force_or_args ) {
		cmd += ` ${force_or_args} `;
	}

	await nodeexec( `${cmd} ${file}`, work_dir ).then( () => {
		if( show_log ) {
			log.success( 'File Added' );
		}
	} ).catch( ( error ) => {
		if( show_log ) {
			log.error( 'Unable To File' );
			gh_core.error( error );
		}
		status = false;
	} );
	return status;
};
