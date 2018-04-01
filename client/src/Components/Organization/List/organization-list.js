import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OrganizationRow from '../Row';
import organizationApi from '../../../Data/organization-api';
import './organization-list.scss';
export default class OrganizationList extends Component {
  state = {
    loading: true,
    list: []
  };
  componentDidMount = () => {
    organizationApi.getAll().then(results => {
      this.setState({
        list: results,
        loading: false
      })
    });
  };
  organizationDelete = (id) => {
    organizationApi.delete(id).then(() => {
      this.setState({ list: this.state.list.filter((item) => item.id !== id)})
    });
  }
  render() {
    return (
      <div className="organization-list">
        <Link to="organization/create">
          Add Organization
        </Link>
        <hr/>
        {this.state.loading &&
          <div className="organization-loading">Loading...</div>
        }
        {!this.state.loading && this.state.list.map((item) =>
          <OrganizationRow key={item.id} organization={item} organizationDelete={this.organizationDelete}/>
        )}
      </div>
    )
  }
}
