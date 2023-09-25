"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
require("./modal.css");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var Modal = function Modal(props) {
  return props.trigger
    ? /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          id: "modal",
          className: "modal-window",
        },
        /*#__PURE__*/ _react.default.createElement(
          "div",
          {
            className: "modal-content",
          },
          /*#__PURE__*/ _react.default.createElement(
            "button",
            {
              className: "btn close-btn",
              onClick: function onClick() {
                return props.setTrigger(false);
              },
            },
            props.closingMsg
          ),
          props.popUpMsg
        )
      )
    : "";
};
var _default = Modal;
exports.default = _default;
