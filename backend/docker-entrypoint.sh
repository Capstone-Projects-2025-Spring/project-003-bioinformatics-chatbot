#!/bin/bash

while true; do
    flask db upgrade
    if [[ "$?" == "0" ]]; then
        break
    fi
    echo Upgrade command failed, retrying in 5 secs...
    sleep 5
done

echo "Pulling Ollama model..."
curl -X POST http://ollama:11434/api/pull -d '{"name": "llama3.1"}'

# some variables for flask
# app entrypont
export FLASK_APP=app
# debug mode for development
export FLASK_DEBUG=1
# host ip
export FLASK_RUN_HOST=0.0.0.0
# port number
export FLASK_RUN_PORT=444

exec python3 -m flask run
