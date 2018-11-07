import React from 'react'

export default React.createClass({
  render() {
    return ( 
        <div className="evo-home" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>

            <h1>Proceso de picking - Modelo de base de datos</h1>
            <div>
                <img src={'./PickingDatabaseModel.png'} style={{height: '75%'}}/>
            </div>
        </div>
    )
  }
})
