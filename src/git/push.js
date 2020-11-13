const nodeexec = require( '../node-exec' );
const log      = require( '../logger/index' );

module.exports = async( work_dir, repository_url, args = false, show_log = true ) => {
	let status = true;
	let cmd    = `git push "${repository_url}" `;

	if( false !== args ) {
		cmd += ` ${args} `;
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
