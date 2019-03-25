import React from "react";
import axios from "axios";
import TableData from "./common/TableData.jsx";

class Partners extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      audience: []
    };
  }
  componentDidMount() {
    let self = this;
    axios
      .get("/api/audience")
      .then(function(response) {
        if (response.data) {
          self.setState({ audience: response.data });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return <TableData data={this.state.audience} type="audience" />;
  }
}

export default Partners;
