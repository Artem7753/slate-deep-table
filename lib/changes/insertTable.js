const createTable = require('../createTable');
const baseOpts = require('../baseOptions');

/**
 * Insert a new table
 *
 * @param {Slate.Editor} editor
 * @param {Number} columns
 * @param {Number} rows
 * @param {Object} opts
 * @return {Slate.Editor}
 */
function insertTable(editor, columns = 2, rows = 2, opts) {
    const { value } = editor;
    opts = {...baseOpts, ...opts};

    if (!value.selection.start.key) return false;

    // Create the table node
    const fillWithEmptyText = (x, y) => '';
    const table = createTable(opts, columns, rows, fillWithEmptyText);

    const done = editor
        .insertBlock(table);
    return done;
}

module.exports = insertTable;
