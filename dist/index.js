"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DataTable;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.sort.js");

require("./DataTable.css");

var _react = _interopRequireWildcard(require("react"));

var _LengthEntries = _interopRequireDefault(require("./LengthEntries"));

var _Search = _interopRequireDefault(require("./Search"));

var _Table = _interopRequireDefault(require("./Table"));

var _ShowEntries = _interopRequireDefault(require("./ShowEntries"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DataTable(_ref) {
  let {
    labels,
    data
  } = _ref;
  const initialState = data;
  const [currentPage, setCurrentPage] = (0, _react.useState)(1);
  const [entriesShown, setEntriesShown] = (0, _react.useState)(10);
  const [sortedData, setSortedData] = (0, _react.useState)(initialState);
  const [isSearching, setIsSearching] = (0, _react.useState)(false);
  const [sort, setSort] = (0, _react.useState)({
    column: "",
    isAsc: true
  });

  const handleSort = label => {
    if (sort.column === label) {
      setSort(_objectSpread(_objectSpread({}, sort), {}, {
        isAsc: !sort.isAsc
      }));
    } else {
      setSort({
        column: label,
        isAsc: false
      });
    }

    const sorted = sorting(label);
    setSortedData(sorted);
  };

  const sorting = label => {
    const arraySort = sortedData.sort((a, b) => {
      const labelA = a[label].trim().toLowerCase();
      const labelB = b[label].trim().toLowerCase();

      if (sort.isAsc) {
        if (labelA > labelB) {
          return 1;
        }

        if (labelA < labelB) {
          return -1;
        }
      } else {
        if (labelA < labelB) {
          return 1;
        }

        if (labelA > labelB) {
          return -1;
        }
      }

      return 0;
    });
    return arraySort;
  };

  const minShow = currentPage === 1 ? 1 : (currentPage - 1) * entriesShown + 1;
  const maxShow = currentPage * entriesShown < data.length ? currentPage * entriesShown : data.length;
  const minShowFiltered = currentPage === 1 ? sortedData.length > 0 ? 1 : 0 : (currentPage - 1) * entriesShown + 1;
  const maxShowFiltered = currentPage * entriesShown < sortedData.length ? currentPage * entriesShown : sortedData.length;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dataTable"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "top-table"
  }, /*#__PURE__*/_react.default.createElement(_LengthEntries.default, {
    handleChange: setEntriesShown
  }), /*#__PURE__*/_react.default.createElement(_Search.default, {
    data: data,
    handleSearchData: setSortedData,
    handleIsSearching: setIsSearching
  })), /*#__PURE__*/_react.default.createElement(_Table.default, {
    labels: labels,
    data: sortedData,
    minShow: minShow,
    maxShow: maxShow,
    sort: sort,
    handleSort: handleSort,
    sortedData: sortedData
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "bot-table"
  }, /*#__PURE__*/_react.default.createElement(_ShowEntries.default, {
    minShow: minShow,
    maxShow: maxShow,
    isSearching: isSearching,
    totalEntries: data.length,
    minShowFiltered: minShowFiltered,
    maxShowFiltered: maxShowFiltered
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    currentPage: currentPage,
    handleClick: setCurrentPage,
    totalEntries: data.length,
    entriesShown: entriesShown
  })));
}