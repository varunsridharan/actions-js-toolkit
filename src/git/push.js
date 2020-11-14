const exec     = require( '@actions/exec' );

module.exports = async( work_dir, repository_url, args = false ) => {
	let status = { success: true, data: '' };
	let cmd    = `git push "${repository_url}" `;

	if( false !== args ) {
		cmd += ` ${args} `;
	}

	await exec.exec( `${cmd}`, [], { cwd: work_dir } ).then( ( response ) => {
		status.success = true;
		status.data    = response;
	} ).catch( ( error ) => {
		status.success = false;
		status.data    = error;
	} );
	return status;
};
