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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = void 0;
const head_1 = __importDefault(require("next/head"));
const react_1 = require("react");
const Home_module_scss_1 = __importDefault(require("../styles/Home.module.scss"));
const AppContext_1 = require("../context/AppContext");
const AppFetch_1 = require("../context/AppFetch");
const PageSlider_1 = __importDefault(require("./Shared-Components/PageSlider"));
const getStaticProps = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hello Static");
    try {
        const responce = yield fetch(AppFetch_1.defaultEndPoint + "per_page=10&page=1");
        const data = yield responce.json();
        return { props: Object.assign({}, data) };
    }
    catch (err) {
        console.log(err);
    }
});
exports.getStaticProps = getStaticProps;
function Home(_a) {
    var props = __rest(_a, []);
    const { state: { pageNumber }, dispatch } = (0, AppContext_1.useAppContext)();
    const [currentPage, setCurrentPage] = (0, react_1.useState)(pageNumber);
    const [listData, setListData] = (0, react_1.useState)(props);
    (0, react_1.useEffect)(() => {
        if (currentPage === pageNumber)
            return;
        setCurrentPage(pageNumber);
        (0, AppFetch_1.request)(pageNumber).then((res) => {
            // manageData(res)
            // setListData(responce)
        });
    }, [pageNumber]);
    console.log(listData);
    // useEffect(() => {
    //   const items = listData.items?.map((item, index) => {
    //     const simplifiedItem= {
    //       full_name: item.full_name,
    //       avatar_url: item.owner?.avatar_url,
    //       description: item.description,
    //       index: index
    //     };
    //     return simplifiedItem;
    //   });
    //   // dispatch({type: "request_reserve", value:{items}})
    // }, [items])
    return (<div className={Home_module_scss_1.default.container}>
      <head_1.default>
        <title>Flexera-Technical Assessment</title>
        <meta name="description" content="UI Candidate Technical Test"/>
        <link rel="icon" href="/favicon.ico"/>
      </head_1.default>

      <main className={Home_module_scss_1.default.container_main}>
        <h3>browse github</h3>
        <PageSlider_1.default />
        {/* <UserList items={listData} /> */}
      </main>
    </div>);
}
exports.default = Home;
