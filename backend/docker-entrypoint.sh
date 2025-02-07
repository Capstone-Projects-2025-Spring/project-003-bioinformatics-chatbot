#!/bin/bash


#while true; do
#   flask db upgrade
#   if [[ "$?" == "0" ]]; then
#       break
#   fi
#   echo Upgrade command failed, retrying in 5 secs...
#   sleep 5
#done

export FLASK_APP=app
export FLASK_DEBUG=1
export FLASK_RUN_HOST=0.0.0.0
export FLASK_RUN_PORT=444

exec python3 -m flask run
