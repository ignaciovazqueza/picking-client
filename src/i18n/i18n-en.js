//   Evolutility-UI-React Localized strings in ENGLISH
//   (c) 2017 Olivier Giulieri
//   https://github.com/evoluteur/evolutility-ui-react

module.exports = {

	id: 'en',    // ENGLISH
    name: 'English',

    // --- toolbar & buttons for actions ---
    i18n_actions:{
        browse: 'Buscar',
        edit: 'Editar',
        // login: 'Login',
        new: 'Agregar',
        newEntity: 'Agregar {0}', //'New Item',
        //newUpload: 'New Upload',
        //search: 'Search',
        //newSearch: 'New Search',
        //searchRes: 'Search Result',
        //selection: 'Selection',
        //selections: 'Selections',
        export1: 'Exportar CSV',
        //import: 'Import',
        //massUpdate: 'Mass Update',
        delete1: 'Eliminar',
        //bAll: 'All',
        list: 'Listar',
        cards: 'Cartas',
        //bJSON: 'JSON',
        filter: 'Filtrar',
        //bScatter:'Scatter',
        charts: 'Charts',
        //refresh: 'Refresh',
        //print: 'Print',
        save: 'Guardar',
        //saveAdd: 'Save and Add Another',
        ok: 'OK',
        cancel: 'Cancelar',

        // --- navigation/pagination ---
        prev: 'Anterior',
        next: 'Próximo',

        dropFile: 'Drop the file here, or click to select the file to upload.',
        //dropFiles: 'Drop files here, or click to select files to upload.',
        remove_image: 'Remove current image',
        remove_document: 'Remove current document'
    },

    // --- status ---
    i18n_msg:{
        nodata: '{0} no encontrado.', // 0=entities
        loading: 'Cargando datos...',
        confirmLeave: '¡Todavía no ha guardado su trabajo! ¿Seguro desea continuar?',
        range: '{0} a {1} de {2} {3}',// 0=rangeBegin, 1=rangeEnd, 2=mSize, 3=entities'
        xinz: '{0} de {1} {2}',// 0=mSize, 1=totSize, 2=entities'
        //sgn_money: '$', // indicator for money
        //sgn_email: '@', // indicator for email
        added: '{0} "{1}" agregado.',
        updated: '{0} "{1}" actualizado.',
        deleted: '{0} "{1}" eliminado.'
        //error: 'Error',
    },

    // --- validation ---
    i18n_validation:{
        //incomplete: 'Some information is missing or invalid.',
        incomplete: 'Información incompleta.',
        invalid: 'Formato invalido.',
        //invalidList: '{0} values in "{1}" are invalid.',
        //invalidList1: '1 value in "{1}" is invalid.',
        //intro: 'You are not finished yet: ',
        empty: '"{0}" debe tener un valor.',
        email: '"{0}" debe ser un email válido del tipo "juan@gmail.com".',
        integer: '"{0}" debe usar solamente números.',
        decimal: '"{0}" debe ser un número decimal válido.',
        money: '"{0}" debe ser un número válido.',
        date: '"{0}" debe ser una fecha válida, formato debe ser "MM/DD/AAAA" como "12/24/2017".',
        datetime: '"{0}" must be a valid date/time, format must be "MM/DD/YYYY hh:mm AM/PM" like "12/24/2017 10:30 AM".',
        time: '"{0}" debe ser un horario válido, formato debe ser "hh:mm:ss" como "10:30:00".',
        json: '"{0}" must be a valid JSON expression like "{"a": 1}".',
        max: '"{0}" debe ser menor o igual a {1}.',
        min: '"{0}" debe ser mayor o igual a {1}.',
        maxLength: '"{0}" debe tener {1} caracteres máximo.',
        minLength: '"{0}" debe tener al menos {1} caracteres.',
        minMaxLength: '"{0}" debe estar entre {1} y {2} caracteres.',
        regExp: '"{0}" no es el formato esperado.'
        //regExp: '"{0}" must match the regular expression pattern for "{1}".'
    },

    // --- charts ---
    i18n_charts:{
        nocharts: 'No existen gráficos predefinidos.'
    },

    i18n_errors: {
        badId: 'No se pudo obtener datos con id="{0}".',
        badEntity: 'Parámetro inválido: entidad=\"{0}\".',
        badChart: 'No se pudo obtener gráficos.'
    }
};
