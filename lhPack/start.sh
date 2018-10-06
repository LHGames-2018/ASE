#!/bin/bash

echo "Installing dependencies"
npm install http-server -g
cd ui
echo "Starting UI"
http-server . -p 4200 &
cd ../server
echo "Starting GameServer"
dotnet WebSocketAPI.dll
