const gh_core = require( '@actions/core' );

module.exports = ( log, before = '' ) => gh_core.error( `${before}🛑️  ${log}` );
