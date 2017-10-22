import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StaffHeader from './details/StaffHeader.js';
import StaffItemPanel from './details/StaffItemPanel.js';
import StaffFooter from './details/StaffFooter.js';
import StaffDetail from './details/StaffDetail.js';
import Staff from './details/STAFF.js';

class App extends Component {
  constructor(){
	    super();
		this.state = {
		    staff : new Staff(),
			staffDetail: null
		};
	}
  //增
	addStaffItem(item){
	    this.setState({
		    staff: this.state.staff.addStaffItem(item)
		});
	}
	//删
	removeStaffItem(key){
	    this.setState({
		    staff: this.state.staff.removeStaffItem(key)
		});
	}

  /*
	 *详情
	 */
	//打开
	detailStaffItem(key){
	    this.setState({
		    staffDetail: this.state.staff.staff.filter(item => {
			    return item.key==key;
			})[0]
		});
	}
	//关闭
	closeDetail(){
	    this.setState({
		    staffDetail: null
		});
	}
	//编辑
	editDetail(item){
	    this.setState({
		    staff : this.state.staff.editStaffItem(item)
		});
	}

  /*
  	 * 排序
  	 */
  	sortStaff(sortType) {
  	    this.setState({
  		    staff: this.state.staff.sortStaff(sortType)
  		});
  	}

  	/*
  	 * 筛选
  	 */
  	filtStaff(filtType) {
  	    this.setState({
  		    staff: this.state.staff.filtStaff(filtType)
  		});
  	}

  	/*
  	 * 搜索
  	 */
  	searchStaff(word) {
  	    this.setState({
  		    staff: this.state.staff.searchStaff(word)
  		});
  	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h1 className="App-title">人员信息管理demo</h1>
        </p>
        <div className="content">
          <StaffHeader sortStaff={this.sortStaff.bind(this)} filtStaff={this.filtStaff.bind(this)} searchStaff={this.searchStaff.bind(this)}/>
		      <StaffItemPanel items={this.state.staff.staff} removeStaffItem={this.removeStaffItem.bind(this)} detailStaffItem={this.detailStaffItem.bind(this)}/>
		      <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>
		      <StaffDetail staffDetail={this.state.staffDetail} closeDetail={this.closeDetail.bind(this)} editDetail={this.editDetail.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
