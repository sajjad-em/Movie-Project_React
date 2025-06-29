@echo off
title Run JSON Server and Project
echo Starting JSON Server...
start cmd /k "json-server --watch db.json --port 3001"

echo Starting Project...
start cmd /k "npm start"

echo All services started!
