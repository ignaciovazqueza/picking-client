var controlsheet_lovs = {
    status: [
        {id: 1, text: 'Entregado'},
        {id: 2, text: 'Rechazado internamente'},
        {id: 3, text: 'Rechazado parcialmente'},
        {id: 4, text: 'Rechazado totalmente'},
    ],
};


module.exports = {
    id: "controlsheet",
    entity: "controlsheet",
    table: "controlsheet",
    active: true,

    titleField: "name",
    searchFields: ["consolidatedinterface_id", "name", "status", "creation_date"],

    label: "Planillas de control",
    name: "planilla de control",
    namePlural: "planillas de control",

    fields: [
        {
            id: "name",
            label: "Nombre",
            column: "name",
            type: "text",
            maxLength: 50,
            inMany: true,
            required: true,
            width: 50
        },
        {
            id: "consolidatedinterface_id",
            label: "Interfaz consolidada",
            column: "consolidatedinterface_id",
            entity: "consolidatedinterface",
            type: "lov",
            inMany: true,
            required: true,
            lovtable: "consolidatedinterface",
            width: 50
        },
        {
            id: "status",
            label: "Estado",
            column: "status",
            type: "lov",
            list: controlsheet_lovs.status,
            inMany: true,
            required: true,
            lovtable: 'controlsheet_status'
        },
        {
            id: "creation_date",
            label: "Fecha de creación",
            column: "creation_date",
            type: "date",
            inMany: true,
            required: true,
            width: 50
        },
        {
            id: "creation_time",
            label: "Horario de creación",
            column: "creation_time",
            type: "time",
            maxLength: 8,
            inMany: true,
            required: true,
            width: 50
        },
    ],

    groups: [
        {
            id: "p1", type: "panel",
            label: "Descripción", width: 100,
            fields: ["name", "consolidatedinterface_id", "status", "creation_date", "creation_time"]
        },
    ]
};

