"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShowEntries;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

ShowEntries.propTypes = {
  minShow: _propTypes.default.number.isRequired,
  maxShow: _propTypes.default.number.isRequired,
  totalEntries: _propTypes.default.number.isRequired,
  totalEntriesShown: _propTypes.default.number,
  isSearching: _propTypes.default.bool,
  minShowFiltered: _propTypes.default.number.isRequired,
  maxShowFiltered: _propTypes.default.number.isRequired
};