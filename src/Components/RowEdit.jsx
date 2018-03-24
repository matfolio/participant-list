import React, { Component } from 'react';
import '../mystyle.css';
class RowEdit extends Component {
  constructor(props){
  	super(props);

  	this.state = {
  		id : this.props.onEdit.id,
  		fullname : this.props.onEdit.fullname,
  		email : this.props.onEdit.email,
  		phonenumber : this.props.onEdit.phonenumber

  	}
  	//this.handleSave = this.handleSave.bind(this);
  	this.handleEmailChange = this.handleEmailChange.bind(this);
  	this.handleFullnameChange = this.handleFullnameChange.bind(this);
  	this.handlePhonenumberChange = this.handlePhonenumberChange.bind(this);
  }

  handleFullnameChange(e){
  	/* Muatating state not allowed */
  	//this.state.fullname = e.target.value;
  	this.setState({fullname:e.target.value});

  }
  handleEmailChange(e){
  	/* Muatating state not allowed */
  	//this.state.email = e.target.value;
  	this.setState({email:e.target.value});
  }
  handlePhonenumberChange(e){
  	/* Muatating state not allowed */
  	//this.state.phonenumber = e.target.value;
  	this.setState({phonenumber:e.target.value});
  }

/*  handleSave(){
  	this.setState({fullname:this.state.fullname,
  					email:this.state.email,
  					phonenumber:this.state.phonenumber});

  	this.props.save(this.state);
  }*/

  render() {
  	let {cancel,save} = this.props;
    return (
      <React.Fragment>         
        <td className="list-item col-md-3 col-sm-3"><input type="text" value={this.state.fullname} onChange= {this.handleFullnameChange}/></td>
        <td className="list-item col-md-3 col-sm-3"><input type="email" value={this.state.email} onChange= {this.handleEmailChange}/></td>
        <td className="list-item col-md-3 col-sm-3"><input type="number" value={this.state.phonenumber} onChange= {this.handlePhonenumberChange}/></td>
        <td className="list-item col-md-3 col-sm-3"><div className="center"><span className="cancel center" onClick={cancel}>Cancel</span><span className="save" onClick={save.bind(this,this.state,this.props.index)}>Save</span></div></td>

      </React.Fragment>
    );
  }
}

export default RowEdit;