"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Search;

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Search(_ref) {
  let {
    data,
    handleSearchData,
    handleIsSearching
  } = _ref;

  const handleSearch = e => {
    const input = e.target.value.trim().toLowerCase();

    if (input.length > 0) {
      const dataFilter = data.filter(el => {
        const values = Object.values(el).map(value => value.trim().toLowerCase()).join(" ");
        return values.includes(input);
      });
      handleIsSearching(true);
      handleSearchData(dataFilter);
    } else {
      handleIsSearching(false);
      handleSearchData(data);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dataTable-search"
  }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("p", null, "Search"), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    onChange: e => handleSearch(e)
  })));
}