import React, { Component } from 'react'

export default class PopUp extends Component {
    state = {
        id:'',
        name:'',
        email:'',
        phone:'',
        company:'',
        address:'',
        error:[]
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e)=>{
       if(this.state.name === ''){
            this.setState({error:'Please enter firstname'})
       }else if(this.state.email === ''){
        this.setState({error:'Please enter email'})
       }else if(this.state.phone === ''){
        this.setState({error:'Please enter phone'})
    }else if(this.state.company === ''){
        this.setState({error:'Please enter company'})
    }else if(this.state.address === ''){
        this.setState({error:'Please enter address'})
    }else{
        this.props.fetchData(this.state);
        this.props.toggle();
    }
    }
    componentDidMount(){
       // console.log(this.props.data.userList);
        if(this.props.data.title === 'Edit'){
            //console.log('edit details');
        this.setState({
                id:this.props.data.editList._id,
                name:this.props.data.editList.name,
                email:this.props.data.editList.email,
                phone:this.props.data.editList.phone,
                company:this.props.data.editList.company,
                address:this.props.data.editList.address,       
        })
    }else{
        //console.log('add details');
       this.setState({ 
        id:'',
        name:'',
        email:'',
        phone:'',
        company:'',
        address:''
    })
    }
    }
  render() {
    return (
      <div className="popup">
        <div className="popup-content">
            
            <div className="popup-head">
                <div>{this.props.data.title}</div>
                <div onClick={this.props.toggle} style={{cursor:"pointer"}}>X</div>
            </div>
            <div className="popup-formgroup">
            <div className="error">{this.state.error}</div>
                <div className="popup-formcontrol">
                    <input type="text" name="name" placeholder="FirstName" 
                    value={this.state.name} onChange={this.handleChange}/>
                </div>
                
                <div className="popup-formcontrol">
                    <input type="email" name="email" placeholder="Email" 
                    value={this.state.email}  onChange={this.handleChange}/>
                </div>
                
                <div className="popup-formcontrol">
                    <input type="phone" name="phone" placeholder="Phone" 
                    value={this.state.phone} onChange={this.handleChange}/>
                </div>
                <div className="popup-formcontrol">
                    <input type="text" name="company" placeholder="Company" 
                    value={this.state.company} onChange={this.handleChange}/>
                </div>
                <div className="popup-formcontrol">
                    <input type="text" name="address" placeholder="Address" 
                    value={this.state.address} onChange={this.handleChange}/>
                </div>
                <div className="btn"><button onClick={this.handleSubmit}>Submit</button></div>
            </div>
        </div>
      </div>
    )
  }
}
