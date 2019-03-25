import React from "react";
import axios from "axios";

class Partners extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partners: []
    };
  }
  componentDidMount() {
    let self = this;
    axios
      .get("/api/partners")
      .then(function(response) {
        if (response.data) {
          self.setState({ partners: response.data });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>List of Partners</h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.partners.map(partner => {
              return (
                <tr>
                  <td>{partner.id}</td>
                  <td>{partner.name}</td>
                  <td>
                    <a href={"/partners/" + partner.id}>Show</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Partners;
