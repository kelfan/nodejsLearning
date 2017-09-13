#!/bin/bash
file=act.json
`lt --port 3000 >url.txt &`
sleep 2
url=`cut -d "/" -f 3 url.txt`
echo $url
txt=`sed "s/\/[a-zA-Z0-9.]*\"/\/$url\"/1" <$file`
echo $txt >$file
./gactions update --action_package act.json --project rdrproject-176909
# cd ..
# cd localtunnel
# npm start