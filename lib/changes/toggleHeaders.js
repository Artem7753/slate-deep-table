const TablePosition = require('../TablePosition');
const baseOpts = require('../baseOptions');

/**
 * Toggles table headers on / off
 *
 * @param {Slate.Editor} editor
 * @param {Object} opts
 * @return {Slate.Editor}
 */
function toggleHeaders(editor, opts) {
  opts = {...baseOpts, ...opts};
  const { value } = editor;
    const { startBlock } = value;

    const pos = TablePosition.create(value, startBlock, opts);
    const { table } = pos;

    const currentSetting = !!table.get('data').get('headless');

    editor.setNodeByKey(table.key, {
        data: {
            headless: !currentSetting
        }
    });

    return editor;
}

module.exports = toggleHeaders;