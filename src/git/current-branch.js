const nodeexec = require( '../node-exec' );

module.exports = async( work_dir ) => {
	let status = true;
	let cmd    = 'git branch --show-current';
	await nodeexec( `${cmd}`, work_dir ).then( ( response ) => status = response ).catch( ( error ) => status = false );
	return status;
};
