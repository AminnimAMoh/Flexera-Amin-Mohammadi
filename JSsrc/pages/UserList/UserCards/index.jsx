"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Cards_module_scss_1 = __importDefault(require("../../../styles/Cards.module.scss"));
const image_1 = __importDefault(require("next/image"));
function UserCards({ full_name, avatar_url, description, }) {
    const handleBoxClick = (e) => {
    };
    return (<ul className={Cards_module_scss_1.default.container}>
        <image_1.default src={avatar_url} alt="Image_Content" width="100%" height="100%"/>
      <li className={Cards_module_scss_1.default.container_infoCards}>
        <h4 className={Cards_module_scss_1.default.container_Typography__header}>{full_name}</h4>
        <p className={Cards_module_scss_1.default.container_Typography__discription}>
          {description}
        </p>
      </li>
      <li className={Cards_module_scss_1.default.container_box} onClick={(e) => handleBoxClick(e)}></li>
    </ul>);
}
exports.default = UserCards;
