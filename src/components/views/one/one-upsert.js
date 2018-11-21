
// Evolutility-UI-React :: One-upsert

// Mixin used in Views for One for Insert and Update (only view Edit for now maybe more later).
 
// https://github.com/evoluteur/evolutility-ui-react
// (c) 2018 Olivier Giulieri

import axios from 'axios'
import { browserHistory } from 'react-router'

import evoGlobals from '../../../utils/evoGlobals'
import {i18n_msg} from '../../../i18n/i18n'
import {apiPath} from '../../../config.js'

export default function(){

	return {

		upsertOne: function(entity){
			const e = entity || this.props.params.entity,
				id = parseInt(this.props.params.id || '', 10),
				data = this.delta,
				url = apiPath+e+'/'+(id?id:'')

			if(data && Object.keys(data).length){
				axios[id?'put':'post'](url, data)
					.then(response => {
						// TODO: notification w/ toastr
						this.emptyDelta(false)
						if(id){
		                    //alert('Item updated.')
		                    console.log('Item updated.')
						}else{
		                    //alert('Item added.')
		                    console.log('Item added.')
							browserHistory.push('/'+e+'/edit/'+response.data.id)
						}
						this.setState({
							data: response.data,
							invalid: false
						})
					})
					.catch(function (error) {
						//TODO:
						alert(error.message || 'Error while inserting or updating the record.')
						console.log(error);
					});
			}//else{
				//alert('No update necessary. Data dind't change.')
			//}
		},

		uploadFileOne: function(fieldId, formData){
			// - only for fields of type image or document
			const mid = this.model.id,
				f = this.model.fieldsH[fieldId],
				stateData = this.state.data || {}

			const setData = (filePath)=>{
				var newData = JSON.parse(JSON.stringify(stateData))
				newData[f.id] = filePath
				this.setDeltaField(f.id, filePath)
				this.setState({
					data: newData
				})
			}

			if(formData && (f.type==='image' || f.type==='document')){
				let url = apiPath+mid+'/upload/'+stateData.id+'?field='+f.id

				axios.post(url, formData)
					.then(response => {
						setData(mid+'/'+response.data.fileName)
					})
					.catch(function (error) {
						alert('Error uploading file.')
						console.log(error);
					});
			}else{
				setData('')
			}
		},

		getDeliveredControlSheets(controlsheets) {
			return controlsheets.filter(sheet => sheet.status === 1)
		},

		getStartedPickingOrders(pickingorders) {
			return pickingorders.filter(order => order.end_date === null)
		},

		getPickingOrdersInterfaces(pickingorders) {
			return pickingorders.flatMap(order => order.consolidatedinterface_id_txt)
		},

		getAutoElevatorWorkers(workers) {
			return workers.filter(worker => worker.type === 1)
		},

		getLOV: function(fid){
			const mid = this.model.id

			if(!this.lovs){
				axios.get(apiPath+mid+'/lov/'+fid)
				.then((response)=>{
					const that = this;
					let usefulData = response.data;
					if (this.model.id === 'controlsheet' || this.model.id === 'pickingorder' || this.model.id === 'preloadorder') {
                        axios.get(apiPath+'controlsheet')
						.then((response2) => {
							const deliveredControlSheets = this.getDeliveredControlSheets(response2.data);
							const deliveredConsolidatedInterfaces = deliveredControlSheets.flatMap(elem => elem.consolidatedinterface_id_txt);
							if ((this.model.id === 'preloadorder' || this.model.id === 'controlsheet') && fid === 'consolidatedinterface_id') {
                                axios.get(apiPath+'pickingorder')
								.then((response3) => {
									const startedPickingOrders = this.getStartedPickingOrders(response3.data);
									const pickingOrdersInterfaces = this.getPickingOrdersInterfaces(response3.data);
									const unfinishedConsolidatedInterfaces = startedPickingOrders.flatMap(elem => elem.consolidatedinterface_id_txt);

									if (this.model.id === 'controlsheet') {
                                        axios.get(apiPath+'preloadorder')
										.then((response3) => {
											const preloadOrderInterfaces = response3.data.flatMap(elem => elem.consolidatedinterface_id_txt);

											usefulData = response.data.filter(i =>  deliveredConsolidatedInterfaces.indexOf(i.text) < 0 &&
																					unfinishedConsolidatedInterfaces.indexOf(i.text) < 0 &&
																					pickingOrdersInterfaces.indexOf(i.text) > -1 &&
																					preloadOrderInterfaces.indexOf(i.text) > -1)

											that.model.fieldsH[fid].list = usefulData.map(function(d){
												return {
													id: d.id,
													text: d.text ? d.text : d.label ? d.label : d.id
												}
											})
											that.refs[fid].forceUpdate()
											that.lovs=true
										})
									} else {
                                        usefulData = response.data.filter(i =>  deliveredConsolidatedInterfaces.indexOf(i.text) < 0 &&
																				unfinishedConsolidatedInterfaces.indexOf(i.text) < 0 &&
																				pickingOrdersInterfaces.indexOf(i.text) > -1);

                                        that.model.fieldsH[fid].list = usefulData.map(function(d){
                                            return {
                                                id: d.id,
                                                text: d.text ? d.text : d.label ? d.label : d.id
                                            }
                                        })
                                        that.refs[fid].forceUpdate()
                                        that.lovs=true
									}

								})
							} else if (this.model.id === 'preloadorder' && fid === 'worker_id') {
                                axios.get(apiPath+'worker')
                                    .then((response3) => {
                                        const autoElevatorWorkers = this.getAutoElevatorWorkers(response3.data);

                                        that.model.fieldsH[fid].list = autoElevatorWorkers.map(function(d){
                                            return {
                                                id: d.id,
                                                text: d.text ? d.text : d.label ? d.label : d.name ? d.name : d.id
                                            }
                                        })
                                        that.refs[fid].forceUpdate()
                                        that.lovs=true
									})
							} else {
                                usefulData = response.data.filter(i => deliveredConsolidatedInterfaces.indexOf(i.text) < 0);

                                that.model.fieldsH[fid].list = usefulData.map(function(d){
                                    return {
                                        id: d.id,
                                        text: d.text ? d.text : d.label ? d.label : d.id
                                    }
                                })
                                that.refs[fid].forceUpdate()
                                that.lovs=true
							}
						})
					} else {
                        this.model.fieldsH[fid].list = usefulData.map(function(d){
                            return {
                                id: d.id,
                                text: d.text ? d.text : d.label ? d.label : d.id
                            }
                        })
                        this.refs[fid].forceUpdate()
                        this.lovs=true
					}
				})
				.catch(err => {
					this.setState({
						message: 'Error retrieving list of values for field "'+fid+'".'
					})
				})
			}
		},

		routerWillLeave(nextLocation) {
			// - return false to prevent a transition w/o prompting the user,
			// - or return a string to allow the user to decide.
			if (this.isDirty && this.isDirty()){
				if(evoGlobals.skip_confirm){
					delete(evoGlobals.skip_confirm)
				}else{
					// TODO: same msg and actions as SublimeText
					return i18n_msg.confirmLeave
				}
			}
		},

		getDefaultData(){
			const obj = {};
			if(this.model){
				this.model.fields.forEach(function(f){
					if(f.defaultValue!=null){
						obj[f.id]=f.defaultValue;
					}
					if(f.type==='lov' && obj[f.id]==null){
						obj[f.id]='';
					}
				})
			}
			return obj;
		}

 	}
}
