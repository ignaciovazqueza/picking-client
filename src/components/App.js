
// Evolutility-UI-React :: App.js

// Evolutility App (with model-driven views for CRUD and Charts).

// https://github.com/evoluteur/evolutility-ui-react
// (c) 2017 Olivier Giulieri

import React from 'react'

import { Link } from 'react-router'
import Toolbar from './shell/Toolbar'
import TopNav from './shell/TopNav'
import models from '../models/all_models'

export default React.createClass({

  propTypes: {
    params: React.PropTypes.object
  },

  render() {
    const {id=0, entity=null} = this.props.params,
      urlParts = window.location.pathname.split('/'),
      view = urlParts.length>1 ? urlParts[2] : false,
      isNew = urlParts.length>2 ? urlParts[3]=='0' : false

    return (
      <div>
          <TopNav>
              <div className="evo-toolbar">
                  <ul role="nav" className="evo-nav-pills pull-left">
                      <li><Link to="/accidentalert/list" id="accidentalert" className={entity==='accidentalert'?'active':''}>#Accidentes</Link></li>
                      <li><Link to="/item/list" id="item" className={entity==='item'?'active':''}>#Artículos</Link></li>
                      <li><Link to="/client/list" id="client" className={entity==='client'?'active':''}>#Clientes</Link></li>
                      <li><Link to="/consolidatedinterface/list" id="consolidatedinterface" className={entity==='consolidatedinterface'?'active':''}>#Interfaces</Link></li>
                      <li><Link to="/worker/list" id="worker" className={entity==='worker'?'active':''}>#Operarios</Link></li>
                      <li><Link to="/pickingorder/list" id="pickingorder" className={entity==='pickingorder'?'active':''}>#Órdenes de pickeo</Link></li>
                      <li><Link to="/controlsheet/list" id="controlsheet" className={entity==='controlsheet'?'active':''}>#Planillas de control</Link></li>
                      <li><Link to="/preloadorder/list" id="preloadorder" className={entity==='preloadorder'?'active':''}>#Precarga</Link></li>
                      <li><Link to="/repositionorder/list" id="repositionorder" className={entity==='repositionorder'?'active':''}>#Reposición</Link></li>
                  </ul>
                  <div className="clearer"/>
              </div>
              <h2><Link to="/">Picking</Link></h2>
              <div className="clearer"/>
              {entity ? <Toolbar key="tb" entity={entity} params={this.props.params} isNew={isNew} view={view}/> : null}
          </TopNav>
          <div className="TopNavComplement" />
          {this.props.children}
      </div>
    )
  }
})
