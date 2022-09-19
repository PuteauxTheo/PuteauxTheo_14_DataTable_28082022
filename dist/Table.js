"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;

require("core-js/modules/es.array.sort.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Table(_ref) {
  let {
    labels,
    data,
    minShow,
    maxShow,
    sort,
    handleSort,
    sortedData
  } = _ref;
  const {
    column,
    isAsc
  } = sort;
  return /*#__PURE__*/_react.default.createElement("table", {
    className: "table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    className: "table-header-row"
  }, labels.map((el, index) => /*#__PURE__*/_react.default.createElement("th", {
    key: index,
    onClick: () => handleSort(el.value),
    className: "table-header-cell"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "label-column"
  }, /*#__PURE__*/_react.default.createElement("span", null, el.text), /*#__PURE__*/_react.default.createElement("div", {
    className: "arrows"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: column === el.value ? !isAsc ? "arrow-up arrow-active" : "arrow-up arrow-disabled" : "arrow-up"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: column === el.value ? isAsc ? "arrow-down arrow-active" : "arrow-down arrow-disabled" : "arrow-down"
  }))))))), /*#__PURE__*/_react.default.createElement("tbody", null, sortedData.length < 1 && /*#__PURE__*/_react.default.createElement("span", null, "No matching records found"), data.map((el, index) => {
    if (index + 1 >= minShow && index < maxShow) {
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: index,
        className: "table-row"
      }, Object.values(el).map((value, index) => /*#__PURE__*/_react.default.createElement("td", {
        key: value + "" + index,
        className: "table-cell"
      }, value)));
    }

    return null;
  })));
}