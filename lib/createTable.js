const { Range } = require('immutable');
const Slate = require('slate');
const createRow = require('./createRow');
const baseOpts = require('./baseOptions');

/**
 * Create a table
 *
 * @param {Object} opts
 * @param {Number} columns
 * @param {Number} rows
 * @param {Function} textGetter
 * @return {Slate.Block}
 */
function createTable(opts, columns, rows, textGetter) {
    opts = {...baseOpts, ...opts};
    const rowNodes = Range(0, rows)
        .map((item, index) => {
            if(opts.headerRowCount && opts.typeHeaderCell) {
                let rowOpts = index > opts.headerRowCount ? opts : {...opts, typeCell: opts.typeHeaderCell};
                return createRow(rowOpts , columns, textGetter ? textGetter.bind(null, item) : null);
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
