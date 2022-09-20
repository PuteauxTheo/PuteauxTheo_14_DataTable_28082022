"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pagination;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pagination(_ref) {
  let {
    currentPage,
    handleClick,
    totalEntries,
    entriesShown
  } = _ref;
  const nbPage = Math.ceil(totalEntries / entriesShown);
  /* Create Array with nbPage Length for simulate navigation */

  const nbPageArray = new Array(nbPage).fill(0);

  const handlePreviousPage = () => {
    if (currentPage > 1) handleClick(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < nbPage) handleClick(currentPage + 1);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: currentPage === 1 ? "pagination-btn disabled" : "pagination-btn",
    onClick: handlePreviousPage
  }, " Previous "), nbPageArray.map((el, index) => /*#__PURE__*/_react.default.createElement("button", {
    key: el + "" + index,
    type: "button",
    onClick: () => handleClick(index + 1),
    className: currentPage === index + 1 ? "pagination-btn active" : "pagination-btn"
  }, index + 1)), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: currentPage === nbPage ? "pagination-btn disabled" : "pagination-btn",
    onClick: handleNextPage
  }, "Next"));
}

Pagination.propTypes = {
  currentPage: _propTypes.default.number.isRequired,
  handleClick: _propTypes.default.func.isRequired,
  totalEntries: _propTypes.default.number.isRequired,
  entriesShown: _propTypes.default.number.isRequired
};