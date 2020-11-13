const gh_core = require( '@actions/core' );
const log     = ( log ) => gh_core.info( `${log}` );
const style   = require( 'ansi-styles' );

log.error   = require( './error' );
log.success = require( './success' );
log.warning = require( './warning' );
log.warn    = require( './warn' );
log.err     = require( './err' );

/**
 * Colored Logs
 */

log.black         = ( data ) => log( `${style.black.open}${data}${style.black.close}` );
log.red           = ( data ) => log( `${style.red.open}${data}${style.red.close}` );
log.green         = ( data ) => log( `${style.green.open}${data}${style.green.close}` );
log.yellow        = ( data ) => log( `${style.yellow.open}${data}${style.yellow.close}` );
log.blue          = ( data ) => log( `${style.blue.open}${data}${style.blue.close}` );
log.magenta       = ( data ) => log( `${style.magenta.open}${data}${style.magenta.close}` );
log.cyan          = ( data ) => log( `${style.cyan.open}${data}${style.cyan.close}` );
log.white         = ( data ) => log( `${style.white.open}${data}${style.white.close}` );
log.gray          = ( data ) => log( `${style.gray.open}${data}${style.gray.close}` );
log.redBright     = ( data ) => log( `${style.redBright.open}${data}${style.redBright.close}` );
log.greenBright   = ( data ) => log( `${style.greenBright.open}${data}${style.greenBright.close}` );
log.yellowBright  = ( data ) => log( `${style.yellowBright.open}${data}${style.yellowBright.close}` );
log.blueBright    = ( data ) => log( `${style.blueBright.open}${data}${style.blueBright.close}` );
log.magentaBright = ( data ) => log( `${style.magentaBright.open}${data}${style.magentaBright.close}` );
log.cyanBright    = ( data ) => log( `${style.cyanBright.open}${data}${style.cyanBright.close}` );
log.whiteBright   = ( data ) => log( `${style.whiteBright.open}${data}${style.whiteBright.close}` );


module.exports = log;
