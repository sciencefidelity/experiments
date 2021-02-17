#! bin/zsh

# A simple script for automating scss and browser-sync.

browser-sync start --server --no-open --files "./css/*.css" "*.html" "./js/*.js" &
sass --watch ./scss/style.scss ./css/style.css
