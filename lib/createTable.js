const { Range } = require('immutable');
const Slate = require('slate');
const createRow = require('./createRow');

/**
 * Create a table
 *
 * @param {Object} opts
 * @param {Number} columns
 * @param {Number} rows
 * @param {Function} textGetter
 * @param {Number} headerRowCount
 * @return {Slate.Block}
 */
function createTable(opts, columns, rows, textGetter, headerRowCount) {
    const rowNodes = Range(0, rows)
        .map((item, index) => {
            if(headerRowCount && opts.typeHeaderCell && index < headerRowCount) {
                return createRow({...opts, typeCell: opts.typeHeaderCell} , columns, textGetter ? textGetter.bind(null, item) : null);
            } else {
                return createRow(opts, columns, textGetter ? textGetter.bind(null, item) : null);
            }
        })
        .toList();

    return Slate.Block.create({
        type:  opts.typeTable,
        nodes: rowNodes,
        data: {}
    });
}

module.exports = createTable;
