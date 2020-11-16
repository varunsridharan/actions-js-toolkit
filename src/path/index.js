const path              = require( 'path' );
const fs                = require( 'fs' );
const rtrim             = require( 'locutus/php/strings/rtrim' );
/**
 * Searches For Chars "./", "/../"," ", "../" and fixes for absolute path
 * @param $path
 * @return {string}
 */
const fix               = ( $path ) => {
	$path       = $path.trim();
	const regex = /^(\s|\/..\/|(?:\/|).\/|\/)(.+)/;
	let m       = regex.exec( $path );

	if( null !== m && typeof m[ 2 ] !== 'undefined' ) {
		$path = m[ 2 ];
		if( typeof m[ 1 ] !== 'undefined' && m[ 1 ] === '/../' ) {
			$path = `../${$path}`;
		}

	}
	return $path;
};
const untrailingslashit = ( $string ) => rtrim( $string, '/\\' );
const trailingslashit   = ( $string ) => untrailingslashit( $string ) + '/\\';

module.exports = {
	fix: fix,
	trailingslashit: trailingslashit,
	untrailingslashit: untrailingslashit,
	basename: path.basename,
	dirname: path.dirname,
	isDir: async( $path ) => await fs.lstatSync( $path ).isDirectory(),
	isFile: async( $path ) => await fs.lstatSync( $path ).isFile(),
	exists: ( $path ) => fs.existsSync( $path ),
};
