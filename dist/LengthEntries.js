"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LengthEntries;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LengthEntries(_ref) {
  let {
    value,
    handleChange
  } = _ref;

  const handleEntriesShown = e => {
    handleChange(e.target.value);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dataTable-length"
  }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("p", null, "Show"), /*#__PURE__*/_react.default.createElement("select", {
    value: value,
    onChange: e => handleEntriesShown(e)
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: 10
  }, "10"), /*#__PURE__*/_react.default.createElement("option", {
    value: 25
  }, "25"), /*#__PURE__*/_react.default.createElement("option", {
    value: 50
  }, "50"), /*#__PURE__*/_react.default.createElement("option", {
    value: 100
  }, "100")), /*#__PURE__*/_react.default.createElement("p", null, "entries")));
}

LengthEntries.propTypes = {
  value: _propTypes.default.number.isRequired,
  handleChange: _propTypes.default.func.isRequired
};