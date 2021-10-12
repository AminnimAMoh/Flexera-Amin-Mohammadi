"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manageData = void 0;
function manageData(res) {
    res.items.map((item, index) => {
        var _a;
        const simplifiedItem = {
            full_name: item.full_name,
            avatar_url: (_a = item.owner) === null || _a === void 0 ? void 0 : _a.avatar_url,
            description: item.description,
            index: index,
        };
        return simplifiedItem;
    });
}
exports.manageData = manageData;
;
