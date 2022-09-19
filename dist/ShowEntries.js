"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShowEntries;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShowEntries(_ref) {
  let {
    minShow,
    maxShow,
    totalEntries,
    totalEntriesShown,
    isSearching,
    minShowFiltered,
    maxShowFiltered
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "showing-entries"
  }, isSearching ? /*#__PURE__*/_react.default.createElement("span", null, "Showing ", minShowFiltered, " to ", maxShowFiltered, " of ", totalEntriesShown, " entries ( filtered from ", totalEntries, " total entries )") : /*#__PURE__*/_react.default.createElement("span", null, "Showing ", minShow, " to ", maxShow, " of ", totalEntries, " entries"));
}