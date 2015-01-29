Hands-on D3 workshop at NODA15
===============

# Introduction
We will in this workshop create a simple yet powerful backend powered by a Google Spreadsheet and code a basic bar chart in D3.
If we have time, we will look at C3, a library for creating the most common types of charts really easy.

# D3
"D3.js is a JavaScript library for manipulating documents based on data."
It is basically a great framework to create all kinds of data visualisations with.

Check out D3 here:
http://d3js.org/

# C3
C3 "[...] is a D3-based reusable chart library that enables deeper integration of charts into web applications."
It's a lot easier work with than D3, however it is limiting to the standard charts and is obviously not great for very custom visualisations.

Check out C3 here:
http://c3js.org/

# The data
You can find our sample data in this Google Spreadsheet:
https://docs.google.com/spreadsheets/d/1cZosRxqTdpK5eBGUjLDpEPN4zIK8jF-W-TQK_c9bv28/edit#gid=0

Here is the data in XML:
https://spreadsheets.google.com/feeds/list/1cZosRxqTdpK5eBGUjLDpEPN4zIK8jF-W-TQK_c9bv28/1/public/values

Here is the data in JSON:
https://spreadsheets.google.com/feeds/list/1cZosRxqTdpK5eBGUjLDpEPN4zIK8jF-W-TQK_c9bv28/1/public/values?alt=json-in-script


Feel free to make a copy of the speadsheet and import it into your own account.

# Technology:
- D3js and C3
- Google Spreadsheet (you will need a Google account)
- We could use a server. In that case we can spin up a simple HTTP-server: `python -m SimpleHTTPServer 8080`
