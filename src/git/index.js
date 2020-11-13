const identity  = require( './identity' );
const add       = require( './add' );
const hasChange = require( './has-change' );
const stats     = require( './stats' );
const commit    = require( './commit' );
const push      = require( './push' );

module.exports = { identity, add, stats, hasChange, commit, push };

