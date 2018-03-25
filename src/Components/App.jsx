import React, { Component } from 'react';
//import logo from '../logo.svg'; /* Not needed in this project*/
import Content from './Content';
import MOCK_DATA from '../MOCK_DATA';
import _ from 'lodash';
import '../App.css';

class App extends Component {
  constructor(props){
  	super(props);
  	/* state footprint  */
  	this.state = {
  		participant: [],
  		lastIndex:0,
  		edittable:-1,
  		ordercheck:true
  	}

  	/* Binding the respective methods to the component for 'this' values access */

  	this.handleAddNew = this.handleAddNew.bind(this);
  	this.getName = this.getName.bind(this);
  	this.getPhoneNumber = this.getPhoneNumber.bind(this);
  	this.getEmail = this.getEmail.bind(this);
  	this.deleteRow = this.deleteRow.bind(this);
  	this.editRow = this.editRow.bind(this);
  	this.cancel = this.cancel.bind(this);
  	this.save = this.save.bind(this);
  	this.sort = this.sort.bind(this);
  	this.getId = this.getId.bind(this);
  	this.renderDefaultUser = this.renderDefaultUser.bind(this);

  }

  // When component mounted render the list of users as well.
  componentWillMount(){
  	this.renderDefaultUser();
  }

  renderDefaultUser(){
  	/*const count = 20;
  	for(let i = 0; i < count; i++){
  		this.state.participant.push({id:i, 
	  			fullname: "User" + i,
	  			email: "user"+i + "@example.com",
	  			phonenumber: '0451961260'
	  	})
  	}*/
  	MOCK_DATA.forEach((data) =>{
  		this.state.participant.push(data);
  	})
  	const length = this.state.participant.length;
  	let id = this.state.participant[length-1].id;
	this.setState({participant: this.state.participant,lastIndex:id});

  }
  /* 
  		handles the add new functionality. It does check foe the existence of data to be added.
  		Denies if no available data.
  */
  handleAddNew(){
  	//console.log(this.getName() + " " + this.getEmail() );
  	if(this.isAddable()){
  		let id = this.state.lastIndex;
	  	let fullname = this.getName();
	  	let email = this.getEmail();
	  	let phonenumber = this.getPhoneNumber();

	  	id = ++id;
	  	this.state.participant.push({id, 
	  			fullname,
	  			email,
	  			phonenumber
	  		})
	  	this.setState({
	  		participant: this.state.participant,lastIndex:id })
	  	this.fullname.getFullNameFromHeaderNull();
	  	this.phonenumber.getEmailFromHeaderNull();
	  	this.email.getPhoneNumberFromHeaderNull();

  	}

  }

  /*
  	sorts the list on the header clicked
  	checked if the order of the sort 
  	should ascending or descending using 
  	the ordercheck boolean property.

  */

  sort(){
  	console.log(this.state.lastIndex);
  	if(this.state.participant.length > 1 && this.state.ordercheck){
	  		this.state.participant.sort(function(a,b){

		  		if (a.fullname.toUpperCase() < b.fullname.toUpperCase()) {
				    return -1;
				}
				if (a.fullname.toUpperCase() > b.fullname.toUpperCase()) {
				    return 1;
				}
				return 0;
		  		
	  		})
		  	//this.state.ordercheck = false;
		  	this.setState({ordercheck: false,
	  				  participant: this.state.participant})
  	}

  	else if(this.state.participant.length > 1 && !this.state.ordercheck){
	  		this.state.participant.sort(function(a,b){

		  		if (b.fullname.toUpperCase() < a.fullname.toUpperCase()) {
				    return -1;
				}
				if (b.fullname.toUpperCase() > a.fullname.toUpperCase()) {
				    return 1;
				}
				return 0;
		  		
	  		})
		  	//this.state.ordercheck = true;
		  	this.setState({ordercheck: true,
	  				  participant: this.state.participant})
  	}
  
  }
  /* (Add new) checker */
  isAddable(){
  	if(this.getName().length !== 0 
  		&& this.getEmail().length !== 0 
  		&& this.getPhoneNumber().length !== 0
  		&& this.getEmail().match(/@\w+.\w+$/)){

  		return true;
  	}
  	else
  		return false;
  }

  // set the ID incrementing on call to this function.

  getId(){
  	let id = this.state.lastIndex;
  	return this.setState({lastIndex:id++});
  }

  // Using the ref on react component instance, we 
  // could be able to make referen´ce to any DOM element 
  // to be rendered. The use of ref heavily is not the 
  // best practice but still on of the ways of getting things 
  // done in regards to parent and component instance or child 
  //component communication 

  // Fetch the fullname from the component instance.
  getName(){
  	return this.fullname.getFullNameFromHeader();
  	//return this.state.value;
  }

  // Fetch the email from the component instance.
  getEmail(){
  	return this.email.getEmailFromHeader();
  	//return this.state.value;
  }

  // Fetch the phonenumber from the component instance.
  getPhoneNumber(){
  	return this.phonenumber.getPhoneNumberFromHeader();
  	//return this.state.value;
  }

  // performs edit operation on the list.

  editRow(index){
  	//this.state.edittable = index;
  	this.setState({edittable:index});
  }

  // performs delete operation on the list.

  deleteRow(index){
  	//this.state.delettable = true;
  	console.log(this.state.participant.length)
  	if(this.state.participant.length > 0){
  		this.state.participant.forEach((res,i) => {
  			if(res.id === index){
  				this.state.participant.splice(i,1);
  				this.setState({participant:this.state.participant});
  			}
  		});
  	}
  
	  	//this.setState({participant:this.state.participant});
  }
  	

  // performs cancel operation on the list.
  cancel(){
  	//this.state.edittable = -1;
  	this.setState({edittable:-1});

  }

  // performs save operation on the list.
  save(obj,index){
  	//const length = this.state.participant.length;

  	// You would want to check the content of your control box
  	// if actually contains the right content after edit.
  	// it makes sense, isn't it?
	_.each(this.state.participant,function(res,i){
		if(res.id === index && obj.fullname.length !== 0 && 
			obj.email.length !== 0 && obj.phonenumber.length !== 0 
			&& obj.email.match(/@\w+.\w+$/) )
		{
			this.state.participant.splice(i,1,obj);
		}

  	}.bind(this));
 	//this.state.edittable = -1;
  	this.setState({participant:this.state.participant, edittable:-1});
	  	
  	
  }
  render() {

  	// Objectifying our props and suspend it into the component instance as props
  	let props = {
  		addnew: this.handleAddNew,
      	commit: this.state.participant,
      	edittable: this.state.edittable,
      	edit: this.editRow,
      	remove: this.deleteRow,
      	cancel: this.cancel,
      	save:this.save,
      	sort:this.sort,
      	ref: input => {this.fullname = input;
              			this.email = input;
              			this.phonenumber = input;
              		}
              						
  	}
    return (
      <div>
      	<div className="App container table-responsive">
      		<h3 className="title">List of participants</h3>
      		{/* Component whihc displays the list both the header and the main content instances are composed in this instance */}
      		<Content  {...props}/>
      	</div>
      </div>
    );
  }
}

export default App;