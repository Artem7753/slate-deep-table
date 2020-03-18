const createTable = require('../createTable');
const baseOpts = require('../baseOptions');

/**
 * Insert a new table by key, if index is left empty it defaults to 0
 *
 * @param {Slate.Editor} editor
 * @param {String} key
 * @param {Number} index
 * @param {Number} columns
 * @param {Number} rows
 * @param {Object} opts
 * @return {Slate.Editor}
 */
function insertTableByKey(editor, key, index = 0, columns = 2, rows = 2, opts) {
  opts = {...baseOpts, ...opts};
    // Create the table node
  const fillWithEmptyText = (x, y) => '';
  const table = createTable(opts, columns, rows, fillWithEmptyText);

  const done = editor.insertNodeByKey(key, index, table);
  return done;
}

module.exports = insertTableByKey;
