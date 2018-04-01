import React from 'react';
import { Route } from 'react-router-dom';
import {
  OrganizationForm,
  OrganizationInfo,
  OrganizationList
} from '../../Components/Organization';
import './organization-view.scss';
export default ({ match }) =>
<div className='organization'>
  <Route exact path="/organization" component={OrganizationList}/>
  <Route exact path="/organization/info/:id" component={OrganizationInfo}/>
  <Route exact path="/organization/edit/:id" component={OrganizationForm}/>
  <Route exact path="/organization/create" component={OrganizationForm}/>
</div>
