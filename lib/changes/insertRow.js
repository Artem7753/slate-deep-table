const createRow = require('../createRow');
const TablePosition = require('../TablePosition');

/**
 * Insert a new row in current table
 *
 * @param {Object} opts
 * @param {Slate.Editor} editor
 * @param {Number} at
 * @param {Function} textGetter
 * @return {Slate.Editor}
 */
function insertRow(opts, editor, at, textGetter) {
    const { value } = editor;
    const { startBlock } = value;

    const pos = TablePosition.create(value, startBlock, opts);
    const { table } = pos;

    // Create a new row with the right count of cells
    let maxCellsCount = table.nodes.toArray().reduce((accum, row) => row.nodes.size > accum ? row.nodes.size : accum, 0);
    const newRow = createRow(opts, maxCellsCount, textGetter);

    if (typeof at === 'undefined') {
        at = pos.getRowIndex() + 1;
    }

    return editor

        .insertNodeByKey(table.key, at, newRow)

        .moveToEndOfNode(
            newRow.nodes.get(pos.getColumnIndex())
        );
}

module.exports = insertRow;
