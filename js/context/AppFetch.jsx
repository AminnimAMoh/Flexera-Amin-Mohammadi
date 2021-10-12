"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = exports.defaultEndPoint = void 0;
exports.defaultEndPoint = "https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=10&";
function request(pageNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const responce = yield fetch(exports.defaultEndPoint + `per_page=10&page=${pageNumber}`);
            const data = yield responce.json();
            return data;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.request = request;
