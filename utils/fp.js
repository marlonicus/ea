const { addIndex, map, always } = require("ramda");

module.exports = {
  noop: always(undefined),
  map: addIndex(map)
};
