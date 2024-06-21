"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*START BASE CSS*/
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Roboto', Arial;
    color: white;
}

.container {
    display: flex;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
}

.sidebar {
    display: flex;
    flex-direction: column;
    background-color: #1b1d1d;
    width: 14%;
    height: 100%;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #222425;
    width: 86%;
    height: 100%;
    justify-items: center;
}

button {
  font-family: 'Roboto', Arial;
}

.divider {
  border: none;
  height: 1px;
  /* background-color: #4a484e; */
  background-color: #f4f3f7;
  margin: 10px 0;
  width: 100%;
}

/*END BASE CSS*/
/*START SIDEBAR*/

.add-sidebar-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10%;
}

#add-task-button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  height: 50px;
  width: 11%;
  background-color: #222425;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

#add-sidebar-button, .sidebar-project-button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    height: 50px;
    width: 90%;
    background-color: #1b1d1d;
    color: white;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s, box-shadow 0.3s;
}

.sidebar-project-button {
  font-size: 15px;
  font-weight: 500;
}

#add-sidebar-button:hover, .sidebar-project-button:hover, #add-task-button:hover {
    background-color: #383b3b;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
}

#plus-icon {
    width: 25px;
    height: 25px;
}

.sidebar-project-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 40%;
}

/* BEGIN EVERYTHING IN MODAL*/
/* Modal background */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #292b2b;
  display: flex;
  flex-direction: column;
  color: white;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
  width: 25%; /* Could be more or less, depending on screen size */
  height: 45%;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  background-color: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
}

.modal-header {
display: flex;
align-items: flex-start;
justify-content: space-between;
text-align: center;
}

.modal-footer {
display: flex;
justify-content: center;
}

#modal-title {
 
}

/* Modal Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

#task-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.form-group {
  position: relative;
 }
 
 .input {
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: #f5f5f5;
  transition: border 150ms cubic-bezier(0.4,0,0.2,1);
 }
 
 .user-label {
  position: absolute;
  left: 15px;
  color: #e8e8e8;
  pointer-events: none;
  transform: translateY(1rem);
  transition: 150ms cubic-bezier(0.4,0,0.2,1);
 }
 
 .input:focus, input:valid {
  outline: none;
  border: 1.5px solid #2196f3;
 }
 
 .input:focus ~ label, input:valid ~ label {
  transform: translateY(-50%) scale(0.8);
  background-color: #212121;
  padding: 0 .2em;
  color: #2196f3;
 }

 /*Begin new project/task checkbox toggle*/
 .switch {
  --button-width: 3.5em;
  --button-height: 2em;
  --toggle-diameter: 1.5em;
  --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);
  --toggle-shadow-offset: 10px;
  --toggle-wider: 3em;
  --color-grey: #cccccc;
  --color-green: #2196f3;
 }
 
 .slider {
  display: inline-block;
  width: var(--button-width);
  height: var(--button-height);
  background-color: var(--color-grey);
  border-radius: calc(var(--button-height) / 2);
  position: relative;
  transition: 0.3s all ease-in-out;
 }
 
 .slider::after {
  content: "";
  display: inline-block;
  width: var(--toggle-diameter);
  height: var(--toggle-diameter);
  background-color: #fff;
  border-radius: calc(var(--toggle-diameter) / 2);
  position: absolute;
  top: var(--button-toggle-offset);
  transform: translateX(var(--button-toggle-offset));
  box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
  transition: 0.3s all ease-in-out;
 }
 
 .switch input[type="checkbox"]:checked + .slider {
  background-color: var(--color-green);
 }
 
 .switch input[type="checkbox"]:checked + .slider::after {
  transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));
  box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
 }
 
 .switch input[type="checkbox"] {
  display: none;
 }
 
 .switch input[type="checkbox"]:active + .slider::after {
  width: var(--toggle-wider);
 }
 
 .switch input[type="checkbox"]:checked:active + .slider::after {
  transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));
 }
 /*End new project/task checkbox toggle*/

 .project-slider-container {
  display: flex;
  align-items: center;
  gap: 20px;
 }

 /*Begin Modal Footer's Submit and Cancel Button*/
 .modal-footer-button {
  font-family: inherit;
  display: inline-block;
  width: 5em;
  height: 2.6em;
  line-height: 2.5em;
  margin: 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color .5s;
  z-index: 1;
  font-size: 15px;
  border-radius: 6px;
  font-weight: 500;
  color: var(--color);
 }
 
 .modal-footer-button:before {
  content: "";
  position: absolute;
  z-index: -1;
  background: var(--color);
  height: 150px;
  width: 200px;
  border-radius: 50%;
 }
 
 .modal-footer-button:hover {
  color: #fff;
 }
 
 .modal-footer-button:before {
  top: 100%;
  left: 100%;
  transition: all .7s;
 }
 
 .modal-footer-button:hover:before {
  top: -30px;
  left: -30px;
 }
 
 .modal-footer-button:active:before {
  transition: background 0s;
 }

 #submit {
  --color: #2196f3;
}

#submit:active:before {
  background: #2196f3;
}

#cancel {
  --color: #f44336;
}

#cancel:active:before {
  background: #f44336;
}
 /*End Modal Footer's Submit and Cancel Button*/
/*END EVERYTHING IN MODAL*/
/*END SIDEBAR*/

/*START MAIN*/
.task-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 70%;
    height: 50%;
    overflow-y: auto;
    overflow-x: hidden;
}

#task-container-header {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background-color: #222425; /* Ensure background color matches the main container */
  z-index: 1; /* Ensure it stays on top */
}

#task-card-container {

}

/* Webkit-based browsers (Chrome, Safari, newer versions of Edge) */
.task-container::-webkit-scrollbar {
  width: 8px; /* Width of the scrollbar */
  height: 8px; /* Height of the scrollbar */
}

.task-container::-webkit-scrollbar-track {
  background: #f1f1f1; /* Background of the scrollbar track */
  border-radius: 10px; /* Rounded corners for the track */
}

.task-container::-webkit-scrollbar-thumb {
  background: #888; /* Color of the scrollbar thumb */
  border-radius: 10px; /* Rounded corners for the thumb */
}

.task-container::-webkit-scrollbar-thumb:hover {
  background: #555; /* Color of the scrollbar thumb on hover */
}

.task-card {
  display: grid;
  grid-template-rows: 48% 48% 2%;
  grid-template-columns: 10% 80% 10%;
  /* background-color: #383b3b; */
  width: 100%;
  height: 60px;
  margin: 0px;
  margin-bottom: 5px;
  color: white;
}

#task-card-name {
  grid-area: 1 / 2 / 2 / 3;
  align-self: center;
}

#task-card-due-date {
  grid-area: 1 / 3 / 2 / 4;
  align-self: center;
}

#task-card-description {
  grid-area: 2 / 2 / 3 / 3;
  align-self: center;
}

.divider-container {
  grid-area: 3 / 1 / 4 / 4;
  align-self: center;
}

.add-task-card {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60px;
  margin: 0px;
  margin-bottom: 5px;
  color: white;
}

/*Begin task card checkbox*/
.checkbox-container {
  position: relative;
  top: 16px;
  right: -20px;
  grid-area: 1 / 1 / 2 / 2;
  margin-top: -10px;
}

.checkbox-container > svg {
  position: absolute;
  top: -130%;
  left: -170%;
  width: 70px; /* Adjusted from 110px to 70px */
  pointer-events: none;
}

.checkbox-container * {
  box-sizing: border-box;
}

.checkbox-container input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  margin: 0;
}

.checkbox-container input[type="checkbox"]:focus {
  outline: 0;
}

.checkbox-container .cbx {
  width: 16px; /* Adjusted from 24px to 16px */
  height: 16px; /* Adjusted from 24px to 16px */
  top: calc(100px - 8px); /* Adjusted for new size */
  left: calc(100px - 8px); /* Adjusted for new size */
}

.checkbox-container .cbx input {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px; /* Adjusted from 24px to 16px */
  height: 16px; /* Adjusted from 24px to 16px */
  border: 2px solid #bfbfc0;
  border-radius: 50%;
}

.checkbox-container .cbx label {
  width: 16px; /* Adjusted from 24px to 16px */
  height: 16px; /* Adjusted from 24px to 16px */
  background: none;
  border-radius: 50%;
  position: absolute;
  top: 8px; /* Adjusted from 12px to 8px */
  left: 0;
  transform: trasnlate3d(0, 0, 0);
  pointer-events: none;
}

.checkbox-container .cbx svg {
  position: absolute;
  /* top: 5px;
  left: 4px; */
  top: 3px; /* Adjusted for new size */
  left: 3px; /* Adjusted for new size */
  width: 10px; /* Adjusted for new size */
  height: 10px; /* Adjusted for new size */
  z-index: 1;
  pointer-events: none;
}

.checkbox-container .cbx svg path {
  stroke: #fff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 19;
  stroke-dashoffset: 19;
  transition: stroke-dashoffset 0.3s ease;
  transition-delay: 0.2s;
}

.checkbox-container .cbx input:checked + label {
  animation: splash-12 0.6s ease forwards;
}

.checkbox-container .cbx input:checked + label + svg path {
  stroke-dashoffset: 0;
}

@-moz-keyframes splash-12 {
  40% {
    background: #2196f3;
    box-shadow: 0 -18px 0 -8px #2196f3, 16px -8px 0 -8px #2196f3, 16px 8px 0 -8px #2196f3, 0 18px 0 -8px #2196f3, -16px 8px 0 -8px #2196f3, -16px -8px 0 -8px #2196f3;
  }

  100% {
    background: #2196f3;
    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
  }
}

@-webkit-keyframes splash-12 {
  40% {
    background: #2196f3;
    box-shadow: 0 -18px 0 -8px #2196f3, 16px -8px 0 -8px #2196f3, 16px 8px 0 -8px #2196f3, 0 18px 0 -8px #2196f3, -16px 8px 0 -8px #2196f3, -16px -8px 0 -8px #2196f3;
  }

  100% {
    background: #2196f3;
    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
  }
}

@-o-keyframes splash-12 {
  40% {
    background: #2196f3;
    box-shadow: 0 -18px 0 -8px #2196f3, 16px -8px 0 -8px #2196f3, 16px 8px 0 -8px #2196f3, 0 18px 0 -8px #2196f3, -16px 8px 0 -8px #2196f3, -16px -8px 0 -8px #2196f3;
  }

  100% {
    background: #2196f3;
    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
  }
}

@keyframes splash-12 {
  40% {
    background: #2196f3;
    box-shadow: 0 -18px 0 -8px #2196f3, 16px -8px 0 -8px #2196f3, 16px 8px 0 -8px #2196f3, 0 18px 0 -8px #2196f3, -16px 8px 0 -8px #2196f3, -16px -8px 0 -8px #2196f3;
  }

  100% {
    background: #2196f3;
    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
  }
}
/*End task card checkbox*/

.project-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  height: 50%;
}

.project-card {
  display: flex;
  flex-direction: column;
  /* background-color: #383b3b; */
  width: 100%;
  height: 40%;
  border-radius: 10px;
  margin: 0px;
  color: white;
}
/*END MAIN*/`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n\n/*START BASE CSS*/\nhtml, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n    font-family: 'Roboto', Arial;\n    color: white;\n}\n\n.container {\n    display: flex;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: #1b1d1d;\n    width: 14%;\n    height: 100%;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: #222425;\n    width: 86%;\n    height: 100%;\n    justify-items: center;\n}\n\nbutton {\n  font-family: 'Roboto', Arial;\n}\n\n.divider {\n  border: none;\n  height: 1px;\n  /* background-color: #4a484e; */\n  background-color: #f4f3f7;\n  margin: 10px 0;\n  width: 100%;\n}\n\n/*END BASE CSS*/\n/*START SIDEBAR*/\n\n.add-sidebar-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    height: 10%;\n}\n\n#add-task-button {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 20px;\n  height: 50px;\n  width: 11%;\n  background-color: #222425;\n  color: white;\n  font-size: 15px;\n  font-weight: 500;\n  border: none;\n  border-radius: 5px;\n  transition: background-color 0.3s, box-shadow 0.3s;\n}\n\n#add-sidebar-button, .sidebar-project-button {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 20px;\n    height: 50px;\n    width: 90%;\n    background-color: #1b1d1d;\n    color: white;\n    font-size: 15px;\n    border: none;\n    border-radius: 5px;\n    transition: background-color 0.3s, box-shadow 0.3s;\n}\n\n.sidebar-project-button {\n  font-size: 15px;\n  font-weight: 500;\n}\n\n#add-sidebar-button:hover, .sidebar-project-button:hover, #add-task-button:hover {\n    background-color: #383b3b;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */\n}\n\n#plus-icon {\n    width: 25px;\n    height: 25px;\n}\n\n.sidebar-project-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 40%;\n}\n\n/* BEGIN EVERYTHING IN MODAL*/\n/* Modal background */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #292b2b;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  border-radius: 5px;\n  width: 25%; /* Could be more or less, depending on screen size */\n  height: 45%;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 350px;\n  padding: 20px;\n  border-radius: 20px;\n  position: relative;\n  background-color: #1a1a1a;\n  color: #fff;\n  border: 1px solid #333;\n}\n\n.modal-header {\ndisplay: flex;\nalign-items: flex-start;\njustify-content: space-between;\ntext-align: center;\n}\n\n.modal-footer {\ndisplay: flex;\njustify-content: center;\n}\n\n#modal-title {\n \n}\n\n/* Modal Close Button */\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n#task-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n}\n\n.form-group {\n  position: relative;\n }\n \n .input {\n  border: solid 1.5px #9e9e9e;\n  border-radius: 1rem;\n  background: none;\n  padding: 1rem;\n  font-size: 1rem;\n  color: #f5f5f5;\n  transition: border 150ms cubic-bezier(0.4,0,0.2,1);\n }\n \n .user-label {\n  position: absolute;\n  left: 15px;\n  color: #e8e8e8;\n  pointer-events: none;\n  transform: translateY(1rem);\n  transition: 150ms cubic-bezier(0.4,0,0.2,1);\n }\n \n .input:focus, input:valid {\n  outline: none;\n  border: 1.5px solid #2196f3;\n }\n \n .input:focus ~ label, input:valid ~ label {\n  transform: translateY(-50%) scale(0.8);\n  background-color: #212121;\n  padding: 0 .2em;\n  color: #2196f3;\n }\n\n /*Begin new project/task checkbox toggle*/\n .switch {\n  --button-width: 3.5em;\n  --button-height: 2em;\n  --toggle-diameter: 1.5em;\n  --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);\n  --toggle-shadow-offset: 10px;\n  --toggle-wider: 3em;\n  --color-grey: #cccccc;\n  --color-green: #2196f3;\n }\n \n .slider {\n  display: inline-block;\n  width: var(--button-width);\n  height: var(--button-height);\n  background-color: var(--color-grey);\n  border-radius: calc(var(--button-height) / 2);\n  position: relative;\n  transition: 0.3s all ease-in-out;\n }\n \n .slider::after {\n  content: \"\";\n  display: inline-block;\n  width: var(--toggle-diameter);\n  height: var(--toggle-diameter);\n  background-color: #fff;\n  border-radius: calc(var(--toggle-diameter) / 2);\n  position: absolute;\n  top: var(--button-toggle-offset);\n  transform: translateX(var(--button-toggle-offset));\n  box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);\n  transition: 0.3s all ease-in-out;\n }\n \n .switch input[type=\"checkbox\"]:checked + .slider {\n  background-color: var(--color-green);\n }\n \n .switch input[type=\"checkbox\"]:checked + .slider::after {\n  transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));\n  box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);\n }\n \n .switch input[type=\"checkbox\"] {\n  display: none;\n }\n \n .switch input[type=\"checkbox\"]:active + .slider::after {\n  width: var(--toggle-wider);\n }\n \n .switch input[type=\"checkbox\"]:checked:active + .slider::after {\n  transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));\n }\n /*End new project/task checkbox toggle*/\n\n .project-slider-container {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n }\n\n /*Begin Modal Footer's Submit and Cancel Button*/\n .modal-footer-button {\n  font-family: inherit;\n  display: inline-block;\n  width: 5em;\n  height: 2.6em;\n  line-height: 2.5em;\n  margin: 20px;\n  position: relative;\n  overflow: hidden;\n  border: 2px solid var(--color);\n  transition: color .5s;\n  z-index: 1;\n  font-size: 15px;\n  border-radius: 6px;\n  font-weight: 500;\n  color: var(--color);\n }\n \n .modal-footer-button:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  background: var(--color);\n  height: 150px;\n  width: 200px;\n  border-radius: 50%;\n }\n \n .modal-footer-button:hover {\n  color: #fff;\n }\n \n .modal-footer-button:before {\n  top: 100%;\n  left: 100%;\n  transition: all .7s;\n }\n \n .modal-footer-button:hover:before {\n  top: -30px;\n  left: -30px;\n }\n \n .modal-footer-button:active:before {\n  transition: background 0s;\n }\n\n #submit {\n  --color: #2196f3;\n}\n\n#submit:active:before {\n  background: #2196f3;\n}\n\n#cancel {\n  --color: #f44336;\n}\n\n#cancel:active:before {\n  background: #f44336;\n}\n /*End Modal Footer's Submit and Cancel Button*/\n/*END EVERYTHING IN MODAL*/\n/*END SIDEBAR*/\n\n/*START MAIN*/\n.task-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 70%;\n    height: 50%;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n#task-container-header {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  background-color: #222425; /* Ensure background color matches the main container */\n  z-index: 1; /* Ensure it stays on top */\n}\n\n#task-card-container {\n\n}\n\n/* Webkit-based browsers (Chrome, Safari, newer versions of Edge) */\n.task-container::-webkit-scrollbar {\n  width: 8px; /* Width of the scrollbar */\n  height: 8px; /* Height of the scrollbar */\n}\n\n.task-container::-webkit-scrollbar-track {\n  background: #f1f1f1; /* Background of the scrollbar track */\n  border-radius: 10px; /* Rounded corners for the track */\n}\n\n.task-container::-webkit-scrollbar-thumb {\n  background: #888; /* Color of the scrollbar thumb */\n  border-radius: 10px; /* Rounded corners for the thumb */\n}\n\n.task-container::-webkit-scrollbar-thumb:hover {\n  background: #555; /* Color of the scrollbar thumb on hover */\n}\n\n.task-card {\n  display: grid;\n  grid-template-rows: 48% 48% 2%;\n  grid-template-columns: 10% 80% 10%;\n  /* background-color: #383b3b; */\n  width: 100%;\n  height: 60px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: white;\n}\n\n#task-card-name {\n  grid-area: 1 / 2 / 2 / 3;\n  align-self: center;\n}\n\n#task-card-due-date {\n  grid-area: 1 / 3 / 2 / 4;\n  align-self: center;\n}\n\n#task-card-description {\n  grid-area: 2 / 2 / 3 / 3;\n  align-self: center;\n}\n\n.divider-container {\n  grid-area: 3 / 1 / 4 / 4;\n  align-self: center;\n}\n\n.add-task-card {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 60px;\n  margin: 0px;\n  margin-bottom: 5px;\n  color: white;\n}\n\n/*Begin task card checkbox*/\n.checkbox-container {\n  position: relative;\n  top: 16px;\n  right: -20px;\n  grid-area: 1 / 1 / 2 / 2;\n  margin-top: -10px;\n}\n\n.checkbox-container > svg {\n  position: absolute;\n  top: -130%;\n  left: -170%;\n  width: 70px; /* Adjusted from 110px to 70px */\n  pointer-events: none;\n}\n\n.checkbox-container * {\n  box-sizing: border-box;\n}\n\n.checkbox-container input[type=\"checkbox\"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n  margin: 0;\n}\n\n.checkbox-container input[type=\"checkbox\"]:focus {\n  outline: 0;\n}\n\n.checkbox-container .cbx {\n  width: 16px; /* Adjusted from 24px to 16px */\n  height: 16px; /* Adjusted from 24px to 16px */\n  top: calc(100px - 8px); /* Adjusted for new size */\n  left: calc(100px - 8px); /* Adjusted for new size */\n}\n\n.checkbox-container .cbx input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 16px; /* Adjusted from 24px to 16px */\n  height: 16px; /* Adjusted from 24px to 16px */\n  border: 2px solid #bfbfc0;\n  border-radius: 50%;\n}\n\n.checkbox-container .cbx label {\n  width: 16px; /* Adjusted from 24px to 16px */\n  height: 16px; /* Adjusted from 24px to 16px */\n  background: none;\n  border-radius: 50%;\n  position: absolute;\n  top: 8px; /* Adjusted from 12px to 8px */\n  left: 0;\n  transform: trasnlate3d(0, 0, 0);\n  pointer-events: none;\n}\n\n.checkbox-container .cbx svg {\n  position: absolute;\n  /* top: 5px;\n  left: 4px; */\n  top: 3px; /* Adjusted for new size */\n  left: 3px; /* Adjusted for new size */\n  width: 10px; /* Adjusted for new size */\n  height: 10px; /* Adjusted for new size */\n  z-index: 1;\n  pointer-events: none;\n}\n\n.checkbox-container .cbx svg path {\n  stroke: #fff;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 19;\n  stroke-dashoffset: 19;\n  transition: stroke-dashoffset 0.3s ease;\n  transition-delay: 0.2s;\n}\n\n.checkbox-container .cbx input:checked + label {\n  animation: splash-12 0.6s ease forwards;\n}\n\n.checkbox-container .cbx input:checked + label + svg path {\n  stroke-dashoffset: 0;\n}\n\n@-moz-keyframes splash-12 {\n  40% {\n    background: #2196f3;\n    box-shadow: 0 -18px 0 -8px #2196f3, 16px -8px 0 -8px #2196f3, 16px 8px 0 -8px #2196f3, 0 18px 0 -8px #2196f3, -16px 8px 0 -8px #2196f3, -16px -8px 0 -8px #2196f3;\n  }\n\n  100% {\n    background: #2196f3;\n    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;\n  }\n}\n\n@-webkit-keyframes splash-12 {\n  40% {\n    background: #2196f3;\n    box-shadow: 0 -18px 0 -8px #2196f3, 16px -8px 0 -8px #2196f3, 16px 8px 0 -8px #2196f3, 0 18px 0 -8px #2196f3, -16px 8px 0 -8px #2196f3, -16px -8px 0 -8px #2196f3;\n  }\n\n  100% {\n    background: #2196f3;\n    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;\n  }\n}\n\n@-o-keyframes splash-12 {\n  40% {\n    background: #2196f3;\n    box-shadow: 0 -18px 0 -8px #2196f3, 16px -8px 0 -8px #2196f3, 16px 8px 0 -8px #2196f3, 0 18px 0 -8px #2196f3, -16px 8px 0 -8px #2196f3, -16px -8px 0 -8px #2196f3;\n  }\n\n  100% {\n    background: #2196f3;\n    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;\n  }\n}\n\n@keyframes splash-12 {\n  40% {\n    background: #2196f3;\n    box-shadow: 0 -18px 0 -8px #2196f3, 16px -8px 0 -8px #2196f3, 16px 8px 0 -8px #2196f3, 0 18px 0 -8px #2196f3, -16px 8px 0 -8px #2196f3, -16px -8px 0 -8px #2196f3;\n  }\n\n  100% {\n    background: #2196f3;\n    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;\n  }\n}\n/*End task card checkbox*/\n\n.project-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 70%;\n  height: 50%;\n}\n\n.project-card {\n  display: flex;\n  flex-direction: column;\n  /* background-color: #383b3b; */\n  width: 100%;\n  height: 40%;\n  border-radius: 10px;\n  margin: 0px;\n  color: white;\n}\n/*END MAIN*/"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _files_images_plus_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../files/images/plus.png */ "./files/images/plus.png");
/* harmony import */ var _svgUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svgUtils.js */ "./src/svgUtils.js");
// "npm run build"->"npm start" to launch html

// ==========================
// Imports and Dependencies
// ==========================








// ==========================
// Constants and Variables
// ==========================

const addBtn = document.getElementById('add-sidebar-button');     // Add button for sidebar
const modal = document.getElementById("myModal");                 // Modal
const span = document.getElementsByClassName("close")[0];         // X button for modal
const toggleFormCheckbox = document.getElementById('toggleForm'); // Checkbox to toggle between project/task form in modal
const taskForm = document.getElementById('task-form');            // Task form inside modal
const modalTitle = document.getElementById('modal-title');        // Text for modal title
const addTaskBtn = document.getElementById('add-task-button');    // Add task button for task/project cards

// ==========================
// Functions
// ==========================

// Function to handle form submission
function handleTaskFormSubmit(event, container)
{
  event.preventDefault(); // Prevent form from submitting

  if (toggleFormCheckbox.checked) {
    //Store values from project form and create project object
    const projectName = document.getElementById('projectName').value;
    const project = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"](projectName);

    //Append project card
    project.createProjectCard();
    project.appendProjectCardToDOM(modal, loadTaskForm);

    //Create and append sidebar project button
    project.createSidebarProjectBtn();
    project.appendSidebarProjectBtnToDOM();
  } else {
    //Store values from task form and create/append task card
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
    const description = document.getElementById('description').value;
    const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, description, dueDate, 0);
    const taskCard = createTaskCard(task);
    //const taskCard = task.createTaskCard();
    
    //fix this to be appendtaskcardtocontainerandDom
    appendTaskCardToDOM(taskCard, container);
  }
  closeModal();
}

// Append task card element to the DOM
function appendTaskCardToDOM(taskCard, container) {
  if (!container) {
    console.error('Container is undefined or null.');
    return;
  }
  const addTaskCard = container.querySelector('.add-task-card');
  container.insertBefore(taskCard, addTaskCard)
  //taskContainer.appendChild(taskCard);
}

// Create a task card element
function createTaskCard(task) {
  const taskCard = document.createElement('div');
  taskCard.className = 'task-card';

  taskCard.innerHTML = `
    <h3 id="task-card-name">${task.taskName}</h3>
    <p id="task-card-due-date">${task.dueDate}</p>
    <p id="task-card-description">${task.description}</p>
    <div class="checkbox-container">
      <div class="cbx">
        <input type="checkbox" id="cbx-12">
        <label for="cbx-12"></label>
        <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
          <path d="M2 8.36364L6.23077 12L13 2"></path>
        </svg>
      </div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo-12">
          <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
          <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur"></feColorMatrix>
          <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
    <div class="divider-container">
      <hr class="divider">
    </div>
  `;

  return taskCard;
}

// Create "add task" card
function createAddTaskCard() {
  const addTaskCard = document.createElement('div');
  addTaskCard.className = 'add-task-card';
  const addTaskBtn = document.createElement('button');
  addTaskBtn.innerText = 'Add Task';
  addTaskCard.appendChild(addTaskBtn);

  return addTaskCard;
}

// Append "add task" card to the DOM
function appendAddTaskCard(addTaskCard) {
  const taskContainer = document.getElementById('task-card-container');
  taskContainer.appendChild(addTaskCard);
}

// Append project card element to the DOM
function appendProjectCardToDOM(projectCard) {
  const projectContainer = document.getElementById('project-container');
  projectContainer.appendChild(projectCard);
}

// Closes modal
function closeModal() {
  modal.style.display = "none";
}

// Load project form in modal
function loadProjectForm() {
  modalTitle.textContent = "Create Project";
  taskForm.innerHTML = `
    <div class="form-group">
      <input class="input" type="text" id="projectName" name="projectName" required="" autocomplete="off">
      <label class="user-label" for="projectName">Project Name</label>
    </div>
    <div class="modal-footer">
    <button type="submit" class="modal-footer-button" id="submit">Submit</button>
    <button type="button" class="modal-footer-button" id="cancel">Cancel</button>
    </div>
  `;
  document.getElementById('cancel').addEventListener('click', closeModal);
  taskForm.addEventListener('submit', handleTaskFormSubmit);
}

// Load task form in modal
function loadTaskForm(container) {
  modalTitle.textContent = "Create Task";
  taskForm.innerHTML = `
    <div class="form-group">
      <input class="input" type="text" id="taskName" name="taskName" required="" autocomplete="off">
      <label class="user-label" for="taskName">Task Name</label>
    </div>
    <div class="form-group">
      <input class="input" type="text" id="dueDate" name="dueDate" required="" autocomplete="off">
      <label class="user-label" for="dueDate">Due Date</label>
    </div>
    <div class="form-group">
      <input class="input" type="text" id="description" name="description" required="" autocomplete="off">
      <label class="user-label" for="description">Description</label>
    </div>
    <div class="modal-footer">
    <button type="submit" class="modal-footer-button" id="submit">Submit</button>
    <button type="button" class="modal-footer-button" id="cancel">Cancel</button>
    </div>
</div>
  `;
  document.getElementById('task-form').addEventListener('submit', (event) => handleTaskFormSubmit(event, container));
  document.getElementById('cancel').addEventListener('click', closeModal);
  //taskForm.addEventListener('submit', (event) => handleTaskFormSubmit(event, container));
}

// ==========================
// Event Listeners
// ==========================

// When "add task" button in sidebar is clicked
addBtn.addEventListener('click', () => {
  modal.style.display = "block"; // Open modal

  //Ensure project slider is visible
  const projectSliderContainer = document.getElementById('project-slider-container')
  if (projectSliderContainer.style.visibility === 'hidden') {
    projectSliderContainer.style.visibility = 'visible';
  }
});

// When "add task" button in task/project cards are clicked
addTaskBtn.addEventListener('click', () => {
  // Open modal and load task form
  modal.style.display = "block";
  loadTaskForm();
  
  //Hide project slider and uncheck toggle form checkbox
  const projectSliderContainer = document.getElementById('project-slider-container')
  projectSliderContainer.style.visibility = 'hidden';
  toggleFormCheckbox.checked = false;
});

// When the user clicks on <span> (x) to close modal
span.addEventListener('click', () => {
  closeModal();
});

// When the user clicks anywhere outside of the modal
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    closeModal();
  }
});

// Event listender for form submit
document.getElementById('task-form').addEventListener('submit', handleTaskFormSubmit);

// Event listener for form cancel
document.getElementById('cancel').addEventListener('click', closeModal);

// Change between project or task form in modal form checkbox
toggleFormCheckbox.onchange = () => {
  toggleFormCheckbox.checked ? loadProjectForm() : loadTaskForm();
}

// ==========================
// Initialization
// ==========================

// Load into HTML when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  //Load plus icon for "add task" button in sidebar
  const imgElement = document.getElementById('plus-icon');
  imgElement.src = _files_images_plus_png__WEBPACK_IMPORTED_MODULE_3__;

  //Load add icon for "add task" buttons in task cards
  const addIcon = (0,_svgUtils_js__WEBPACK_IMPORTED_MODULE_4__.createAddIcon)({ width: '24px', height: '24px', color: '#2196f3', strokeWidth: 1.5 });
  const initialAddTaskBtn = document.getElementById('add-task-button'); //Test add
  addTaskBtn.insertBefore(addIcon, addTaskBtn.firstChild);
});

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _svgUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgUtils.js */ "./src/svgUtils.js");



class Project {
    constructor(name) {
        this.name = name;
        this.sidebarProjectBtn = null;
    }

    // Return name of project
    get returnName() {
        return this.name;
    }

    // Create project card that contains header and task card container
    createProjectCard() {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
      
        projectCard.innerHTML = `
          <div id="project-card-header">
            <h2>${this.name}</h2>
          </div>
          <div id="task-card-container">
            <!--Task cards inserted here-->
            <div class="add-task-card" id="add-task-card">
                <button id="add-task-button">Add Task</button>
            </div>
          </div>
        `;

        return projectCard;        
    }

    // Append project card element to the DOM
    appendProjectCardToDOM(modal, loadTaskForm) {
        const projectContainer = document.getElementById('project-container');
        const projectCard = this.createProjectCard();

        // Add the project card to the DOM
        projectContainer.appendChild(projectCard);

        // Add "add task" button (querySelector is used because it takes scope into acc)
        const addTaskBtn = projectCard.querySelector('#add-task-button');
        const addIcon = (0,_svgUtils_js__WEBPACK_IMPORTED_MODULE_0__.createAddIcon)({ width: '24px', height: '24px', color: '#2196f3', strokeWidth: 1.5 });
        addTaskBtn.insertBefore(addIcon, addTaskBtn.firstChild);

        // // Add event listener to "add task" button
        // projectCard.querySelector('#add-task-button').addEventListener('click', () => {
        //     modal.style.display = "block";
        //     const taskContainer = projectCard.querySelector('.task-card-container');
        //     loadTaskForm(taskContainer);
        // });

         // Add event listener to "add task" button
         addTaskBtn.addEventListener('click', () => {
            modal.style.display = "block";
            const taskContainer = projectCard.querySelector('#task-card-container');
            if (!taskContainer) {
                console.error('Task container is undefined in appendProjectCardToDOM');
                return;
            }
            loadTaskForm(taskContainer);
        });
    }

    // Create sidebar project button
    createSidebarProjectBtn() {
        // Create sidebar button
        this.sidebarProjectBtn = document.createElement('button');
        this.sidebarProjectBtn.className = "sidebar-project-button";
        // Add project icon to button
        const projectIcon = new _svgUtils_js__WEBPACK_IMPORTED_MODULE_0__["default"]("24px", "24px", "#2196f3");
        this.sidebarProjectBtn.appendChild(projectIcon.getSVG());
        // Add project name to button
        this.sidebarProjectBtn.appendChild(document.createTextNode(this.name));

        return this.sidebarProjectBtn;
    }

    // Append sidebar project button to the DOM's sidebar-project-container
    appendSidebarProjectBtnToDOM() {
        document.getElementById('sidebar-project-container').appendChild(this.sidebarProjectBtn);
    }
}

/***/ }),

/***/ "./src/svgUtils.js":
/*!*************************!*\
  !*** ./src/svgUtils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddIcon: () => (/* binding */ createAddIcon),
/* harmony export */   "default": () => (/* binding */ sidebarProjectButtonIcon)
/* harmony export */ });
// Create SVG icon for projects in sidebar
class sidebarProjectButtonIcon {
    constructor(width, height, color) {
        this.svgNS = "http://www.w3.org/2000/svg";
        this.svg = document.createElementNS(this.svgNS, "svg");
        this.svg.setAttribute("width", width);
        this.svg.setAttribute("height", height);
        this.svg.setAttribute("viewBox", "0 0 24 24");
        this.svg.setAttribute("stroke-width", "1.5");
        this.svg.setAttribute("fill", "none");
        this.svg.setAttribute("color", color);

        // Create paths
        this.createPaths(color);
    }

    createPaths(color) {
        this.addPath("M20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4Z", color);
        this.addPath("M20 5L14 10", color);
        this.addPath("M20 9L12.5 15", color);
    }

    addPath(d, strokeColor) {
        const path = document.createElementNS(this.svgNS, "path");
        path.setAttribute("d", d);
        path.setAttribute("stroke", strokeColor);
        path.setAttribute("stroke-width", "1.5");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("stroke-linejoin", "round");
        this.svg.appendChild(path);
    }

    getSVG() {
        return this.svg;
    }
}

// Create plus icon for "add task" button in add task card
function createAddIcon({ width = '24px', height = '24px', color = '#000000', strokeWidth = 1.5 } = {}) {
    const svgNamespace = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNamespace, 'svg');
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.setAttribute('stroke-width', strokeWidth);
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', svgNamespace);
    svg.setAttribute('color', color);

    const path = document.createElementNS(svgNamespace, 'path');
    path.setAttribute('d', 'M6 12H12M18 12H12M12 12V6M12 12V18');
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', strokeWidth);
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');

    svg.appendChild(path);
    return svg;
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(taskName, description, dueDate, priority) {
        this.taskName = taskName;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskCard = null;
    }

    // Return taskName
    get returnTaskName() {
        return this.taskName;
    }

    // Return description
    get returnDescription() {
        return this.description;
    }

    // Return due date
    get returnDueDate() {
        return this.dueDate;
    }

    // Return priority
    get returnPriority() {
        return this.priority;
    }

    // Create task card
    createTaskCard() {
        this.taskCard = document.createElement('div');
        this.taskCard.className = 'task-card';

        taskCard.innerHTML = `
        <h3 id="task-card-name">${this.taskName}</h3>
        <p id="task-card-due-date">${this.dueDate}</p>
        <p id="task-card-description">${this.description}</p>
        <div class="checkbox-container">
          <div class="cbx">
            <input type="checkbox" id="cbx-12">
            <label for="cbx-12"></label>
            <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
              <path d="M2 8.36364L6.23077 12L13 2"></path>
            </svg>
          </div>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo-12">
              <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
              <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur"></feColorMatrix>
              <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
        <div class="divider-container">
          <hr class="divider">
        </div>
      `;
    
      return this.taskCard;
    }

}

/***/ }),

/***/ "./files/images/plus.png":
/*!*******************************!*\
  !*** ./files/images/plus.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "323eec1b0167cdd8ff3f.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysc0hBQXNILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQ3RNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQixjQUFjO0FBQ2Q7QUFDQTtBQUNBLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGdDQUFnQztBQUNoQyxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsY0FBYztBQUNkOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsZUFBZTtBQUNmOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQix1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixZQUFZO0FBQ1osYUFBYTtBQUNiLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1RkFBdUYsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sVUFBVSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSx5QkFBeUIsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxhQUFhLE1BQU0sc0JBQXNCLHVCQUF1QixxQkFBcUIsV0FBVyxVQUFVLG9CQUFvQix1QkFBdUIsdUJBQXVCLHlCQUF5Qix5QkFBeUIsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyx3QkFBd0IsV0FBVyxZQUFZLGFBQWEsdUJBQXVCLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLFlBQVksYUFBYSxZQUFZLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyx3QkFBd0IsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLFlBQVksTUFBTSxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyx3QkFBd0IseUJBQXlCLE9BQU8sS0FBSyx3QkFBd0IseUJBQXlCLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLHNCQUFzQixhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssc0JBQXNCLHVCQUF1Qix5QkFBeUIseUJBQXlCLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxzQkFBc0IsdUJBQXVCLGFBQWEsYUFB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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTyx5QkFBeUIsd0VBQXdFLElBQUk7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMURlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsY0FBYztBQUNoRCxxQ0FBcUMsYUFBYTtBQUNsRCx3Q0FBd0MsaUJBQWlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3ZnVXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypTVEFSVCBCQVNFIENTUyovXG5odG1sLCBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBBcmlhbDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWQxZDtcbiAgICB3aWR0aDogMTQlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMyMjI0MjU7XG4gICAgd2lkdGg6IDg2JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIEFyaWFsO1xufVxuXG4uZGl2aWRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAxcHg7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM0YTQ4NGU7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGYzZjc7XG4gIG1hcmdpbjogMTBweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLypFTkQgQkFTRSBDU1MqL1xuLypTVEFSVCBTSURFQkFSKi9cblxuLmFkZC1zaWRlYmFyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwJTtcbn1cblxuI2FkZC10YXNrLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiAyMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI0MjU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3gtc2hhZG93IDAuM3M7XG59XG5cbiNhZGQtc2lkZWJhci1idXR0b24sIC5zaWRlYmFyLXByb2plY3QtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMjBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZDFkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcbn1cblxuLnNpZGViYXItcHJvamVjdC1idXR0b24ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNhZGQtc2lkZWJhci1idXR0b246aG92ZXIsIC5zaWRlYmFyLXByb2plY3QtYnV0dG9uOmhvdmVyLCAjYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzYjNiO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIFN1YnRsZSBzaGFkb3cgZWZmZWN0ICovXG59XG5cbiNwbHVzLWljb24ge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLnNpZGViYXItcHJvamVjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAlO1xufVxuXG4vKiBCRUdJTiBFVkVSWVRISU5HIElOIE1PREFMKi9cbi8qIE1vZGFsIGJhY2tncm91bmQgKi9cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG5cbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTJiMmI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMjUlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xuICBoZWlnaHQ6IDQ1JTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI21vZGFsLXRpdGxlIHtcbiBcbn1cblxuLyogTW9kYWwgQ2xvc2UgQnV0dG9uICovXG4uY2xvc2Uge1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3Rhc2stZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuIH1cbiBcbiAuaW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDEuNXB4ICM5ZTllOWU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIHRyYW5zaXRpb246IGJvcmRlciAxNTBtcyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpO1xuIH1cbiBcbiAudXNlci1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTVweDtcbiAgY29sb3I6ICNlOGU4ZTg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXJlbSk7XG4gIHRyYW5zaXRpb246IDE1MG1zIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSk7XG4gfVxuIFxuIC5pbnB1dDpmb2N1cywgaW5wdXQ6dmFsaWQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICMyMTk2ZjM7XG4gfVxuIFxuIC5pbnB1dDpmb2N1cyB+IGxhYmVsLCBpbnB1dDp2YWxpZCB+IGxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDAuOCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIHBhZGRpbmc6IDAgLjJlbTtcbiAgY29sb3I6ICMyMTk2ZjM7XG4gfVxuXG4gLypCZWdpbiBuZXcgcHJvamVjdC90YXNrIGNoZWNrYm94IHRvZ2dsZSovXG4gLnN3aXRjaCB7XG4gIC0tYnV0dG9uLXdpZHRoOiAzLjVlbTtcbiAgLS1idXR0b24taGVpZ2h0OiAyZW07XG4gIC0tdG9nZ2xlLWRpYW1ldGVyOiAxLjVlbTtcbiAgLS1idXR0b24tdG9nZ2xlLW9mZnNldDogY2FsYygodmFyKC0tYnV0dG9uLWhlaWdodCkgLSB2YXIoLS10b2dnbGUtZGlhbWV0ZXIpKSAvIDIpO1xuICAtLXRvZ2dsZS1zaGFkb3ctb2Zmc2V0OiAxMHB4O1xuICAtLXRvZ2dsZS13aWRlcjogM2VtO1xuICAtLWNvbG9yLWdyZXk6ICNjY2NjY2M7XG4gIC0tY29sb3ItZ3JlZW46ICMyMTk2ZjM7XG4gfVxuIFxuIC5zbGlkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiB2YXIoLS1idXR0b24td2lkdGgpO1xuICBoZWlnaHQ6IHZhcigtLWJ1dHRvbi1oZWlnaHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1idXR0b24taGVpZ2h0KSAvIDIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuIH1cbiBcbiAuc2xpZGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IHZhcigtLXRvZ2dsZS1kaWFtZXRlcik7XG4gIGhlaWdodDogdmFyKC0tdG9nZ2xlLWRpYW1ldGVyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS10b2dnbGUtZGlhbWV0ZXIpIC8gMik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiB2YXIoLS1idXR0b24tdG9nZ2xlLW9mZnNldCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS1idXR0b24tdG9nZ2xlLW9mZnNldCkpO1xuICBib3gtc2hhZG93OiB2YXIoLS10b2dnbGUtc2hhZG93LW9mZnNldCkgMCBjYWxjKHZhcigtLXRvZ2dsZS1zaGFkb3ctb2Zmc2V0KSAqIDQpIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gfVxuIFxuIC5zd2l0Y2ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xuIH1cbiBcbiAuc3dpdGNoIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLnNsaWRlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS1idXR0b24td2lkdGgpIC0gdmFyKC0tdG9nZ2xlLWRpYW1ldGVyKSAtIHZhcigtLWJ1dHRvbi10b2dnbGUtb2Zmc2V0KSkpO1xuICBib3gtc2hhZG93OiBjYWxjKHZhcigtLXRvZ2dsZS1zaGFkb3ctb2Zmc2V0KSAqIC0xKSAwIGNhbGModmFyKC0tdG9nZ2xlLXNoYWRvdy1vZmZzZXQpICogNCkgcmdiYSgwLCAwLCAwLCAwLjEpO1xuIH1cbiBcbiAuc3dpdGNoIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gfVxuIFxuIC5zd2l0Y2ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmFjdGl2ZSArIC5zbGlkZXI6OmFmdGVyIHtcbiAgd2lkdGg6IHZhcigtLXRvZ2dsZS13aWRlcik7XG4gfVxuIFxuIC5zd2l0Y2ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6YWN0aXZlICsgLnNsaWRlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS1idXR0b24td2lkdGgpIC0gdmFyKC0tdG9nZ2xlLXdpZGVyKSAtIHZhcigtLWJ1dHRvbi10b2dnbGUtb2Zmc2V0KSkpO1xuIH1cbiAvKkVuZCBuZXcgcHJvamVjdC90YXNrIGNoZWNrYm94IHRvZ2dsZSovXG5cbiAucHJvamVjdC1zbGlkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuIH1cblxuIC8qQmVnaW4gTW9kYWwgRm9vdGVyJ3MgU3VibWl0IGFuZCBDYW5jZWwgQnV0dG9uKi9cbiAubW9kYWwtZm9vdGVyLWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1ZW07XG4gIGhlaWdodDogMi42ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgbWFyZ2luOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjVzO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiB9XG4gXG4gLm1vZGFsLWZvb3Rlci1idXR0b246YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IpO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiB9XG4gXG4gLm1vZGFsLWZvb3Rlci1idXR0b246aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiB9XG4gXG4gLm1vZGFsLWZvb3Rlci1idXR0b246YmVmb3JlIHtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjdzO1xuIH1cbiBcbiAubW9kYWwtZm9vdGVyLWJ1dHRvbjpob3ZlcjpiZWZvcmUge1xuICB0b3A6IC0zMHB4O1xuICBsZWZ0OiAtMzBweDtcbiB9XG4gXG4gLm1vZGFsLWZvb3Rlci1idXR0b246YWN0aXZlOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMHM7XG4gfVxuXG4gI3N1Ym1pdCB7XG4gIC0tY29sb3I6ICMyMTk2ZjM7XG59XG5cbiNzdWJtaXQ6YWN0aXZlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG59XG5cbiNjYW5jZWwge1xuICAtLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4jY2FuY2VsOmFjdGl2ZTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xufVxuIC8qRW5kIE1vZGFsIEZvb3RlcidzIFN1Ym1pdCBhbmQgQ2FuY2VsIEJ1dHRvbiovXG4vKkVORCBFVkVSWVRISU5HIElOIE1PREFMKi9cbi8qRU5EIFNJREVCQVIqL1xuXG4vKlNUQVJUIE1BSU4qL1xuLnRhc2stY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbiN0YXNrLWNvbnRhaW5lci1oZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjQyNTsgLyogRW5zdXJlIGJhY2tncm91bmQgY29sb3IgbWF0Y2hlcyB0aGUgbWFpbiBjb250YWluZXIgKi9cbiAgei1pbmRleDogMTsgLyogRW5zdXJlIGl0IHN0YXlzIG9uIHRvcCAqL1xufVxuXG4jdGFzay1jYXJkLWNvbnRhaW5lciB7XG5cbn1cblxuLyogV2Via2l0LWJhc2VkIGJyb3dzZXJzIChDaHJvbWUsIFNhZmFyaSwgbmV3ZXIgdmVyc2lvbnMgb2YgRWRnZSkgKi9cbi50YXNrLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4OyAvKiBXaWR0aCBvZiB0aGUgc2Nyb2xsYmFyICovXG4gIGhlaWdodDogOHB4OyAvKiBIZWlnaHQgb2YgdGhlIHNjcm9sbGJhciAqL1xufVxuXG4udGFzay1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTsgLyogQmFja2dyb3VuZCBvZiB0aGUgc2Nyb2xsYmFyIHRyYWNrICovXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgdGhlIHRyYWNrICovXG59XG5cbi50YXNrLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIHRodW1iICovXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgdGhlIHRodW1iICovXG59XG5cbi50YXNrLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIHRodW1iIG9uIGhvdmVyICovXG59XG5cbi50YXNrLWNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ4JSA0OCUgMiU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDgwJSAxMCU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMzODNiM2I7ICovXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3Rhc2stY2FyZC1uYW1lIHtcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbiN0YXNrLWNhcmQtZHVlLWRhdGUge1xuICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuI3Rhc2stY2FyZC1kZXNjcmlwdGlvbiB7XG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZGl2aWRlci1jb250YWluZXIge1xuICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmFkZC10YXNrLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLypCZWdpbiB0YXNrIGNhcmQgY2hlY2tib3gqL1xuLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNnB4O1xuICByaWdodDogLTIwcHg7XG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5jaGVja2JveC1jb250YWluZXIgPiBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEzMCU7XG4gIGxlZnQ6IC0xNzAlO1xuICB3aWR0aDogNzBweDsgLyogQWRqdXN0ZWQgZnJvbSAxMTBweCB0byA3MHB4ICovXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyIC5jYngge1xuICB3aWR0aDogMTZweDsgLyogQWRqdXN0ZWQgZnJvbSAyNHB4IHRvIDE2cHggKi9cbiAgaGVpZ2h0OiAxNnB4OyAvKiBBZGp1c3RlZCBmcm9tIDI0cHggdG8gMTZweCAqL1xuICB0b3A6IGNhbGMoMTAwcHggLSA4cHgpOyAvKiBBZGp1c3RlZCBmb3IgbmV3IHNpemUgKi9cbiAgbGVmdDogY2FsYygxMDBweCAtIDhweCk7IC8qIEFkanVzdGVkIGZvciBuZXcgc2l6ZSAqL1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyIC5jYnggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE2cHg7IC8qIEFkanVzdGVkIGZyb20gMjRweCB0byAxNnB4ICovXG4gIGhlaWdodDogMTZweDsgLyogQWRqdXN0ZWQgZnJvbSAyNHB4IHRvIDE2cHggKi9cbiAgYm9yZGVyOiAycHggc29saWQgI2JmYmZjMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyIC5jYnggbGFiZWwge1xuICB3aWR0aDogMTZweDsgLyogQWRqdXN0ZWQgZnJvbSAyNHB4IHRvIDE2cHggKi9cbiAgaGVpZ2h0OiAxNnB4OyAvKiBBZGp1c3RlZCBmcm9tIDI0cHggdG8gMTZweCAqL1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7IC8qIEFkanVzdGVkIGZyb20gMTJweCB0byA4cHggKi9cbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFzbmxhdGUzZCgwLCAwLCAwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jaGVja2JveC1jb250YWluZXIgLmNieCBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIHRvcDogNXB4O1xuICBsZWZ0OiA0cHg7ICovXG4gIHRvcDogM3B4OyAvKiBBZGp1c3RlZCBmb3IgbmV3IHNpemUgKi9cbiAgbGVmdDogM3B4OyAvKiBBZGp1c3RlZCBmb3IgbmV3IHNpemUgKi9cbiAgd2lkdGg6IDEwcHg7IC8qIEFkanVzdGVkIGZvciBuZXcgc2l6ZSAqL1xuICBoZWlnaHQ6IDEwcHg7IC8qIEFkanVzdGVkIGZvciBuZXcgc2l6ZSAqL1xuICB6LWluZGV4OiAxO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNoZWNrYm94LWNvbnRhaW5lciAuY2J4IHN2ZyBwYXRoIHtcbiAgc3Ryb2tlOiAjZmZmO1xuICBzdHJva2Utd2lkdGg6IDM7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTk7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxOTtcbiAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyIC5jYnggaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgYW5pbWF0aW9uOiBzcGxhc2gtMTIgMC42cyBlYXNlIGZvcndhcmRzO1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyIC5jYnggaW5wdXQ6Y2hlY2tlZCArIGxhYmVsICsgc3ZnIHBhdGgge1xuICBzdHJva2UtZGFzaG9mZnNldDogMDtcbn1cblxuQC1tb3ota2V5ZnJhbWVzIHNwbGFzaC0xMiB7XG4gIDQwJSB7XG4gICAgYmFja2dyb3VuZDogIzIxOTZmMztcbiAgICBib3gtc2hhZG93OiAwIC0xOHB4IDAgLThweCAjMjE5NmYzLCAxNnB4IC04cHggMCAtOHB4ICMyMTk2ZjMsIDE2cHggOHB4IDAgLThweCAjMjE5NmYzLCAwIDE4cHggMCAtOHB4ICMyMTk2ZjMsIC0xNnB4IDhweCAwIC04cHggIzIxOTZmMywgLTE2cHggLThweCAwIC04cHggIzIxOTZmMztcbiAgfVxuXG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG4gICAgYm94LXNoYWRvdzogMCAtMzZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAzMnB4IC0xNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIDMycHggMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAwIDM2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgLTMycHggMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAtMzJweCAtMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzcGxhc2gtMTIge1xuICA0MCUge1xuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG4gICAgYm94LXNoYWRvdzogMCAtMThweCAwIC04cHggIzIxOTZmMywgMTZweCAtOHB4IDAgLThweCAjMjE5NmYzLCAxNnB4IDhweCAwIC04cHggIzIxOTZmMywgMCAxOHB4IDAgLThweCAjMjE5NmYzLCAtMTZweCA4cHggMCAtOHB4ICMyMTk2ZjMsIC0xNnB4IC04cHggMCAtOHB4ICMyMTk2ZjM7XG4gIH1cblxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xuICAgIGJveC1zaGFkb3c6IDAgLTM2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMzJweCAtMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAzMnB4IDE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMCAzNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIC0zMnB4IDE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgLTMycHggLTE2cHggMCAtMTBweCB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG5ALW8ta2V5ZnJhbWVzIHNwbGFzaC0xMiB7XG4gIDQwJSB7XG4gICAgYmFja2dyb3VuZDogIzIxOTZmMztcbiAgICBib3gtc2hhZG93OiAwIC0xOHB4IDAgLThweCAjMjE5NmYzLCAxNnB4IC04cHggMCAtOHB4ICMyMTk2ZjMsIDE2cHggOHB4IDAgLThweCAjMjE5NmYzLCAwIDE4cHggMCAtOHB4ICMyMTk2ZjMsIC0xNnB4IDhweCAwIC04cHggIzIxOTZmMywgLTE2cHggLThweCAwIC04cHggIzIxOTZmMztcbiAgfVxuXG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG4gICAgYm94LXNoYWRvdzogMCAtMzZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAzMnB4IC0xNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIDMycHggMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAwIDM2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgLTMycHggMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAtMzJweCAtMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BsYXNoLTEyIHtcbiAgNDAlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xuICAgIGJveC1zaGFkb3c6IDAgLTE4cHggMCAtOHB4ICMyMTk2ZjMsIDE2cHggLThweCAwIC04cHggIzIxOTZmMywgMTZweCA4cHggMCAtOHB4ICMyMTk2ZjMsIDAgMThweCAwIC04cHggIzIxOTZmMywgLTE2cHggOHB4IDAgLThweCAjMjE5NmYzLCAtMTZweCAtOHB4IDAgLThweCAjMjE5NmYzO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZDogIzIxOTZmMztcbiAgICBib3gtc2hhZG93OiAwIC0zNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIDMycHggLTE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMzJweCAxNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIDAgMzZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAtMzJweCAxNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIC0zMnB4IC0xNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQ7XG4gIH1cbn1cbi8qRW5kIHRhc2sgY2FyZCBjaGVja2JveCovXG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzYjNiOyAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4vKkVORCBNQUlOKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25C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MEI7RUFDeEMsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHVDQUF1QztFQUN2QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixpS0FBaUs7RUFDbks7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsbU1BQW1NO0VBQ3JNO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixpS0FBaUs7RUFDbks7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsbU1BQW1NO0VBQ3JNO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixpS0FBaUs7RUFDbks7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsbU1BQW1NO0VBQ3JNO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixpS0FBaUs7RUFDbks7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsbU1BQW1NO0VBQ3JNO0FBQ0Y7QUFDQSx5QkFBeUI7O0FBRXpCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQSxXQUFXXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLypTVEFSVCBCQVNFIENTUyovXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBBcmlhbDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWQxZDtcXG4gICAgd2lkdGg6IDE0JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICMyMjI0MjU7XFxuICAgIHdpZHRoOiA4NiU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBBcmlhbDtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0ODRlOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjNmNztcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qRU5EIEJBU0UgQ1NTKi9cXG4vKlNUQVJUIFNJREVCQVIqL1xcblxcbi5hZGQtc2lkZWJhci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAlO1xcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDExJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI0MjU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3gtc2hhZG93IDAuM3M7XFxufVxcblxcbiNhZGQtc2lkZWJhci1idXR0b24sIC5zaWRlYmFyLXByb2plY3QtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWQxZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdC1idXR0b24ge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2FkZC1zaWRlYmFyLWJ1dHRvbjpob3ZlciwgLnNpZGViYXItcHJvamVjdC1idXR0b246aG92ZXIsICNhZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzYjNiO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTdWJ0bGUgc2hhZG93IGVmZmVjdCAqL1xcbn1cXG5cXG4jcGx1cy1pY29uIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MCU7XFxufVxcblxcbi8qIEJFR0lOIEVWRVJZVEhJTkcgSU4gTU9EQUwqL1xcbi8qIE1vZGFsIGJhY2tncm91bmQgKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyYjJiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMjUlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgaGVpZ2h0OiA0NSU7XFxufVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuZGlzcGxheTogZmxleDtcXG5hbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtZm9vdGVyIHtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbW9kYWwtdGl0bGUge1xcbiBcXG59XFxuXFxuLyogTW9kYWwgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Rhc2stZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1ncm91cCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuIH1cXG4gXFxuIC5pbnB1dCB7XFxuICBib3JkZXI6IHNvbGlkIDEuNXB4ICM5ZTllOWU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogI2Y1ZjVmNTtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAxNTBtcyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpO1xcbiB9XFxuIFxcbiAudXNlci1sYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNXB4O1xcbiAgY29sb3I6ICNlOGU4ZTg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcmVtKTtcXG4gIHRyYW5zaXRpb246IDE1MG1zIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSk7XFxuIH1cXG4gXFxuIC5pbnB1dDpmb2N1cywgaW5wdXQ6dmFsaWQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMS41cHggc29saWQgIzIxOTZmMztcXG4gfVxcbiBcXG4gLmlucHV0OmZvY3VzIH4gbGFiZWwsIGlucHV0OnZhbGlkIH4gbGFiZWwge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDAuOCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbiAgcGFkZGluZzogMCAuMmVtO1xcbiAgY29sb3I6ICMyMTk2ZjM7XFxuIH1cXG5cXG4gLypCZWdpbiBuZXcgcHJvamVjdC90YXNrIGNoZWNrYm94IHRvZ2dsZSovXFxuIC5zd2l0Y2gge1xcbiAgLS1idXR0b24td2lkdGg6IDMuNWVtO1xcbiAgLS1idXR0b24taGVpZ2h0OiAyZW07XFxuICAtLXRvZ2dsZS1kaWFtZXRlcjogMS41ZW07XFxuICAtLWJ1dHRvbi10b2dnbGUtb2Zmc2V0OiBjYWxjKCh2YXIoLS1idXR0b24taGVpZ2h0KSAtIHZhcigtLXRvZ2dsZS1kaWFtZXRlcikpIC8gMik7XFxuICAtLXRvZ2dsZS1zaGFkb3ctb2Zmc2V0OiAxMHB4O1xcbiAgLS10b2dnbGUtd2lkZXI6IDNlbTtcXG4gIC0tY29sb3ItZ3JleTogI2NjY2NjYztcXG4gIC0tY29sb3ItZ3JlZW46ICMyMTk2ZjM7XFxuIH1cXG4gXFxuIC5zbGlkZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IHZhcigtLWJ1dHRvbi13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLWJ1dHRvbi1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWJ1dHRvbi1oZWlnaHQpIC8gMik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcXG4gfVxcbiBcXG4gLnNsaWRlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0tdG9nZ2xlLWRpYW1ldGVyKTtcXG4gIGhlaWdodDogdmFyKC0tdG9nZ2xlLWRpYW1ldGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXRvZ2dsZS1kaWFtZXRlcikgLyAyKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogdmFyKC0tYnV0dG9uLXRvZ2dsZS1vZmZzZXQpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLWJ1dHRvbi10b2dnbGUtb2Zmc2V0KSk7XFxuICBib3gtc2hhZG93OiB2YXIoLS10b2dnbGUtc2hhZG93LW9mZnNldCkgMCBjYWxjKHZhcigtLXRvZ2dsZS1zaGFkb3ctb2Zmc2V0KSAqIDQpIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xcbiB9XFxuIFxcbiAuc3dpdGNoIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xcbiB9XFxuIFxcbiAuc3dpdGNoIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIC5zbGlkZXI6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLWJ1dHRvbi13aWR0aCkgLSB2YXIoLS10b2dnbGUtZGlhbWV0ZXIpIC0gdmFyKC0tYnV0dG9uLXRvZ2dsZS1vZmZzZXQpKSk7XFxuICBib3gtc2hhZG93OiBjYWxjKHZhcigtLXRvZ2dsZS1zaGFkb3ctb2Zmc2V0KSAqIC0xKSAwIGNhbGModmFyKC0tdG9nZ2xlLXNoYWRvdy1vZmZzZXQpICogNCkgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiB9XFxuIFxcbiAuc3dpdGNoIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gfVxcbiBcXG4gLnN3aXRjaCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmFjdGl2ZSArIC5zbGlkZXI6OmFmdGVyIHtcXG4gIHdpZHRoOiB2YXIoLS10b2dnbGUtd2lkZXIpO1xcbiB9XFxuIFxcbiAuc3dpdGNoIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDphY3RpdmUgKyAuc2xpZGVyOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS1idXR0b24td2lkdGgpIC0gdmFyKC0tdG9nZ2xlLXdpZGVyKSAtIHZhcigtLWJ1dHRvbi10b2dnbGUtb2Zmc2V0KSkpO1xcbiB9XFxuIC8qRW5kIG5ldyBwcm9qZWN0L3Rhc2sgY2hlY2tib3ggdG9nZ2xlKi9cXG5cXG4gLnByb2plY3Qtc2xpZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gfVxcblxcbiAvKkJlZ2luIE1vZGFsIEZvb3RlcidzIFN1Ym1pdCBhbmQgQ2FuY2VsIEJ1dHRvbiovXFxuIC5tb2RhbC1mb290ZXItYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDVlbTtcXG4gIGhlaWdodDogMi42ZW07XFxuICBsaW5lLWhlaWdodDogMi41ZW07XFxuICBtYXJnaW46IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgLjVzO1xcbiAgei1pbmRleDogMTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiB9XFxuIFxcbiAubW9kYWwtZm9vdGVyLWJ1dHRvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yKTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuIH1cXG4gXFxuIC5tb2RhbC1mb290ZXItYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiB9XFxuIFxcbiAubW9kYWwtZm9vdGVyLWJ1dHRvbjpiZWZvcmUge1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMTAwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAuN3M7XFxuIH1cXG4gXFxuIC5tb2RhbC1mb290ZXItYnV0dG9uOmhvdmVyOmJlZm9yZSB7XFxuICB0b3A6IC0zMHB4O1xcbiAgbGVmdDogLTMwcHg7XFxuIH1cXG4gXFxuIC5tb2RhbC1mb290ZXItYnV0dG9uOmFjdGl2ZTpiZWZvcmUge1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwcztcXG4gfVxcblxcbiAjc3VibWl0IHtcXG4gIC0tY29sb3I6ICMyMTk2ZjM7XFxufVxcblxcbiNzdWJtaXQ6YWN0aXZlOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xcbn1cXG5cXG4jY2FuY2VsIHtcXG4gIC0tY29sb3I6ICNmNDQzMzY7XFxufVxcblxcbiNjYW5jZWw6YWN0aXZlOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xcbn1cXG4gLypFbmQgTW9kYWwgRm9vdGVyJ3MgU3VibWl0IGFuZCBDYW5jZWwgQnV0dG9uKi9cXG4vKkVORCBFVkVSWVRISU5HIElOIE1PREFMKi9cXG4vKkVORCBTSURFQkFSKi9cXG5cXG4vKlNUQVJUIE1BSU4qL1xcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI3Rhc2stY29udGFpbmVyLWhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjQyNTsgLyogRW5zdXJlIGJhY2tncm91bmQgY29sb3IgbWF0Y2hlcyB0aGUgbWFpbiBjb250YWluZXIgKi9cXG4gIHotaW5kZXg6IDE7IC8qIEVuc3VyZSBpdCBzdGF5cyBvbiB0b3AgKi9cXG59XFxuXFxuI3Rhc2stY2FyZC1jb250YWluZXIge1xcblxcbn1cXG5cXG4vKiBXZWJraXQtYmFzZWQgYnJvd3NlcnMgKENocm9tZSwgU2FmYXJpLCBuZXdlciB2ZXJzaW9ucyBvZiBFZGdlKSAqL1xcbi50YXNrLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDhweDsgLyogV2lkdGggb2YgdGhlIHNjcm9sbGJhciAqL1xcbiAgaGVpZ2h0OiA4cHg7IC8qIEhlaWdodCBvZiB0aGUgc2Nyb2xsYmFyICovXFxufVxcblxcbi50YXNrLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTsgLyogQmFja2dyb3VuZCBvZiB0aGUgc2Nyb2xsYmFyIHRyYWNrICovXFxuICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHRoZSB0cmFjayAqL1xcbn1cXG5cXG4udGFzay1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6ICM4ODg7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgdGh1bWIgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgdGhlIHRodW1iICovXFxufVxcblxcbi50YXNrLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzU1NTsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0aHVtYiBvbiBob3ZlciAqL1xcbn1cXG5cXG4udGFzay1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ4JSA0OCUgMiU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSA4MCUgMTAlO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzM4M2IzYjsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiN0YXNrLWNhcmQtbmFtZSB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiN0YXNrLWNhcmQtZHVlLWRhdGUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jdGFzay1jYXJkLWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmRpdmlkZXItY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gNDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKkJlZ2luIHRhc2sgY2FyZCBjaGVja2JveCovXFxuLmNoZWNrYm94LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDE2cHg7XFxuICByaWdodDogLTIwcHg7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciA+IHN2ZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMzAlO1xcbiAgbGVmdDogLTE3MCU7XFxuICB3aWR0aDogNzBweDsgLyogQWRqdXN0ZWQgZnJvbSAxMTBweCB0byA3MHB4ICovXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgLmNieCB7XFxuICB3aWR0aDogMTZweDsgLyogQWRqdXN0ZWQgZnJvbSAyNHB4IHRvIDE2cHggKi9cXG4gIGhlaWdodDogMTZweDsgLyogQWRqdXN0ZWQgZnJvbSAyNHB4IHRvIDE2cHggKi9cXG4gIHRvcDogY2FsYygxMDBweCAtIDhweCk7IC8qIEFkanVzdGVkIGZvciBuZXcgc2l6ZSAqL1xcbiAgbGVmdDogY2FsYygxMDBweCAtIDhweCk7IC8qIEFkanVzdGVkIGZvciBuZXcgc2l6ZSAqL1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIC5jYnggaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxNnB4OyAvKiBBZGp1c3RlZCBmcm9tIDI0cHggdG8gMTZweCAqL1xcbiAgaGVpZ2h0OiAxNnB4OyAvKiBBZGp1c3RlZCBmcm9tIDI0cHggdG8gMTZweCAqL1xcbiAgYm9yZGVyOiAycHggc29saWQgI2JmYmZjMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciAuY2J4IGxhYmVsIHtcXG4gIHdpZHRoOiAxNnB4OyAvKiBBZGp1c3RlZCBmcm9tIDI0cHggdG8gMTZweCAqL1xcbiAgaGVpZ2h0OiAxNnB4OyAvKiBBZGp1c3RlZCBmcm9tIDI0cHggdG8gMTZweCAqL1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogOHB4OyAvKiBBZGp1c3RlZCBmcm9tIDEycHggdG8gOHB4ICovXFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFzbmxhdGUzZCgwLCAwLCAwKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIC5jYnggc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8qIHRvcDogNXB4O1xcbiAgbGVmdDogNHB4OyAqL1xcbiAgdG9wOiAzcHg7IC8qIEFkanVzdGVkIGZvciBuZXcgc2l6ZSAqL1xcbiAgbGVmdDogM3B4OyAvKiBBZGp1c3RlZCBmb3IgbmV3IHNpemUgKi9cXG4gIHdpZHRoOiAxMHB4OyAvKiBBZGp1c3RlZCBmb3IgbmV3IHNpemUgKi9cXG4gIGhlaWdodDogMTBweDsgLyogQWRqdXN0ZWQgZm9yIG5ldyBzaXplICovXFxuICB6LWluZGV4OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgLmNieCBzdmcgcGF0aCB7XFxuICBzdHJva2U6ICNmZmY7XFxuICBzdHJva2Utd2lkdGg6IDM7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTk7XFxuICBzdHJva2UtZGFzaG9mZnNldDogMTk7XFxuICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAwLjNzIGVhc2U7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIC5jYnggaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGFuaW1hdGlvbjogc3BsYXNoLTEyIDAuNnMgZWFzZSBmb3J3YXJkcztcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciAuY2J4IGlucHV0OmNoZWNrZWQgKyBsYWJlbCArIHN2ZyBwYXRoIHtcXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbn1cXG5cXG5ALW1vei1rZXlmcmFtZXMgc3BsYXNoLTEyIHtcXG4gIDQwJSB7XFxuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XFxuICAgIGJveC1zaGFkb3c6IDAgLTE4cHggMCAtOHB4ICMyMTk2ZjMsIDE2cHggLThweCAwIC04cHggIzIxOTZmMywgMTZweCA4cHggMCAtOHB4ICMyMTk2ZjMsIDAgMThweCAwIC04cHggIzIxOTZmMywgLTE2cHggOHB4IDAgLThweCAjMjE5NmYzLCAtMTZweCAtOHB4IDAgLThweCAjMjE5NmYzO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XFxuICAgIGJveC1zaGFkb3c6IDAgLTM2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMzJweCAtMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAzMnB4IDE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMCAzNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIC0zMnB4IDE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgLTMycHggLTE2cHggMCAtMTBweCB0cmFuc3BhcmVudDtcXG4gIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwbGFzaC0xMiB7XFxuICA0MCUge1xcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xcbiAgICBib3gtc2hhZG93OiAwIC0xOHB4IDAgLThweCAjMjE5NmYzLCAxNnB4IC04cHggMCAtOHB4ICMyMTk2ZjMsIDE2cHggOHB4IDAgLThweCAjMjE5NmYzLCAwIDE4cHggMCAtOHB4ICMyMTk2ZjMsIC0xNnB4IDhweCAwIC04cHggIzIxOTZmMywgLTE2cHggLThweCAwIC04cHggIzIxOTZmMztcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xcbiAgICBib3gtc2hhZG93OiAwIC0zNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIDMycHggLTE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMzJweCAxNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIDAgMzZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAtMzJweCAxNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIC0zMnB4IC0xNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbkAtby1rZXlmcmFtZXMgc3BsYXNoLTEyIHtcXG4gIDQwJSB7XFxuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XFxuICAgIGJveC1zaGFkb3c6IDAgLTE4cHggMCAtOHB4ICMyMTk2ZjMsIDE2cHggLThweCAwIC04cHggIzIxOTZmMywgMTZweCA4cHggMCAtOHB4ICMyMTk2ZjMsIDAgMThweCAwIC04cHggIzIxOTZmMywgLTE2cHggOHB4IDAgLThweCAjMjE5NmYzLCAtMTZweCAtOHB4IDAgLThweCAjMjE5NmYzO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XFxuICAgIGJveC1zaGFkb3c6IDAgLTM2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMzJweCAtMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAzMnB4IDE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMCAzNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIC0zMnB4IDE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgLTMycHggLTE2cHggMCAtMTBweCB0cmFuc3BhcmVudDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzcGxhc2gtMTIge1xcbiAgNDAlIHtcXG4gICAgYmFja2dyb3VuZDogIzIxOTZmMztcXG4gICAgYm94LXNoYWRvdzogMCAtMThweCAwIC04cHggIzIxOTZmMywgMTZweCAtOHB4IDAgLThweCAjMjE5NmYzLCAxNnB4IDhweCAwIC04cHggIzIxOTZmMywgMCAxOHB4IDAgLThweCAjMjE5NmYzLCAtMTZweCA4cHggMCAtOHB4ICMyMTk2ZjMsIC0xNnB4IC04cHggMCAtOHB4ICMyMTk2ZjM7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZDogIzIxOTZmMztcXG4gICAgYm94LXNoYWRvdzogMCAtMzZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAzMnB4IC0xNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIDMycHggMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAwIDM2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgLTMycHggMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAtMzJweCAtMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG4vKkVuZCB0YXNrIGNhcmQgY2hlY2tib3gqL1xcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLnByb2plY3QtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMzODNiM2I7ICovXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4vKkVORCBNQUlOKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFwibnBtIHJ1biBidWlsZFwiLT5cIm5wbSBzdGFydFwiIHRvIGxhdW5jaCBodG1sXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBJbXBvcnRzIGFuZCBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgcGx1c0ljb24gZnJvbSAnLi4vZmlsZXMvaW1hZ2VzL3BsdXMucG5nJztcbmltcG9ydCBzaWRlYmFyUHJvamVjdEJ1dHRvbkljb24gZnJvbSAnLi9zdmdVdGlscy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVBZGRJY29uIH0gZnJvbSAnLi9zdmdVdGlscy5qcyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb25zdGFudHMgYW5kIFZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1zaWRlYmFyLWJ1dHRvbicpOyAgICAgLy8gQWRkIGJ1dHRvbiBmb3Igc2lkZWJhclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxcIik7ICAgICAgICAgICAgICAgICAvLyBNb2RhbFxuY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTsgICAgICAgICAvLyBYIGJ1dHRvbiBmb3IgbW9kYWxcbmNvbnN0IHRvZ2dsZUZvcm1DaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGVGb3JtJyk7IC8vIENoZWNrYm94IHRvIHRvZ2dsZSBiZXR3ZWVuIHByb2plY3QvdGFzayBmb3JtIGluIG1vZGFsXG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKTsgICAgICAgICAgICAvLyBUYXNrIGZvcm0gaW5zaWRlIG1vZGFsXG5jb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXRpdGxlJyk7ICAgICAgICAvLyBUZXh0IGZvciBtb2RhbCB0aXRsZVxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idXR0b24nKTsgICAgLy8gQWRkIHRhc2sgYnV0dG9uIGZvciB0YXNrL3Byb2plY3QgY2FyZHNcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZ1bmN0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGZvcm0gc3VibWlzc2lvblxuZnVuY3Rpb24gaGFuZGxlVGFza0Zvcm1TdWJtaXQoZXZlbnQsIGNvbnRhaW5lcilcbntcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBmb3JtIGZyb20gc3VibWl0dGluZ1xuXG4gIGlmICh0b2dnbGVGb3JtQ2hlY2tib3guY2hlY2tlZCkge1xuICAgIC8vU3RvcmUgdmFsdWVzIGZyb20gcHJvamVjdCBmb3JtIGFuZCBjcmVhdGUgcHJvamVjdCBvYmplY3RcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG5cbiAgICAvL0FwcGVuZCBwcm9qZWN0IGNhcmRcbiAgICBwcm9qZWN0LmNyZWF0ZVByb2plY3RDYXJkKCk7XG4gICAgcHJvamVjdC5hcHBlbmRQcm9qZWN0Q2FyZFRvRE9NKG1vZGFsLCBsb2FkVGFza0Zvcm0pO1xuXG4gICAgLy9DcmVhdGUgYW5kIGFwcGVuZCBzaWRlYmFyIHByb2plY3QgYnV0dG9uXG4gICAgcHJvamVjdC5jcmVhdGVTaWRlYmFyUHJvamVjdEJ0bigpO1xuICAgIHByb2plY3QuYXBwZW5kU2lkZWJhclByb2plY3RCdG5Ub0RPTSgpO1xuICB9IGVsc2Uge1xuICAgIC8vU3RvcmUgdmFsdWVzIGZyb20gdGFzayBmb3JtIGFuZCBjcmVhdGUvYXBwZW5kIHRhc2sgY2FyZFxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOYW1lJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCAwKTtcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGNyZWF0ZVRhc2tDYXJkKHRhc2spO1xuICAgIC8vY29uc3QgdGFza0NhcmQgPSB0YXNrLmNyZWF0ZVRhc2tDYXJkKCk7XG4gICAgXG4gICAgLy9maXggdGhpcyB0byBiZSBhcHBlbmR0YXNrY2FyZHRvY29udGFpbmVyYW5kRG9tXG4gICAgYXBwZW5kVGFza0NhcmRUb0RPTSh0YXNrQ2FyZCwgY29udGFpbmVyKTtcbiAgfVxuICBjbG9zZU1vZGFsKCk7XG59XG5cbi8vIEFwcGVuZCB0YXNrIGNhcmQgZWxlbWVudCB0byB0aGUgRE9NXG5mdW5jdGlvbiBhcHBlbmRUYXNrQ2FyZFRvRE9NKHRhc2tDYXJkLCBjb250YWluZXIpIHtcbiAgaWYgKCFjb250YWluZXIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdDb250YWluZXIgaXMgdW5kZWZpbmVkIG9yIG51bGwuJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGFkZFRhc2tDYXJkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1jYXJkJyk7XG4gIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGFza0NhcmQsIGFkZFRhc2tDYXJkKVxuICAvL3Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xufVxuXG4vLyBDcmVhdGUgYSB0YXNrIGNhcmQgZWxlbWVudFxuZnVuY3Rpb24gY3JlYXRlVGFza0NhcmQodGFzaykge1xuICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrQ2FyZC5jbGFzc05hbWUgPSAndGFzay1jYXJkJztcblxuICB0YXNrQ2FyZC5pbm5lckhUTUwgPSBgXG4gICAgPGgzIGlkPVwidGFzay1jYXJkLW5hbWVcIj4ke3Rhc2sudGFza05hbWV9PC9oMz5cbiAgICA8cCBpZD1cInRhc2stY2FyZC1kdWUtZGF0ZVwiPiR7dGFzay5kdWVEYXRlfTwvcD5cbiAgICA8cCBpZD1cInRhc2stY2FyZC1kZXNjcmlwdGlvblwiPiR7dGFzay5kZXNjcmlwdGlvbn08L3A+XG4gICAgPGRpdiBjbGFzcz1cImNoZWNrYm94LWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNieFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjYngtMTJcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImNieC0xMlwiPjwvbGFiZWw+XG4gICAgICAgIDxzdmcgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDE1IDE0XCIgaGVpZ2h0PVwiMTRcIiB3aWR0aD1cIjE1XCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0yIDguMzYzNjRMNi4yMzA3NyAxMkwxMyAyXCI+PC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8ZGVmcz5cbiAgICAgICAgICA8ZmlsdGVyIGlkPVwiZ29vLTEyXCI+XG4gICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHJlc3VsdD1cImJsdXJcIiBzdGREZXZpYXRpb249XCI0XCIgaW49XCJTb3VyY2VHcmFwaGljXCI+PC9mZUdhdXNzaWFuQmx1cj5cbiAgICAgICAgICA8ZmVDb2xvck1hdHJpeCByZXN1bHQ9XCJnb28tMTJcIiB2YWx1ZXM9XCIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAyMiAtN1wiIG1vZGU9XCJtYXRyaXhcIiBpbj1cImJsdXJcIj48L2ZlQ29sb3JNYXRyaXg+XG4gICAgICAgICAgPGZlQmxlbmQgaW4yPVwiZ29vLTEyXCIgaW49XCJTb3VyY2VHcmFwaGljXCI+PC9mZUJsZW5kPlxuICAgICAgICAgIDwvZmlsdGVyPlxuICAgICAgICA8L2RlZnM+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlci1jb250YWluZXJcIj5cbiAgICAgIDxociBjbGFzcz1cImRpdmlkZXJcIj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICByZXR1cm4gdGFza0NhcmQ7XG59XG5cbi8vIENyZWF0ZSBcImFkZCB0YXNrXCIgY2FyZFxuZnVuY3Rpb24gY3JlYXRlQWRkVGFza0NhcmQoKSB7XG4gIGNvbnN0IGFkZFRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZFRhc2tDYXJkLmNsYXNzTmFtZSA9ICdhZGQtdGFzay1jYXJkJztcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRUYXNrQnRuLmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XG4gIGFkZFRhc2tDYXJkLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG4gIHJldHVybiBhZGRUYXNrQ2FyZDtcbn1cblxuLy8gQXBwZW5kIFwiYWRkIHRhc2tcIiBjYXJkIHRvIHRoZSBET01cbmZ1bmN0aW9uIGFwcGVuZEFkZFRhc2tDYXJkKGFkZFRhc2tDYXJkKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jYXJkLWNvbnRhaW5lcicpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tDYXJkKTtcbn1cblxuLy8gQXBwZW5kIHByb2plY3QgY2FyZCBlbGVtZW50IHRvIHRoZSBET01cbmZ1bmN0aW9uIGFwcGVuZFByb2plY3RDYXJkVG9ET00ocHJvamVjdENhcmQpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbn1cblxuLy8gQ2xvc2VzIG1vZGFsXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbi8vIExvYWQgcHJvamVjdCBmb3JtIGluIG1vZGFsXG5mdW5jdGlvbiBsb2FkUHJvamVjdEZvcm0oKSB7XG4gIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBQcm9qZWN0XCI7XG4gIHRhc2tGb3JtLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdE5hbWVcIiBuYW1lPVwicHJvamVjdE5hbWVcIiByZXF1aXJlZD1cIlwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwidXNlci1sYWJlbFwiIGZvcj1cInByb2plY3ROYW1lXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJtb2RhbC1mb290ZXItYnV0dG9uXCIgaWQ9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1vZGFsLWZvb3Rlci1idXR0b25cIiBpZD1cImNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlVGFza0Zvcm1TdWJtaXQpO1xufVxuXG4vLyBMb2FkIHRhc2sgZm9ybSBpbiBtb2RhbFxuZnVuY3Rpb24gbG9hZFRhc2tGb3JtKGNvbnRhaW5lcikge1xuICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiO1xuICB0YXNrRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInRhc2tOYW1lXCIgbmFtZT1cInRhc2tOYW1lXCIgcmVxdWlyZWQ9XCJcIiBhdXRvY29tcGxldGU9XCJvZmZcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cInVzZXItbGFiZWxcIiBmb3I9XCJ0YXNrTmFtZVwiPlRhc2sgTmFtZTwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cImR1ZURhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiIHJlcXVpcmVkPVwiXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJ1c2VyLWxhYmVsXCIgZm9yPVwiZHVlRGF0ZVwiPkR1ZSBEYXRlPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiByZXF1aXJlZD1cIlwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwidXNlci1sYWJlbFwiIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cIm1vZGFsLWZvb3Rlci1idXR0b25cIiBpZD1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibW9kYWwtZm9vdGVyLWJ1dHRvblwiIGlkPVwiY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiAgYDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4gaGFuZGxlVGFza0Zvcm1TdWJtaXQoZXZlbnQsIGNvbnRhaW5lcikpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgLy90YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IGhhbmRsZVRhc2tGb3JtU3VibWl0KGV2ZW50LCBjb250YWluZXIpKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEV2ZW50IExpc3RlbmVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gV2hlbiBcImFkZCB0YXNrXCIgYnV0dG9uIGluIHNpZGViYXIgaXMgY2xpY2tlZFxuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAvLyBPcGVuIG1vZGFsXG5cbiAgLy9FbnN1cmUgcHJvamVjdCBzbGlkZXIgaXMgdmlzaWJsZVxuICBjb25zdCBwcm9qZWN0U2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Qtc2xpZGVyLWNvbnRhaW5lcicpXG4gIGlmIChwcm9qZWN0U2xpZGVyQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgcHJvamVjdFNsaWRlckNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICB9XG59KTtcblxuLy8gV2hlbiBcImFkZCB0YXNrXCIgYnV0dG9uIGluIHRhc2svcHJvamVjdCBjYXJkcyBhcmUgY2xpY2tlZFxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gT3BlbiBtb2RhbCBhbmQgbG9hZCB0YXNrIGZvcm1cbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgbG9hZFRhc2tGb3JtKCk7XG4gIFxuICAvL0hpZGUgcHJvamVjdCBzbGlkZXIgYW5kIHVuY2hlY2sgdG9nZ2xlIGZvcm0gY2hlY2tib3hcbiAgY29uc3QgcHJvamVjdFNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXNsaWRlci1jb250YWluZXInKVxuICBwcm9qZWN0U2xpZGVyQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgdG9nZ2xlRm9ybUNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbn0pO1xuXG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiA8c3Bhbj4gKHgpIHRvIGNsb3NlIG1vZGFsXG5zcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjbG9zZU1vZGFsKCk7XG59KTtcblxuLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWxcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59KTtcblxuLy8gRXZlbnQgbGlzdGVuZGVyIGZvciBmb3JtIHN1Ym1pdFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVRhc2tGb3JtU3VibWl0KTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgZm9yIGZvcm0gY2FuY2VsXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcblxuLy8gQ2hhbmdlIGJldHdlZW4gcHJvamVjdCBvciB0YXNrIGZvcm0gaW4gbW9kYWwgZm9ybSBjaGVja2JveFxudG9nZ2xlRm9ybUNoZWNrYm94Lm9uY2hhbmdlID0gKCkgPT4ge1xuICB0b2dnbGVGb3JtQ2hlY2tib3guY2hlY2tlZCA/IGxvYWRQcm9qZWN0Rm9ybSgpIDogbG9hZFRhc2tGb3JtKCk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBJbml0aWFsaXphdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gTG9hZCBpbnRvIEhUTUwgd2hlbiBET00gbG9hZHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vTG9hZCBwbHVzIGljb24gZm9yIFwiYWRkIHRhc2tcIiBidXR0b24gaW4gc2lkZWJhclxuICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsdXMtaWNvbicpO1xuICBpbWdFbGVtZW50LnNyYyA9IHBsdXNJY29uO1xuXG4gIC8vTG9hZCBhZGQgaWNvbiBmb3IgXCJhZGQgdGFza1wiIGJ1dHRvbnMgaW4gdGFzayBjYXJkc1xuICBjb25zdCBhZGRJY29uID0gY3JlYXRlQWRkSWNvbih7IHdpZHRoOiAnMjRweCcsIGhlaWdodDogJzI0cHgnLCBjb2xvcjogJyMyMTk2ZjMnLCBzdHJva2VXaWR0aDogMS41IH0pO1xuICBjb25zdCBpbml0aWFsQWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idXR0b24nKTsgLy9UZXN0IGFkZFxuICBhZGRUYXNrQnRuLmluc2VydEJlZm9yZShhZGRJY29uLCBhZGRUYXNrQnRuLmZpcnN0Q2hpbGQpO1xufSk7IiwiaW1wb3J0IHsgY3JlYXRlQWRkSWNvbiB9IGZyb20gJy4vc3ZnVXRpbHMuanMnO1xuaW1wb3J0IHNpZGViYXJQcm9qZWN0QnV0dG9uSWNvbiBmcm9tICcuL3N2Z1V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnNpZGViYXJQcm9qZWN0QnRuID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gbmFtZSBvZiBwcm9qZWN0XG4gICAgZ2V0IHJldHVybk5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHByb2plY3QgY2FyZCB0aGF0IGNvbnRhaW5zIGhlYWRlciBhbmQgdGFzayBjYXJkIGNvbnRhaW5lclxuICAgIGNyZWF0ZVByb2plY3RDYXJkKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc05hbWUgPSAncHJvamVjdC1jYXJkJztcbiAgICAgIFxuICAgICAgICBwcm9qZWN0Q2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgPGRpdiBpZD1cInByb2plY3QtY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMj4ke3RoaXMubmFtZX08L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJ0YXNrLWNhcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8IS0tVGFzayBjYXJkcyBpbnNlcnRlZCBoZXJlLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXRhc2stY2FyZFwiIGlkPVwiYWRkLXRhc2stY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGQtdGFzay1idXR0b25cIj5BZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RDYXJkOyAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gQXBwZW5kIHByb2plY3QgY2FyZCBlbGVtZW50IHRvIHRoZSBET01cbiAgICBhcHBlbmRQcm9qZWN0Q2FyZFRvRE9NKG1vZGFsLCBsb2FkVGFza0Zvcm0pIHtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IHRoaXMuY3JlYXRlUHJvamVjdENhcmQoKTtcblxuICAgICAgICAvLyBBZGQgdGhlIHByb2plY3QgY2FyZCB0byB0aGUgRE9NXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuXG4gICAgICAgIC8vIEFkZCBcImFkZCB0YXNrXCIgYnV0dG9uIChxdWVyeVNlbGVjdG9yIGlzIHVzZWQgYmVjYXVzZSBpdCB0YWtlcyBzY29wZSBpbnRvIGFjYylcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IHByb2plY3RDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1idXR0b24nKTtcbiAgICAgICAgY29uc3QgYWRkSWNvbiA9IGNyZWF0ZUFkZEljb24oeyB3aWR0aDogJzI0cHgnLCBoZWlnaHQ6ICcyNHB4JywgY29sb3I6ICcjMjE5NmYzJywgc3Ryb2tlV2lkdGg6IDEuNSB9KTtcbiAgICAgICAgYWRkVGFza0J0bi5pbnNlcnRCZWZvcmUoYWRkSWNvbiwgYWRkVGFza0J0bi5maXJzdENoaWxkKTtcblxuICAgICAgICAvLyAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gXCJhZGQgdGFza1wiIGJ1dHRvblxuICAgICAgICAvLyBwcm9qZWN0Q2FyZC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAvLyAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IHByb2plY3RDYXJkLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNhcmQtY29udGFpbmVyJyk7XG4gICAgICAgIC8vICAgICBsb2FkVGFza0Zvcm0odGFza0NvbnRhaW5lcik7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gXCJhZGQgdGFza1wiIGJ1dHRvblxuICAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gcHJvamVjdENhcmQucXVlcnlTZWxlY3RvcignI3Rhc2stY2FyZC1jb250YWluZXInKTtcbiAgICAgICAgICAgIGlmICghdGFza0NvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Rhc2sgY29udGFpbmVyIGlzIHVuZGVmaW5lZCBpbiBhcHBlbmRQcm9qZWN0Q2FyZFRvRE9NJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZFRhc2tGb3JtKHRhc2tDb250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgc2lkZWJhciBwcm9qZWN0IGJ1dHRvblxuICAgIGNyZWF0ZVNpZGViYXJQcm9qZWN0QnRuKCkge1xuICAgICAgICAvLyBDcmVhdGUgc2lkZWJhciBidXR0b25cbiAgICAgICAgdGhpcy5zaWRlYmFyUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0aGlzLnNpZGViYXJQcm9qZWN0QnRuLmNsYXNzTmFtZSA9IFwic2lkZWJhci1wcm9qZWN0LWJ1dHRvblwiO1xuICAgICAgICAvLyBBZGQgcHJvamVjdCBpY29uIHRvIGJ1dHRvblxuICAgICAgICBjb25zdCBwcm9qZWN0SWNvbiA9IG5ldyBzaWRlYmFyUHJvamVjdEJ1dHRvbkljb24oXCIyNHB4XCIsIFwiMjRweFwiLCBcIiMyMTk2ZjNcIik7XG4gICAgICAgIHRoaXMuc2lkZWJhclByb2plY3RCdG4uYXBwZW5kQ2hpbGQocHJvamVjdEljb24uZ2V0U1ZHKCkpO1xuICAgICAgICAvLyBBZGQgcHJvamVjdCBuYW1lIHRvIGJ1dHRvblxuICAgICAgICB0aGlzLnNpZGViYXJQcm9qZWN0QnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubmFtZSkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNpZGViYXJQcm9qZWN0QnRuO1xuICAgIH1cblxuICAgIC8vIEFwcGVuZCBzaWRlYmFyIHByb2plY3QgYnV0dG9uIHRvIHRoZSBET00ncyBzaWRlYmFyLXByb2plY3QtY29udGFpbmVyXG4gICAgYXBwZW5kU2lkZWJhclByb2plY3RCdG5Ub0RPTSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXItcHJvamVjdC1jb250YWluZXInKS5hcHBlbmRDaGlsZCh0aGlzLnNpZGViYXJQcm9qZWN0QnRuKTtcbiAgICB9XG59IiwiLy8gQ3JlYXRlIFNWRyBpY29uIGZvciBwcm9qZWN0cyBpbiBzaWRlYmFyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzaWRlYmFyUHJvamVjdEJ1dHRvbkljb24ge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGNvbG9yKSB7XG4gICAgICAgIHRoaXMuc3ZnTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gICAgICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHRoaXMuc3ZnTlMsIFwic3ZnXCIpO1xuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCk7XG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxLjVcIik7XG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBjb2xvcik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHBhdGhzXG4gICAgICAgIHRoaXMuY3JlYXRlUGF0aHMoY29sb3IpO1xuICAgIH1cblxuICAgIGNyZWF0ZVBhdGhzKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuYWRkUGF0aChcIk0yMCA0VjIwQzIwIDIxLjEwNDYgMTkuMTA0NiAyMiAxOCAyMkg2QzQuODk1NDMgMjIgNCAyMS4xMDQ2IDQgMjBWNEM0IDIuODk1NDMgNC44OTU0MyAyIDYgMkgxOEMxOS4xMDQ2IDIgMjAgMi44OTU0MyAyMCA0WlwiLCBjb2xvcik7XG4gICAgICAgIHRoaXMuYWRkUGF0aChcIk0yMCA1TDE0IDEwXCIsIGNvbG9yKTtcbiAgICAgICAgdGhpcy5hZGRQYXRoKFwiTTIwIDlMMTIuNSAxNVwiLCBjb2xvcik7XG4gICAgfVxuXG4gICAgYWRkUGF0aChkLCBzdHJva2VDb2xvcikge1xuICAgICAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHRoaXMuc3ZnTlMsIFwicGF0aFwiKTtcbiAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIGQpO1xuICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBzdHJva2VDb2xvcik7XG4gICAgICAgIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMS41XCIpO1xuICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gICAgICAgIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVqb2luXCIsIFwicm91bmRcIik7XG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgIH1cblxuICAgIGdldFNWRygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ZnO1xuICAgIH1cbn1cblxuLy8gQ3JlYXRlIHBsdXMgaWNvbiBmb3IgXCJhZGQgdGFza1wiIGJ1dHRvbiBpbiBhZGQgdGFzayBjYXJkXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkSWNvbih7IHdpZHRoID0gJzI0cHgnLCBoZWlnaHQgPSAnMjRweCcsIGNvbG9yID0gJyMwMDAwMDAnLCBzdHJva2VXaWR0aCA9IDEuNSB9ID0ge30pIHtcbiAgICBjb25zdCBzdmdOYW1lc3BhY2UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsICdzdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIHN0cm9rZVdpZHRoKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgc3ZnTmFtZXNwYWNlKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdjb2xvcicsIGNvbG9yKTtcblxuICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCAncGF0aCcpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgJ002IDEySDEyTTE4IDEySDEyTTEyIDEyVjZNMTIgMTJWMTgnKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgY29sb3IpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCBzdHJva2VXaWR0aCk7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xuXG4gICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgIHJldHVybiBzdmc7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRhc2tOYW1lID0gdGFza05hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnRhc2tDYXJkID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGFza05hbWVcbiAgICBnZXQgcmV0dXJuVGFza05hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tOYW1lO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBkZXNjcmlwdGlvblxuICAgIGdldCByZXR1cm5EZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGR1ZSBkYXRlXG4gICAgZ2V0IHJldHVybkR1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHByaW9yaXR5XG4gICAgZ2V0IHJldHVyblByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdGFzayBjYXJkXG4gICAgY3JlYXRlVGFza0NhcmQoKSB7XG4gICAgICAgIHRoaXMudGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy50YXNrQ2FyZC5jbGFzc05hbWUgPSAndGFzay1jYXJkJztcblxuICAgICAgICB0YXNrQ2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMyBpZD1cInRhc2stY2FyZC1uYW1lXCI+JHt0aGlzLnRhc2tOYW1lfTwvaDM+XG4gICAgICAgIDxwIGlkPVwidGFzay1jYXJkLWR1ZS1kYXRlXCI+JHt0aGlzLmR1ZURhdGV9PC9wPlxuICAgICAgICA8cCBpZD1cInRhc2stY2FyZC1kZXNjcmlwdGlvblwiPiR7dGhpcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2J4XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjYngtMTJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjYngtMTJcIj48L2xhYmVsPlxuICAgICAgICAgICAgPHN2ZyBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMTUgMTRcIiBoZWlnaHQ9XCIxNFwiIHdpZHRoPVwiMTVcIj5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0yIDguMzYzNjRMNi4yMzA3NyAxMkwxMyAyXCI+PC9wYXRoPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJnb28tMTJcIj5cbiAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHJlc3VsdD1cImJsdXJcIiBzdGREZXZpYXRpb249XCI0XCIgaW49XCJTb3VyY2VHcmFwaGljXCI+PC9mZUdhdXNzaWFuQmx1cj5cbiAgICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggcmVzdWx0PVwiZ29vLTEyXCIgdmFsdWVzPVwiMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMjIgLTdcIiBtb2RlPVwibWF0cml4XCIgaW49XCJibHVyXCI+PC9mZUNvbG9yTWF0cml4PlxuICAgICAgICAgICAgICA8ZmVCbGVuZCBpbjI9XCJnb28tMTJcIiBpbj1cIlNvdXJjZUdyYXBoaWNcIj48L2ZlQmxlbmQ+XG4gICAgICAgICAgICAgIDwvZmlsdGVyPlxuICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGhyIGNsYXNzPVwiZGl2aWRlclwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgXG4gICAgICByZXR1cm4gdGhpcy50YXNrQ2FyZDtcbiAgICB9XG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=