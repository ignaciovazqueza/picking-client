# Picking-Client

Picking-Client provides a set of React Views to display and interact with objects of different data structures. These views work together to provide full web apps. 

With Picking-Client you can quickly make a web application UI by configuring views with metadata instead of hand-coding Javascript, CSS, and HTML.

Picking-Client works hand-in-hand with [Picking-Server](https://github.com/ignaciovazqueza/picking-server) which provides the matching REST endpoints based on the same metadata.


## Installation

[**Download**](https://github.com/ignaciovazqueza/picking-client/archive/master.zip) or **clone** from [GitHub](https://github.com/ignaciovazqueza/picking-client/).

```bash
# To get the latest stable version, use git from the command line.
git clone https://github.com/ignaciovazqueza/picking-client.git
```

In the Picking-Client directory, use the command line to type the following:

```bash
# Install dependencies
npm install

# Run the node.js server
npm start

```

In a web browser, go to the url [http://localhost:8080/](http://localhost:8080/).

For the REST endpoints, you also need to setup [Picking-Server](https://github.com/ignaciovazqueza/picking-server).


## Views

For any object, a single model defines UI elements across views in a simple declarative way.

Picking-Client provides 2 types of view:

* Views for a model: [Browse](#browse), [Edit](#edit).
* Views for a collection: [List](#list), [Cards](#cards), [Charts](#charts).

Notes: Views for actions will come later.

A large part of the API (methods, options and events) is common to all views. Some views have additional API.

## Views for One object
### Browse
Shows all fields for viewing (read only). Fields are grouped in panels.

![Browse](https://raw.githubusercontent.com/evoluteur/evolutility-ui-react/master/public/screenshots/comics/one-browse.gif)

Code: [/src/components/views/one/Browse.js](https://github.com/ignaciovazqueza/picking-client/blob/master/src/components/views/one/Browse.js)

### Edit
This view shows all fields for edition to create or update records.
It automatically performs validation based on the model.
Fields are grouped in panels and tabs.

![Edit](https://raw.githubusercontent.com/evoluteur/evolutility-ui-react/master/public/screenshots/comics/one-edit.gif)

Code: [/src/components/views/one/Edit.js](https://github.com/ignaciovazqueza/picking-client/blob/master/src/components/views/one/Edit.js)


## Views for Many objects
### List
Gives a tabular view of a collection.

![List](https://raw.githubusercontent.com/evoluteur/evolutility-ui-react/master/public/screenshots/comics/many-list.gif)

Code: [/src/components/views/many/List.js](https://github.com/ignaciovazqueza/picking-client/blob/master/src/components/views/many/List.js)

### Cards
Shows records side by side as cards.

![Cards](https://raw.githubusercontent.com/evoluteur/evolutility-ui-react/master/public/screenshots/comics/many-cards.gif)

Code: [/src/components/views/many/Cards.js](https://github.com/ignaciovazqueza/picking-client/blob/master/src/components/views/many/Cards.js)

### Charts
Draws charts about the collection.

![Charts](https://raw.githubusercontent.com/evoluteur/evolutility-ui-react/master/public/screenshots/comics/many-charts.gif)

Code: [/src/components/views/many/Charts.js](https://github.com/ignaciovazqueza/picking-client/blob/master/src/components/views/many/Charts.js)


## Models

For each application, several views will be generated form a single model. 
Models describe the object and its list of fields.

### Entity

| Property     | Meaning                                 |
|--------------|-----------------------------------------|
| id           | Unique key to identify the entity (used as API parameter). |    
| icon         | Icon file name for the entity (example: "cube.gif". |  
| name         | Object name (singular).    |
| namePlural   | Object name (plural).      |
| title        | Application name.          |
| fields       | Array of fields.           |
| groups       | Array of groups. If not provided a single group will be used.   |
| titleField   | Field id for the column value used as record title. titleField can also be a function. | 

### Field

| Property     | Meaning                               |
|--------------|---------------------------------------|
| id           | Unique key for the field (can be the same as column but doesn't have to be). |
| type         | Field type to show in the UI. Possible field types: <ul><li>boolean (yes/no)</li><li>date</li><li>datetime</li><li>decimal</li><li>document</li><li>email</li><li>image</li><li>integer</li><li>lov (list of values)</li><li>money</li><li>text</li><li>textmultiline</li><li>time</li><li>url</li></ul> |
| required     | Determines if the field is required for saving.      |
| readonly     | If set to true, the field value cannot be changed.   |       
| defaultValue | Default field value for new records.                 |     
| max, min     | Maximum/Minimum value allowed (only applies to numeric fields).      |    
| maxLength, minLength | Maximum/Minimum length allowed (only applies to text fields).      |                    
| inMany       | Determines if the field is present (by default) in lists of records. |                     
| height       | For fields of type "textmultiline", number of lines used in the field (in Browse and Edit views). |                 
| width        | Percentage width in Browse and Edit views. |
| help         | Optional help on the field. |
| noCharts     | Prevent the field to have a charts (only necessary for fields of type integer, decimal, money, boolean, list of values which are "chartable"). |

### Group

| Property     | Meaning                               |
|--------------|---------------------------------------|
| id           | Unique key for the group. It is optional.            |
| type         | Only "panel" is currently supported ("tab" is next). |
| label        | Group title as displayed to the user.      |
| fields       | Array of field ids.                        |


### Sample model

The following example is the model for a simple graphic novels inventory app. 

```javascript
module.exports = {
    id: "item",
    entity: "item",
    table: "item",
    active: true,

    titleField: "name",
    searchFields: ["sku", "name", "position"],

    label: "Artículos",
    name: "artículo",
    namePlural: "artículos",

    fields: [
        {
            id: "name",
            label: "Nombre",
            column: "name",
            type: "text",
            maxLength: 50,
            inMany: true,
            required: true
        },
        {
            id: "sku",
            label: "SKU",
            column: "sku",
            type: "text",
            maxLength: 20,
            inMany: true,
            required: true
        },
        {
            id: "position",
            label: "Posición",
            column: "position",
            type: "text",
            maxLength: 20,
            inMany: true,
            required: true
        }
    ],

    groups: [
        {
            id: "p1", type: "panel",
            label: "Descripción", width: 100,
            fields: ["name", "sku", "position"]
        },
    ]
};
```


## License

Copyright (c) 2018 [Olivier Giulieri](https://evoluteur.github.io/).

