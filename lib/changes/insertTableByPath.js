const createTable = require('../createTable');
const baseOpts = require('../baseOptions');

/**
 * Insert a new table by path, if index is left empty it defaults to 0
 *
 * @param {Slate.Editor} editor
 * @param {List} path
 * @param {Number} index
 * @param {Number} columns
 * @param {Number} rows
 * @param {Object} opts
 * @return {Slate.Editor}
 */
function insertTableByPath( editor, path, index = 0, columns = 2, rows = 2, opts) {
  opts = {...baseOpts, ...opts};
  // Create the table node
  const fillWithEmptyText = (x, y) => '';
  const table = createTable(opts, columns, rows, fillWithEmptyText);

  const done = editor.insertNodeByPath(path, index, table);
  return done;
}

module.exports = insertTableByPath;
