module.exports = {
    id: "pickingorder",
    entity: "pickingorder",
    active: true,
    table: "pickingorder",

    titleField: "name",
    searchFields: ["consolidatedinterface_id", "item_id", "name", "creation_date"],

    label: "Órdenes de pickeo",
    name: "órden de pickeo",
    namePlural: "órdenes de pickeo",

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
            id: "item_id",
            label: "Artículo",
            column: "item_id",
            entity: "item",
            type: "lov",
            inMany: true,
            required: true,
            lovtable: "item",
            width: 33
        },
        {
            id: "quantity",
            label: "Cantidad",
            column: "quantity",
            type: "integer",
            maxLength: 4,
            inMany: true,
            required: true,
            width: 33
        },
        {
            id: "position",
            label: "Posición",
            column: "position",
            type: "text",
            maxLength: 20,
            inMany: true,
            required: true,
            width: 33
        },
        {
            id: "start_date",
            label: "Fecha de inicio",
            column: "start_date",
            type: "date",
            inMany: true,
            required: true,
            width: 50
        },
        {
            id: "start_time",
            label: "Horario de inicio",
            column: "start_time",
            type: "time",
            maxLength: 8,
            inMany: true,
            required: true,
            width: 50
        },
        {
            id: "end_date",
            label: "Fecha de finalización",
            column: "end_date",
            type: "date",
            inMany: true,
            width: 50
        },
        {
            id: "end_time",
            label: "Horario de finalización",
            column: "end_time",
            type: "time",
            maxLength: 8,
            inMany: true,
            width: 50
        },
        {
            id: "picking_time",
            label: "Tiempo de pickeo",
            column: "picking_time",
            type: "time",
            maxLength: 8,
            inMany: true,
        },

    ],

    groups: [
        {
            id: "p1", type: "panel",
            label: "Descripción", width: 100,
            fields: ["name", "consolidatedinterface_id", "item_id", "quantity", "position", "start_date", "start_time", "end_date", "end_time", "picking_time"]
        },
    ]
};

