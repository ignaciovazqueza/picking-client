module.exports = {
    id: "accidentalert",
    entity: "accidentalert",
    table: "accidentalert",
    active: true,

    titleField: "name",
    searchFields: ["name", "creation_date"],

    label: "Accidentes de mercadería",
    name: "accidente de mercadería",
    namePlural: "accidentes de mercadería",

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
            id: "creation_date",
            label: "Fecha de creación",
            column: "creation_date",
            type: "date",
            inMany: true,
            required: true
        },
        {
            id: "creation_time",
            label: "Horario de creación",
            column: "creation_time",
            type: "time",
            maxLength: 8,
            inMany: true,
            required: true
        },
    ],

    groups: [
        {
            id: "p1", type: "panel",
            label: "Descripción", width: 100,
            fields: ["name", "creation_date", "creation_time"]
        },
    ]
};

