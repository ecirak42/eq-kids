const SHEET_NAME = "Inquiries";
const SPREADSHEET_ID = "";

function doPost(e) {
  const sheet = getInquirySheet();
  const params = e.parameter || {};

  if (params.website) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([
    new Date(),
    params.parentName || "",
    params.email || "",
    params.phone || "",
    params.childGrade || "",
    params.goals || "",
    params.pageUrl || "",
    params.submittedAt || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getInquirySheet() {
  const spreadsheet = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  ensureInquiryHeaders(sheet);

  return sheet;
}

function ensureInquiryHeaders(sheet) {
  const headers = [
    "Received At",
    "Parent Name",
    "Email",
    "Phone",
    "Child Grade",
    "Goals",
    "Page URL",
    "Submitted At",
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    return;
  }

  const existingHeaders = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), headers.length)).getValues()[0];
  const hasOldHeaderOrder = existingHeaders[0] === "Received At"
    && existingHeaders[1] === "Parent Name"
    && existingHeaders[2] === "Email"
    && existingHeaders[3] === "Child Grade";

  if (hasOldHeaderOrder) {
    sheet.insertColumnAfter(3);
  }

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
}
