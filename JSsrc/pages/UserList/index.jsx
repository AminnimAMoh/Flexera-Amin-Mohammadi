"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UserCards_1 = __importDefault(require("./UserCards"));
function UserList({ items }) {
    return (<div>
      {items &&
            items.map((item) => {
                return <UserCards_1.default key={item.full_name} {...item}/>;
            })}
    </div>);
}
exports.default = UserList;
