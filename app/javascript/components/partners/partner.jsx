import React from "react";

export default function PartnerDetails(props) {
  let partner = props.partners.find(
    x => x.id.toLocaleString() === props.match.params.id
  );

  debugger;
  return (
    <div>
      <h3>Partner Name</h3>
      {partner && <h4>{partner.name}</h4>}{" "}
    </div>
  );
}
