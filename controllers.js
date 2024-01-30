const getAuthSheets = require("./googleSheets");

async function getMetadata(request, response) {
    const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

    const metadata = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    });

    response.send(metadata.data);
}

async function getRows(request, response) {
    const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Página1",
        valueRenderOption: "UNFORMATTED_VALUE",
        dateTimeRenderOption: "FORMATTED_STRING",
    });

    response.send(getRows.data);
}

async function addRow(request, response) {
    const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

    const { values } = request.body;

    const row = await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Página1",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: values,
        },
    });

    response.send(row.data);
}

async function updateValue(request, response) {
    const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

    const { values } = request.body;

    const updateValue = await googleSheets.spreadsheets.values.update({
        spreadsheetId,
        range: "Página1!A2:C2",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: values,
        },
    });

    response.send(updateValue.data);
}

module.exports = {
    getMetadata,
    getRows,
    addRow,
    updateValue,
};
