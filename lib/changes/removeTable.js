const TablePosition = require('../TablePosition');
const baseOpts = require('../baseOptions');

/**
 * Delete the whole table
 *
 * @param {Slate.Editor} editor
 * @param {Object} opts
 * @return {Slate.Editor}
 */
function removeTable(editor, opts) {
  opts = {...baseOpts, ...opts};
  const { value } = editor;
    const { startBlock } = value;

    const pos = TablePosition.create(value, startBlock, opts);
    const { table } = pos;

    return editor
        .deselect()
        .removeNodeByKey(table.key);
}

module.exports = removeTable;
