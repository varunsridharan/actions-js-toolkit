const path = require( 'path' );

/**
 * Searches For Chars "./", "/../"," ", "../" and fixes for absolute path
 * @param $path
 * @return {string}
 */
const fix = ( $path ) => {
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

module.exports = {
	fix,
	basename: path.basename,
	dirname: path.dirname,
	isDir: async( $path ) => await fs.lstatSync( $path ).isDirectory(),
	isFile: async( $path ) => await fs.lstatSync( $path ).isFile()
};
