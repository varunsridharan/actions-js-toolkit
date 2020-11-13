const nodeexec = require( '../node-exec' );
const log      = require( '../logger/index' );

module.exports = async( work_dir, show_log = false ) => {
	let cmd    = 'git status';
	let status = false;
	await nodeexec( `${cmd}`, work_dir ).then( ( response ) => status = response ).catch( ( error ) => {
		if( show_log ) {
			log.error( error );
		}
		status = false;
	} );
	return status;
};
