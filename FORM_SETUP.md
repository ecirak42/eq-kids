# Form Setup

This site sends inquiries into a Google Sheet using Google Apps Script.

The live website is already connected to a deployed Apps Script web app. These
steps are here in case the endpoint ever needs to be recreated.

## 1. Create the Google Sheet

1. Create a new Google Sheet named `EQ Kids Website Inquiries`.
2. In the Sheet, go to `Extensions` > `Apps Script`.
3. Delete the starter code and paste the contents of `google-apps-script.gs`.
4. If you're using a standalone Apps Script project instead of opening Apps
   Script from the Sheet, paste the Sheet ID into `SPREADSHEET_ID`.
5. Save the project.

## 2. Deploy the Web App

1. Click `Deploy` > `New deployment`.
2. Choose type `Web app`.
3. Set `Execute as` to `Me`.
4. Set `Who has access` to `Anyone`.
5. Click `Deploy`.
6. Copy the Web App URL.

The Sheet stays private to you. The public website can only send form submissions to the web app.

## 3. Connect the Website

In `index.html`, find:

```html
<form class="contact-form" id="inquiry-form" data-endpoint="">
```

Paste the Web App URL inside `data-endpoint`.

```html
<form class="contact-form" id="inquiry-form" data-endpoint="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec">
```

Then commit and push the change to GitHub.

After saving, submit one test inquiry and confirm a row appears in the
`Inquiries` tab.
