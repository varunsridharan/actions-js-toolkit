const identity       = require( './identity' );
const add            = require( './add' );
const hasChange      = require( './has-change' );
const stats          = require( './stats' );
const commit         = require( './commit' );
const push           = require( './push' );
const currentBranch  = require( './current-branch' );
const getAllBranches = require( './getAllBranchs' );

module.exports = {
	identity: identity,
	add: add,
	stats: stats,
	hasChange: hasChange,
	commit: commit,
	push: push,
	currentBranch: currentBranch,
	getAllBranche: getAllBranches
};

