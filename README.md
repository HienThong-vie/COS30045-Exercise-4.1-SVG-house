# Exercise 4.1 – Draw SVGs (SVG house)

COS30045 Data Visualisation – Demonstration 2 (Week 7)
Chung Hien Thong (106212681), Swinburne University of Technology

**Live site (Mercury):** http://mercury.swin.edu.au/cos30045/s106212681/dv-03-svg-exercise/index.html

## What this is

A house and garden drawn by hand with every basic SVG shape (rect, circle, ellipse, line, polyline, polygon, path, text) and the group element `<g>`, with annotated screenshots of the SVG coordinate system.

All four Demonstration 2 exercises share the same navigation bar, so they work as one website on Mercury:

| Exercise | Folder / repository |
|---|---|
| 4.1 SVG house | `dv-03-svg-exercise` |
| 4.3–4.7 Website with bar chart | `dv-04-bar-chart-exercise` |
| 5 Multi-chart page | `dv-05-multichart-webpage` |
| 6 Interactivity | `dv-06-interactivity` |

## Files

```
index.html          page with the inline SVG house and Steps 1–5
css/style.css       shared site styles
js/house.js         EXTRA: D3 buttons (night mode, lights, open door) + live DOM outline
img/annotated-shapes-1.png, -2.png, -3.png   annotated coordinate screenshots of the finished house (Step 2)
img/dom-devtools.png   my DevTools screenshot of the SVG and its DOM (Step 5)
img/PowerIcon.png   logo
```

## Running locally

`d3.csv()` uses `fetch`, so the page must be served over HTTP (opening the file directly with `file://` blocks the CSV).
Use the VS Code **Live Server** extension, or run `python -m http.server 8000` in this folder and open http://localhost:8000.
D3 v7 is loaded from `https://d3js.org/d3.v7.min.js`.

## To do before submitting

- [x] **Step 5:** DevTools screenshot of the finished house saved as `img/dom-devtools.png`.

## References

- Dufour, A. M. & Meeks, E. (2024). *D3.js in Action* (3rd ed.). Manning Publications.
- COS30045 Week 4–6 exercise instructions (Canvas, 2026).
- Australian Government Energy Rating – television registration data (2026); Australian Energy Regulator – annual spot prices (1998–2024).
