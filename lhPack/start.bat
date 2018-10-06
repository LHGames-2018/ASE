echo "Installing dependencies"

call npm install http-server -g

cd server

echo "Starting GameServer"

START /B dotnet WebSocketAPI.dll

cd ../ui

echo "Starting UI"

http-server . -p 4200
