const { google } = require('googleapis');
const sheets = google.sheets('v4');
const path = require('path');
const keyPath = path.join(__dirname, 'service-account-key.json'); // Replace with your key path
const auth = new google.auth.GoogleAuth({
    keyFile: keyPath,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

async function fetchSheetData(sheetId, range) {
    const client = await auth.getClient();
    const res = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: sheetId,
        range: range, 
    });
    return res.data.values; // Array of rows
}

module.exports = { fetchSheetData };