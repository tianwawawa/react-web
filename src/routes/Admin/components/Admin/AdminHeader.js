import React,{ Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton} from 'react-bootstrap'
import app from '../../assets/styles/app.scss'

export default class AdminHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.goToAdminHome = this.goToAdminHome.bind(this)
    this.goToProductGather = this.goToProductGather.bind(this)
    this.goToProductRepository = this.goToProductRepository.bind(this)
    this.goToProductListing = this.goToProductListing.bind(this)
    this.goToProductManagement = this.goToProductManagement.bind(this)
    this.goToShopAuthorization = this.goToShopAuthorization.bind(this)
    this.exitSystem = this.exitSystem.bind(this)
  }

  static propTypes = {
    router: React.PropTypes.object
  }

  goToAdminHome () {

  }

  goToProductGather () {

  }

  goToProductRepository () {

  }

  goToProductListing () {

  }

  goToProductManagement () {

  }

  goToShopAuthorization () {

  }

  exitSystem () {

  }

  goToAdminHome() {

  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        {this.renderNavBarHeader()}
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={7} title='账号' id='basic-nav-dropdown' className={app.nav}>
              <MenuItem eventKey={7.1} className={app.navTwo}>账号信息</MenuItem>
              <MenuItem eventKey={7.2} className={app.navTwo}>团队查询</MenuItem>
              <MenuItem eventKey={7.3} className={app.navTwo}>业绩查询</MenuItem>
              <MenuItem eventKey={7.4} className={app.navTwo}>奖励查询</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={7} title='财务' id='basic-nav-dropdown' className={app.nav}>
              <MenuItem eventKey={7.1} className={app.navTwo}>充值订单</MenuItem>
              <MenuItem eventKey={7.2} className={app.navTwo}>处理提现</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={7} title='运营功能' id='basic-nav-dropdown' className={app.nav}>
            <MenuItem eventKey={7.1} className={app.navTwo}>游戏信息</MenuItem>
            <MenuItem eventKey={7.2} className={app.navTwo}>道具变动</MenuItem>
            <MenuItem eventKey={7.3} className={app.navTwo}>购买记录</MenuItem>
            <MenuItem eventKey={7.4} className={app.navTwo}>属性变动</MenuItem>
            <MenuItem eventKey={7.5} className={app.navTwo}>砖石变动</MenuItem>
            <MenuItem eventKey={7.4} className={app.navTwo}>道具发放</MenuItem>
            <MenuItem eventKey={7.5} className={app.navTwo}>公告</MenuItem>
          </NavDropdown>

            <NavDropdown eventKey={7} title='数据' id='basic-nav-dropdown' className={app.nav}>
              <MenuItem eventKey={7.1} className={app.navTwo}>在线</MenuItem>
              <MenuItem eventKey={7.2} className={app.navTwo}>注册</MenuItem>
              <MenuItem eventKey={7.3} className={app.navTwo}>登录</MenuItem>
              <MenuItem eventKey={7.4} className={app.navTwo}>宠物等级分布</MenuItem>
              <MenuItem eventKey={7.5} className={app.navTwo}>留存</MenuItem>
              <MenuItem eventKey={7.4} className={app.navTwo}>渠道数据</MenuItem>
              <MenuItem eventKey={7.5} className={app.navTwo}>权限管理</MenuItem>
            </NavDropdown>
          </Nav>

          <Nav  className={app.dropDown}>
            <DropdownButton id="button-drop-down" title={'渠道:渠道1234567'} className='btn btn-default btn-sm dropdown-toggle'>
              <MenuItem eventKey={0}>渠道:  1</MenuItem>
              <MenuItem eventKey={1}>渠道:  2</MenuItem>
              <MenuItem eventKey={2}>渠道:  3</MenuItem>
            </DropdownButton>
          </Nav>
          <Nav  className={app.dropDown}>
            <DropdownButton id="button-drop-down" title={'服务器: 服务器1234567'}  className='btn btn-default btn-sm dropdown-toggle' >
              <MenuItem eventKey={0}>服务器 1</MenuItem>
              <MenuItem eventKey={1}>服务器 2</MenuItem>
              <MenuItem eventKey={2}>服务器 3</MenuItem>
            </DropdownButton>
          </Nav>
          <Nav pullRight className={app.headernav}>
            <NavItem eventKey={1} onClick={this.exitSystem}>退出系统</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }

  renderNavBarHeader() {
    return (
      <Navbar.Header>
        <Navbar.Brand>
          <a onClick={this.goToAdminHome}>管理后台</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    )

  }
}
