const gh_core = require( '@actions/core' );
const log     = ( log ) => gh_core.info( `${log}` );

log.error   = require( './error' );
log.success = require( './success' );
log.warning = require( './warning' );

module.exports = log;
