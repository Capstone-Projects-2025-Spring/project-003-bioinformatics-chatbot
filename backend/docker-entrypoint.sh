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

echo "Pulling Embedding model..."
curl -X POST http://ollama:11434/api/pull -d '{"name": "mxbai-embed-large"}'

python ./setup/seed.py
# some variables for flask
# app entrypont

exec gunicorn --config gunicorn_config.py APP:app
