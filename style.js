function createNav(obj = {}) {
    const _obj = { ...obj };

    let _state = {
      isOpen: false,
      mode:'overlay'
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
    };

    function setState(newState) {
      _state = { ..._state, ...newState };
      loadData(); // mỗi lần state thay đổi thì render lại
    }

    function loadData() {
      renderSidebar();
    }

    function handleEventListener() {
      _ui.menu?.addEventListener("click", handleClickMenu);
      _ui.groupMultiLang?.addEventListener("click", ()=>{
          _ui.multiBox.classList.toggle("d-none")
          _ui.listSetting.classList.add("d-none")
      });
      _ui.setting?.addEventListener("click", ()=>{
        _ui.multiBox.classList.add("d-none")
          _ui.listSetting.classList.toggle("d-none")
      });
      document.addEventListener("pointerdown", (e) => {
        if (
          !_ui.multiBox?.contains(e.target) &&
          !_ui.listSetting?.contains(e.target) &&
          !_ui.groupMultiLang?.contains(e.target) &&
          !_ui.setting?.contains(e.target)
        ) {
          _ui.multiBox?.classList.add("d-none");
          _ui.listSetting?.classList.add("d-none");
        }
      });
     
    }

    function init() {
      handleEventListener();
      loadData()
    }

    function renderSidebar() {
      if (!_state.isOpen) {
          _ui.navBar?.classList.remove("action-collapse","action-overlay");
          _ui.sideBar?.classList.remove("action-collapse","action-overlay");
          _ui.hiddenText.forEach(item=>{
           item.classList.remove("active");
        }) 
        _ui.iconLink.forEach(item=>{
              item.classList.remove("justify-content-center");
              item.classList.add("ps-2");
          })
      } else {
        if(_state.mode==="overlay")
        {
          _ui.navBar?.classList.add("action-overlay");
          _ui.sideBar?.classList.add("action-overlay");
          _ui.sideBar?.classList.remove("action-collapse");
          _ui.navBar?.classList.remove("action-collapse");
        }
        else if(_state.mode==="collapse")
        {
          _ui.hiddenText.forEach(item=>{
           item.classList.add("active");
          })   
          _ui.iconLink.forEach(item=>{
              item.classList.add("justify-content-center");
              item.classList.remove("ps-2");
          })
          _ui.navBar?.classList.add("action-collapse");
          _ui.sideBar?.classList.add("action-collapse");
          _ui.navBar?.classList.remove("action-overlay");
          _ui.sideBar?.classList.remove("action-overlay");
        }
      }
    }

    function handleClickMenu() {
      setState({ isOpen: !_state.isOpen });
    }

    function setMode(mode) {
      setState({mode})
    }

    return { init, setMode,ui:_ui};
}

export default createNav;
