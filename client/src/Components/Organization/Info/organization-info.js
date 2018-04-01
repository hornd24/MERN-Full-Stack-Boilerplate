import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import organizationApi from '../../../Data/organization-api';
import './organization-info.scss';
class OrganizationList extends Component {
  state = {
    loading: true,
    organization: null
  };
  deleteOrganization = () => {
    organizationApi.delete(this.state.organization.id)
      .then(() => {
        const { history } = this.props;
        history.push("/organization");
      });
  };
  componentDidMount = () => {
    organizationApi.getById(this.props.match.params.id).then(organization => {
      this.setState({
        organization,
        loading: false
      })
    });
  };
  render() {
    return (
      <div className="organization-info">
        {this.state.loading &&
          <div className="organization-loading">Loading...</div>
        }
        {!this.state.loading &&
          <div className="organization-properties">
            <h1 className="organization-name">
              {this.state.organization.name}
            </h1>
            <div className="organization-description">
              {this.state.organization.description}
            </div>
            <div className="organization-edit">
              <Link to={`/organization/edit/${this.state.organization.id}`}>
                Edit
              </Link>
            </div>
            <div className="organization-delete">
              <button onClick={this.deleteOrganization}>
                Delete
              </button>
            </div>
          </div>
        }
      </div>
    )
  }
}
export default withRouter(OrganizationList);
