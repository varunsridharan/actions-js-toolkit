const nodeexec = require( '../node-exec' );

module.exports = async( work_dir ) => {
	let status = true;
	let cmd    = 'git branch --no-color --list --no-column';
	await nodeexec( `${cmd}`, work_dir ).then( ( response ) => status = response ).catch( () => status = false );
	return status;
};
