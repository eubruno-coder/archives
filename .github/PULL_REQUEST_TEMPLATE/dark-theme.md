This pull request adds a Dark Theme support to the app.

Changes:
- index.html: Adds CSS variables for dark theme and a toggle button in the header.
- assets/js/central.js: Adds theme toggle JS that persists user choice and respects system preference.

How to test:
1. Checkout the branch `feature/dark-theme`.
2. Open index.html in a browser (or run the app).
3. Use the theme toggle button on the topbar to switch between light and dark themes.

Notes:
- Theme preference is stored in localStorage key `central_theme`.
