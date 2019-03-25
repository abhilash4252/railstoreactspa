import React from "react";
import axios from "axios";
import TableData from "./common/TableData.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PartnerDetails from "./partners/partner.jsx";

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
        <Route
          path={["/", "/partners"]}
          exact
          render={props => (
            <TableData {...props} data={this.state.partners} type="partners" />
          )}
        />
        <Route
          path="/partners/:id"
          render={props => (
            <PartnerDetails {...props} partners={this.state.partners} />
          )}
        />
      </div>
    );
  }
}

export default Partners;
