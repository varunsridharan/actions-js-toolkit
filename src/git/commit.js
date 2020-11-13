const nodeexec = require( '../node-exec' );
const log      = require( '../logger/index' );

module.exports = async( work_dir, message, force_or_args = false, show_log = true ) => {
	let status = true;
	let cmd    = 'git commit';
	cmd += ` -m "${message}" `;

	if( false !== force_or_args ) {
		cmd += ` ${force_or_args} `;
	}

	await nodeexec( `${cmd}`, work_dir ).then( ( response ) => {
		if( show_log ) {
			log.success( `${response}` );
		}
	} ).catch( ( error ) => {
		if( show_log ) {
			log.error( `${error}` );
		}
		status = false;
	} );
	return status;
};
