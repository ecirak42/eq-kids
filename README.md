# EQ Kids

A modern one-page website for an elementary afterschool SEL program.

## Program Details

- Weekly afterschool social-emotional learning lessons
- Designed for elementary-aged kids
- About two hours per session
- $297 per month

Open `index.html` in a browser to view the site.

## Live Site

- GitHub Pages preview: https://ecirak42.github.io/eq-kids/
- Production domain target: https://eqkidsclub.org/

## Custom Domain DNS

GitHub Pages is configured from the `master` branch at the repo root. The
`CNAME` file points the site to `eqkidsclub.org`.

In Squarespace DNS, add these website records:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | ecirak42.github.io |

Keep the existing Google Workspace MX records for `hello@eqkidsclub.org`.
Changing website A/CNAME records should not require removing email records.

## Real Form Setup

The contact form is wired for a Google Apps Script endpoint that saves submissions into a Google Sheet.

See `FORM_SETUP.md` for the one-time Google Sheet deployment steps.
