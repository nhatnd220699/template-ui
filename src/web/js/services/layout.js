function Layout(obj = {}) {
  const _obj = { ...obj };

  let _state = {
    isOpen: true,
    mode: "overlay",
    darkmode: "light",
  };

  const _ui = {
    get menu() {
      return document.querySelector(_obj.menu);
    },
    get navBar() {
      return document.querySelector(_obj.navBar);
    },
    get sideBar() {
      return document.querySelector(_obj.sideBar);
    },
    get hiddenText() {
      return document.querySelectorAll(_obj.hiddenText);
    },
    get listSetting() {
      return document.querySelector(_obj.listSetting);
    },
    get multiBox() {
      return document.querySelector(_obj.multiBox);
    },
    get groupMultiLang() {
      return document.querySelector(_obj.groupMultiLang);
    },
    get setting() {
      return document.querySelector(_obj.setting);
    },
    get iconLink() {
      return document.querySelectorAll(_obj.iconLink);
    },
    get link() {
      return document.querySelectorAll(_obj.link);
    },
    get darkModeSwitch() {
      return document.querySelector(_obj.darkModeSwitch);
    },
    get main() {
      return document.querySelector(_obj.main);
    },
  };

  function setState(newState) {
    _state = { ..._state, ...newState };
    loadData(); // mỗi lần state thay đổi thì render lại
  }

  function loadData() {
    renderSidebar();
    renderDarkMode();
  }

  function handleEventListener() {
    _ui.menu?.addEventListener("click", handleClickMenu);
    _ui.groupMultiLang?.addEventListener("click", () => {
      _ui.multiBox.classList.toggle("d-none");
    });
    _ui.setting?.addEventListener("click", () => {
      _ui.multiBox.classList.add("d-none");
    });
    document.addEventListener("pointerdown", (e) => {
      if (!_ui.multiBox?.contains(e.target) && !_ui.groupMultiLang?.contains(e.target)) {
        _ui.multiBox?.classList.add("d-none");
      }
    });

    _ui.darkModeSwitch?.addEventListener("change", handleDarkMode);
    handleClickLink();
    expandActiveMenu();
  }

  function init() {
    const stored = localStorage.getItem("isOpen");

    if (stored !== null) _state.isOpen = JSON.parse(stored);

    const storedTheme = localStorage.getItem("dark-mode");
    if (storedTheme !== null) {
      _state.darkmode = JSON.parse(storedTheme);
    } else {
      _state.darkmode = "light"; // mặc định là sáng
    }

    handleEventListener();
    loadData();
  }

function renderSidebar() {
  const { main, navBar, sideBar, hiddenText, iconLink } = _ui;
  const { isOpen, mode } = _state;

  // reset trạng thái về mặc định trước
  main?.classList.remove("collapsed");
  navBar?.classList.remove("action-collapse", "action-overlay");
  sideBar?.classList.remove("action-collapse", "action-overlay");
  hiddenText.forEach(item => item.classList.remove("active"));
  iconLink.forEach(item => item.classList.remove("justify-content-center"));

  // nếu sidebar đang đóng thì thoát sớm
  if (isOpen) return;

  if (mode === "overlay") {
    navBar?.classList.add("action-overlay");
    sideBar?.classList.add("action-overlay");
  }

  if (mode === "collapse") {
    hiddenText.forEach(item => item.classList.add("active"));
    iconLink.forEach(item => item.classList.add("justify-content-center"));
    main?.classList.add("collapsed");
    navBar?.classList.add("action-collapse");
    sideBar?.classList.add("action-collapse");
  }
}


  function handleClickLink() {
    // _ui.link.forEach((item) => {
    //   item.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     _ui.link.forEach((link) => link.classList.remove("active"));
    //     item.classList.add("active");
    //   });
    // });
    const currentPath = "/123" || window.location.pathname;

    _ui.link.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  }
  function expandActiveMenu() {
    const activeLinks = document.querySelectorAll(".active");
    activeLinks.forEach((link) => {
      let parentCollapse = link.closest(".collapse");
      while (parentCollapse) {
        parentCollapse.classList.add("show");
        const toggleBtn = document.querySelector(`[data-bs-target="#${parentCollapse.id}"]`);
        if (toggleBtn) {
          toggleBtn.setAttribute("aria-expanded", "true");
        }
        parentCollapse = parentCollapse.parentElement.closest(".collapse");
      }
    });
  }
  function handleClickMenu() {
    const newIsOpen = !_state.isOpen;
    localStorage.setItem("isOpen", JSON.stringify(newIsOpen));
    setState({ isOpen: newIsOpen });
  }
  function renderDarkMode() {
    document.documentElement.setAttribute("data-bs-theme", _state.darkmode);
    if (_ui.darkModeSwitch) {
      _ui.darkModeSwitch.checked = _state.darkmode === "dark";
    }
  }
  function handleDarkMode() {
    const newDarkMode = _ui.darkModeSwitch.checked ? "dark" : "light";

    localStorage.setItem("dark-mode", JSON.stringify(newDarkMode));
    setState({ darkmode: newDarkMode });
  }

  function setMode(mode) {
    setState({ mode });
    localStorage.setItem("sidebar-mode",mode)
  }

  return { init, setMode };
}

export default Layout;
