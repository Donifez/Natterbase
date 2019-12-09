import React from "react";

const table = ({ applications }) => {
        return (
            <div className="full-table">
               <table class="table table-striped img-responsive">
  <thead>
      <tr>
          <th id="insurance-text">Insurance Applications</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
      </tr>
    <tr>
      <th scope="col">S/N</th>
      <th scope="col">Insurance Type</th>
      <th scope="col">Amount</th>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
          {/* {applications.map(app=>{

  <tr>
      <th scope="row">1</th>
      <td>Travel Insurance</td>
      <td> ₦21,400,000</td>
      <td>14 0ct 2019 </td>
     
      <td className="completed"><div>Completed</div></td>
      <td><button>Make a claim</button></td>
      <td> <a href="#">More Actions</a></td>
    </tr>
          })} */}


    <tr>
      <th scope="row">1</th>
      <td>Travel Insurance</td>
      <td> ₦21,400,000</td>
      <td>14 0ct 2019 </td>
     
      <td className="completed"><div>Completed</div></td>
      <td><button>Make a claim</button></td>
      <td> <a href="#">More Actions</a></td>
    </tr>
    {/* <tr>
      <th scope="row">2</th>
      <td>Life Insurance</td>
      <td> ₦21,400,000</td>
      <td>14 0ct 2019 </td>
     
        <td className="completed"><div>Completed</div></td>
        <td><button>Make a claim</button></td>
      <td> <a href="#">More Actions</a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Health Insurance</td>
      <td> ₦21,400,000</td>
      <td>14 0ct 2019 </td>
     
        <td className="completed"><div>Completed</div></td>
        <td><button>Make a claim</button></td>
      <td> <a href="#">More Actions </a></td>
    </tr>

    <tr>
      <th scope="row">4</th>
      <td>Motor Insurance</td>
      <td> ₦21,400,000</td>
      <td>14 0ct 2019 </td>
     
        <td className="completed"><div>Completed</div></td>
        <td><button>Make a claim</button></td>
      <td> <a href="#">More Actions</a></td>
    </tr>

    <tr>
      <th scope="row">5</th>
      <td>Third Party Motor Insurance</td>
      <td> ₦21,400,000</td>
      <td>14 0ct 2019 </td>
     
        <td className="completed"><div>Completed</div></td>
        <td><button>Make a claim</button></td>

 
      <td> <a href="#">More Actions</a></td>
    </tr>
   */}
  </tbody>
</table>


            </div>
        );
    }

export default table;