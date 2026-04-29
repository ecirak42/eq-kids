const SHEET_NAME = "Inquiries";

function doPost(e) {
  const sheet = getInquirySheet();
  const params = e.parameter || {};

  sheet.appendRow([
    new Date(),
    params.parentName || "",
    params.email || "",
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
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Received At",
      "Parent Name",
      "Email",
      "Child Grade",
      "Goals",
      "Page URL",
      "Submitted At",
    ]);
  }

  return sheet;
}
