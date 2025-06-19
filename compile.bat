@echo off
echo CSS is being compiled..

npx @tailwindcss/cli -i ./src/assets/css/input.css -o ./src/assets/css/style.css --watch