"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AppContext_1 = require("../../../context/AppContext");
const PageSlider_module_scss_1 = __importDefault(require("../../../styles/PageSlider.module.scss"));
function PageSlider({}) {
    const { state: { pageNumber }, dispatch } = (0, AppContext_1.useAppContext)();
    return (<div className={PageSlider_module_scss_1.default.container}>
            <span onClick={() => pageNumber > 1 && dispatch({ type: "sub_number" })}/>
            <span onClick={() => dispatch({ type: "add_number" })}/>
        </div>);
}
exports.default = PageSlider;
