import React from 'react';
import { Link } from 'react-router-dom';
import './organization-row.scss';

export default props =>
<div className="organization-row">
  <div className="organization-name">
    <Link to={`/organization/info/${props.organization.id}`}>
      {props.organization.name}
    </Link>
  </div>
  <div className="organization-edit">
    <Link to={`/organization/edit/${props.organization.id}`}>
      Edit
    </Link>
  </div>
  <div className="organization-delete">
    <button onClick={() => props.organizationDelete(props.organization.id)}>
      Delete
    </button>
  </div>
  <hr/>
</div>
