import React from "react";
import { useState } from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employee: [] };
    this.headers = [
      { key: "productId", label: "Id" },
      { key: "name", label: "Name" },
      { key: "description", label: "Position" },
      { key: "unitPrice", label: "Office" },
      { key: "unitsInStock", label: "Age" },
      { key: "Image", label: "Salary" },
    ];
  }

  componentDidMount() {
    fetch("http://localhost:8888/receivers/productReceiver.php?action=getAll")
      .then((response) => {
        console.log(typeof response);
        return response.json();
      })
      .then((result) => {
        // Work with JSON data here

        console.log(result);
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }

  render() {
    const employeeFound =
      this.state.employee_rs && this.state.employee_rs.length;
    if (employeeFound) {
      return (
        <div className="container">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                {this.headers.map(function (h) {
                  return <th key={h.key}>{h.label}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {this.state.employee_rs.map(
                function (item, index) {
                  return (
                    <tr key={index}>
                      <td>{item.productId}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.unitPrice}</td>
                      <td>{item.unitInStock}</td>
                      <td>{item.image}</td>
                    </tr>
                  );
                }.bind(this)
              )}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div id="container">No product found</div>;
    }
  }
}
export default Product;
