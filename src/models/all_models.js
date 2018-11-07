import {prepModel} from '../utils/dico'

import accidentalert from './accidentalert'
import client from './client'
import controlsheet from './controlsheet'
import consolidatedinterface from './consolidatedinterface'
import item from './item'
import pickingorder from './pickingorder'
import preloadorder from './preloadorder'
import repositionorder from './repositionorder'
import worker from './worker'

module.exports = {
    accidentalert: prepModel(accidentalert),
    client: prepModel(client),
    worker: prepModel(worker),
	item: prepModel(item),
    controlsheet: prepModel(controlsheet),
    consolidatedinterface: prepModel(consolidatedinterface),
    pickingorder: prepModel(pickingorder),
    preloadorder: prepModel(preloadorder),
    repositionorder: prepModel(repositionorder),
};
