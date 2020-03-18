const { List } = require('immutable');
const TablePosition = require('../TablePosition');
const moveSelection = require('./moveSelection');
const createCell = require('../createCell');
const baseOpts = require('../baseOptions');

/**
 * Insert a new column in current table
 *
 * @param {Slate.Editor} editor
 * @param {Number} at
 * @param {Object} opts
 * @return {Slate.Editor}
 */
function insertColumn(editor, at, opts) {
    const { value } = editor;
    const { startBlock } = value;
    opts = { ...baseOpts, ...opts };

    const pos = TablePosition.create(value, startBlock, opts);
    const { table } = pos;

    if (typeof at === 'undefined') {
        at = pos.getColumnIndex() + 1;
    }

    // Insert the new cell
    editor.withoutNormalizing( () => {
        table.nodes.forEach((row) => {
            const newCell = createCell(opts);
            editor.insertNodeByKey(row.key, at, newCell);
        });
    });

    // Update the selection (not doing can break the undo)
    return moveSelection(opts, editor, pos.getColumnIndex() + 1, pos.getRowIndex());
}

module.exports = insertColumn;
