const createTable = require('../createTable');

/**
 * Insert a new table
 *
 * @param {Object} opts
 * @param {Slate.Editor} editor
 * @param {Number} columns
 * @param {Number} rows
 * @param {Number} headerRowCount
 * @return {Slate.Editor}
 */
function insertTable(opts, editor, columns = 2, rows = 2, headerRowCount = 1) {
    const { value } = editor;

    if (!value.selection.start.key) return false;

    // Create the table node
    const fillWithEmptyText = (x, y) => '';
    const table = createTable(opts, columns, rows, fillWithEmptyText, headerRowCount);

    const done = editor
        .insertBlock(table);
    return done;
}

module.exports = insertTable;
