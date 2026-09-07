#!/bin/sh
# Seconds to the next UK49s draw, from the live endpoint.
curl -s https://bettip.co.za/api/v1/uk49s/next.json | python3 -c 'import sys,json;d=json.load(sys.stdin)["data"];print(d["label"],d["atSast"],"SAST in",d["secondsToGo"],"s")'
