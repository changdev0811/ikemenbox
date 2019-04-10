import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";

class NavbarPage extends React.Component {


  constructor(props) {
      super(props);
      this.state = {isOpen: false};

      // This binding is necessary to make `this` work in the callback
      this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  //toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  toggleCollapse() {
    this.setState(state => ({
      isOpen: !this.state.isOpen
    }));
  }

  render() {

    let textcolor = "black-text" ;
    let menucolor = "white-text" ;

    return (

      <Navbar color="indigo" dark expand="md">
          <NavbarBrand>
            <strong className="white-text">IKEMENビル公式サイト</strong>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse
            id="navbarCollapse3"
            isOpen={this.state.isOpen}
            navbar
          >
            <NavbarNav left>
              <NavItem active>
                <NavLink to="/"><strong className={menucolor}>ホーム</strong></NavLink>
              </NavItem>
              <NavItem>
              <Dropdown>
                <DropdownToggle nav caret>
                  <div className="d-inline"><strong className={menucolor}>ポイントカード</strong></div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/point-barcode"><strong className={textcolor}>バーコード</strong></DropdownItem>
                  {/*<DropdownItem href="/point-coupon"><strong className={textcolor}>ポイントクーポン</strong></DropdownItem>*/}
                </DropdownMenu>
              </Dropdown>
              </NavItem>
              <NavItem>
              <Dropdown>
                <DropdownToggle nav caret>
                  <div className="d-inline"><strong className={menucolor}>IKEMENビル概要</strong></div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/building-opening"><strong className={textcolor}>営業時間</strong></DropdownItem>
                  <DropdownItem href="/building-access"><strong className={textcolor}>アクセスマップ</strong></DropdownItem>
                  <DropdownItem href="/building-sns"><strong className={textcolor}>公式SNS</strong></DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </NavItem>
              <NavItem>
              <Dropdown>
                <DropdownToggle nav caret>
                  <div className="d-inline"><strong className={menucolor}>イケメン図鑑</strong></div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/ikemen-idol"><strong className={textcolor}>アイドル</strong></DropdownItem>
                  {/*<DropdownItem href="/ikemen-musical"><strong className={textcolor}>2.5次元俳優</strong></DropdownItem>*/}
                  {/*<DropdownItem href="/ikemen-audition"><strong className={textcolor}>オーディション候補</strong></DropdownItem>*/}
                </DropdownMenu>
              </Dropdown>
              </NavItem>
              <NavItem>
              <Dropdown>
                <DropdownToggle nav caret>
                  <div className="d-inline"><strong className={menucolor}>ライブ</strong></div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/live-schedule"><strong className={textcolor}>出演スケジュール</strong></DropdownItem>
                  <DropdownItem href="/live-group"><strong className={textcolor}>出演グループ紹介</strong></DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </NavItem>
              {/*
              <NavItem>
              <Dropdown>
                <DropdownToggle nav caret>
                  <div className="d-inline"><strong className={menucolor}>イケメンカフェ</strong></div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/ikemen-cafe-reserve"><strong className={textcolor}>予約</strong></DropdownItem>
                  <DropdownItem href="/ikemen-cafe-menu"><strong className={textcolor}>メニュー</strong></DropdownItem>
                  <DropdownItem href="/ikemen-cafe-1daymanager"><strong className={textcolor}>1日店長</strong></DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </NavItem>
              <NavItem>
              <Dropdown>
                <DropdownToggle nav caret>
                  <div className="d-inline"><strong className={menucolor}>配信スタジオ</strong></div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/studio-schedule"><strong className={textcolor}>配信スケジュール</strong></DropdownItem>
                  <DropdownItem href="/studio-program"><strong className={textcolor}>番組一覧</strong></DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </NavItem>
              */}
              <NavItem>
              <Dropdown>
                <DropdownToggle nav caret>
                  <div className="d-inline"><strong className={menucolor}>イベントステージ</strong></div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/stage-schedule"><strong className={textcolor}>イベントスケジュール</strong></DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </NavItem>
              {/*
              <NavItem>
              <Dropdown>
                <DropdownToggle nav caret>
                  <div className="d-inline"><strong className={textcolor}>IPカフェ</strong></div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/ipcafe-reserve"><strong className={textcolor}>予約バナー</strong></DropdownItem>
                  <DropdownItem href="/ipcafe-concept"><strong className={textcolor}>コンセプト紹介</strong></DropdownItem>
                  <DropdownItem href="/ipcafe-menu"><strong className={textcolor}>メニュー紹介</strong></DropdownItem>
                  <DropdownItem href="/ipcafe-goods"><strong className={textcolor}>グッズ紹介</strong></DropdownItem>
                  <DropdownItem href="/ipcafe-sns"><strong className={textcolor}>公式SNS</strong></DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </NavItem>
              */}
            </NavbarNav>
          </Collapse>
      </Navbar>
    );
  }
}

export default NavbarPage;
