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

