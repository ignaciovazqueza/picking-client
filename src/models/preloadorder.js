module.exports = {
    id: "preloadorder",
    entity: "preloadorder",
    active: true,
    table: "preloadorder",
    
    titleField: "name",
    searchFields: ["consolidatedinterface_id", "worker_id", "name", "creation_date", "freeSpace"],
    
    label: "Órdenes de precarga",
    name: "órden de precarga",
    namePlural: "órdenes de precarga",

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
            id: "worker_id",
            label: "Operario",
            column: "worker_id",
            entity: "worker",
            type: "lov",
            inMany: true,
            required: true,
            lovtable: "worker",
            width: 50
        },
        {
            id: "freeSpace",
            label: "Espacio disponible",
            column: "freeSpace",
            type: "boolean",
            inMany: true,
            required: true,
            width: 50
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
        }
    ],

    groups: [
        {
            id: "p1", type: "panel",
            label: "Descripción", width: 100,
            fields: ["name", "consolidatedinterface_id", "worker_id", "freeSpace", "creation_date", "creation_time"]
        },
    ]
};

