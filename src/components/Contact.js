import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faEdit,faTrash, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import PopUp from './PopUp';

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
          userList: [],
          popup:false,
          title:'',
          viewList: [],
          editList:[],
          search:null
        };
       }
       componentDidMount() {
        fetch("../data/data.json")
        .then(res=>res.json())
        .then(data=>{
            this.setState({userList:data})
        });
        
      }
      toggle = (val)=>{
          this.setState({
              popup:!this.state.popup,
              title:val
          })
          //console.log(this.state.popup)
      }
      fetchData = (val)=>{
          console.log(val.id);
          if(val.id === ''){
              console.log('empty');
          this.setState(previousState => ({
            userList: [...previousState.userList, val]}))
          }else{
              console.log('not empty')
            this.state.userList.map((data,key)=>{
                  if(data._id === val.id){
                    this.setState(prevState => {
                        const newItems = [...prevState.userList];
                        newItems[key] = val;
                        return {userList: newItems};
                    })
                  }
              })
          }
      }
      delete =(key,id)=>{
        this.state.userList.splice(key, 1) ;
        this.setState({
           userList: this.state.userList
         }, ()=>console.log(this.state.userList));
      }
      edit = (key,id,title) =>{
        this.toggle();
        let item = this.state.userList[key];
        this.setState({
            editList: item,
            viewList:[],
            title:'Edit'
          }, ()=>console.log(this.state));
      }
      view = (key,id)=>{
        let item = this.state.userList[key];
        this.setState({
            viewList: item,
            editList:[],
          }, ()=>console.log(this.state));
      }
      loadData(){
        return this.state.userList.filter((data)=>{
            if(this.state.search == null)
                return data
            else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
             data.email.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
            }
          }).map((val,key)=>
            <div className="row" key={key}>
                <div className="col-1">
                    <input type="checkbox" name="check"/>
                </div>
                <div className="col-4 b-head">
                    <div className="b-logo">AS</div>
                    <div>
                    <div className="username">{val.name}</div>
                    <div className="username">{val.email}</div>
                    </div>
                </div>
                <div className="col-2">{val.company}</div>
                <div className="col-1 addedit">
                    <div className="viewicon">
                <FontAwesomeIcon icon={faBookOpen} onClick={(e)=>this.view(key,val._id)}></FontAwesomeIcon></div>
                    <div className="editicon">
                <FontAwesomeIcon icon={faEdit} onClick={(e)=>this.edit(key,val._id)}></FontAwesomeIcon></div>
                    <div className="deleteicon">
                <FontAwesomeIcon icon={faTrash} onClick={(e)=>this.delete(key,val._id)}></FontAwesomeIcon></div>
                </div>
            </div>
        )
      }
      searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
      }
  render() {
    return (
      <div className="contact">
            <div className="contact-header">
                    <div className="contact-title">
                            <div className="book-img">
                            <img src="a.png" alt="logo"/>
                            </div>
                            <div className="contact-head">
                            <h4>Contact</h4>
                            <p className="textcolor">This is sample process</p>
                            </div>
                            <div><span className="textcolor">Sort by</span>:Date Created</div>
                    </div>
                    <div className="contact-search">
                        <div className="search">
                        <input type="search" name="search" placeholder="Search Contacts" 
                        onChange={(e)=>this.searchSpace(e)}/>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </div>
                        <button className="l-btn" onClick={(e)=>this.toggle('Add')}>+ Add Contact</button>
                    </div>
            </div>
            { this.state.popup ? <PopUp toggle={this.toggle} fetchData={this.fetchData} data={this.state}/> : '' }
        <div className="contact-container">
                    
            <div className="row">
                <div className="col-8">
                        <div className="table">
                                <div className="header">
                                    <div className="row">
                                        <div className="col-1">+</div>
                                        <div className="col-4 textcolor">Basic info</div>
                                        <div className="col-2 textcolor">Company</div>
                                        <div className="col-1 textcolor">Action</div>
                                    </div>
                                </div>
                                <div className="body">
                                  {this.loadData()}
                                </div>
                            </div>
                </div>
                <div className="col-4">
                        <div className="section">
                            <div className="center">
                            <div><span className="logo">Logo</span></div>
                            <div className='lname'>Ashok</div>
                            <div className='desc textcolor'>This is sample process</div>
                            </div>
                            
                            <div className="row details">
                            <div className="col-3 textcolor">
                                <div>Full Name</div>
                                <div>Email</div>
                                <div>Phone</div>
                                <div>Company</div>
                                <div>Address</div>
                            </div>
                            <div className="col-1">
                {this.state.viewList.name  ? <div>{this.state.viewList.name}</div> : <div>Ashok</div>}
                {this.state.viewList.email  ? <div>{this.state.viewList.email}</div> : <div>Ashok@gmail.com</div>}
                {this.state.viewList.phone  ? <div>{this.state.viewList.phone}</div> : <div>1234567890</div>}
                {this.state.viewList.company  ? <div>{this.state.viewList.company}</div> : <div>Rapid</div>}
                {this.state.viewList.address  ? <div>{this.state.viewList.address}</div> :  <div>Maduravoyal</div>}
                            </div>
                            </div>
                        </div>
                    <div className="sub-content">
                        <img src="a.png" alt="logo"/>
                        <div className="notice">
                            <h5>Tax Evasion & Payout Notice</h5>
                            <div>Date 7th May 10:00am</div>
                        </div>
                        <div className="dot">...</div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
  }
}
