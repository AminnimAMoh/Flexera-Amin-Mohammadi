"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manageData = void 0;
function manageData(res) {
    return res.items;
    // res.items.map((item: any, index: number) => {
    //   const simplifiedItem = {
    //     full_name: item.full_name,
    //     avatar_url: item.owner?.avatar_url,
    //     description: item.description,
    //     index: index,
    //   };
    //   return simplifiedItem;
    // });
}
exports.manageData = manageData;
;
