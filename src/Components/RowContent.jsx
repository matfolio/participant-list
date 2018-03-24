import React, { Component } from 'react';
import RowEdit from './RowEdit';
import '../mystyle.css';

/*
This component renders list of participants. It does check 
for editing, save, cancel and delete operation
these operation are controlled from the main 
App component states which is suited for the app source of true.

*/
class RowContent extends Component {

  render() {
  	let {sort,commit,edittable,save,cancel,remove,edit} = this.props;
    return (
      <div className="wrapper table-responsive" >           
          <table className="table">
            <thead className="list" onClick={sort}>
              <tr className="head" >
                <th className="col-md-3">Name <span className="glyphicon glyphicon-arrow-down"></span></th>
                <th className="col-md-3">Email</th>
                <th className="col-md-3">Phone number</th>
                <th className=" col-md-3"></th>
              </tr>
            </thead>
            <tbody className="list">
            {commit.map((obj,i) => {
            	return (<tr key={i}> 
            		{edittable === obj.id ? (
			        <RowEdit onEdit={obj} index={obj.id} save={save} cancel={cancel}></RowEdit>
			        ):(<React.Fragment>
			        <td className="list-item col-md-3">{obj.fullname}</td>
			        <td className="list-item col-md-3">{obj.email}</td>
			        <td className="list-item col-md-3">{obj.phonenumber}</td>
			        <td className="list-item col-md-3"><div className="glyphicon glyphicon-pencil operations" onClick={edit.bind(this,obj.id)}></div>
			        <div onClick={remove.bind(this,obj.id)} className="glyphicon glyphicon-trash operations"></div></td>
			        </React.Fragment>)


			    }
		      	</tr>)
            }) }
		      
		    </tbody>
          </table>
      </div>
    );
  }
}

export default RowContent;