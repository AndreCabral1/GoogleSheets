// @ts-ignore
const { google } = require("googleapis");

async function getAuthSheets() {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({
        version: "v4",
        auth: client,
    });

    const spreadsheetId = "1OsB2vdp79OmePmCAwwure_SSrTTNjaBTe1V8QltXZ6c";

    return {
        auth,
        client,
        googleSheets,
        spreadsheetId,
    };
}

module.exports = getAuthSheets;
