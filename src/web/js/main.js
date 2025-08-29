import Utils from "./utils.js";
import Layout from "./services/layout.js";

const App = (() => {
    const _opts = {
        layout: {
            init: null,
            setMode: null,
        },
    };
    const _state = {};
    const _ui = {};

    function init (otps) {
        Utils.merge(_opts, otps);
        if(!_opts.layout) {
            throw new Error("Không tìm thấy trình khởi tạo bố cục layout, vui lòng cấu hình");
        }
        _opts.layout.init();
        _opts.layout.setMode("collapse")
    }

    return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
    App.init({
        layout: Layout({
            menu: "#btnMenu",
            navBar: "#navBar",
            sideBar: "#appAside",
            hiddenText: ".app_aside-hide",
            listSetting: "#listSetting",
            multiBox: "#multiBox",
            groupMultiLang: "#groupMultiLang",
            setting: "#setting",
            iconLink: ".app_aside-link--animation",
            link: ".app_aside-link--size",
            darkModeSwitch:"#darkModeSwitch",
            main:"#appMain"
        }),
    })
});