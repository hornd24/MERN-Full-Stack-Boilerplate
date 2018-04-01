import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import organizationApi from '../../../Data/organization-api';
import './organization-form.scss';
class OrganizationList extends Component {
  state = {
    loading: true,
    organization: {}
  };
  history = this.props.history;
  addOrganization = () => {
    organizationApi.create(this.state.organization)
      .then((newOrg) => {
        this.history.push(`/organization/info/${newOrg.id}`);
      });
  };
  updateOrganization = () => {
    organizationApi.update(this.state.organization)
      .then(() => {
        this.history.push(`/organization/info/${this.state.organization.id}`);
      });
  };
  handleInputChange = ({ target }) => {
    const { name, value } = target;
    const organization = { ...this.state.organization };
    organization[name] = value;
    this.setState({
      organization
    });
  };
  componentDidMount = () => {
    let id = null;
    if (this.props && this.props.match && this.props.match.params) {
      id = this.props.match.params.id;
    }
    if (id) {
      organizationApi.getById(id).then(organization => {
        this.setState({
          organization,
          loading: false
        })
      });
    } else {
      this.setState({
        loading: false
      })
    }
  };
  render() {
    return (
      <div className="organization-form">
        {this.state.loading &&
          <div className="organization-loading">Loading...</div>
        }
        {!this.state.loading &&
          <div className="organization-inputs">
            <h1 className="organization-name">
              <input
                onChange={this.handleInputChange}
                value={this.state.organization.name}
                name="name"
                placeholder="Organization Name" />
            </h1>
            <div className="organization-description">
              <input
                onChange={this.handleInputChange}
                value={this.state.organization.description}
                name="description"
                type="text"
                placeholder="Organization Description" />
            </div>
            <div className="organization-description">
              {!this.state.organization.id &&
                <div className="controls">
                  <button onClick={this.addOrganization}>
                    Create
                  </button>
                  <button onClick={() => this.history.push('/organization')}>
                    Cancel
                  </button>
                </div>
              }
              {this.state.organization.id &&
                <div className="controls">
                  <button onClick={this.updateOrganization}>
                    Update
                  </button>
                  <button onClick={() => this.history.push(`/organization/info/${this.state.organization.id}`)}>
                    Cancel
                  </button>
                </div>
              }
            </div>
          </div>
        }
      </div>
    )
  }
}
export default withRouter(OrganizationList);
