#!/usr/bin/env bash
# Publica en la Página de Facebook "Mentoor" (ID 1270543009486655) vía la API Graph.
# Uso: publicar-facebook.sh foto|video <url_publica> <archivo_caption> [published=true|false]
# El token NO está aquí: lo agrega el proxy del entorno (credencial "Facebook Mentoor") al llamar a graph.facebook.com.
set -euo pipefail
TIPO="$1"; URL="$2"; CAP="$3"; PUB="${4:-true}"; PAGE=1270543009486655; API="https://graph.facebook.com/v21.0"
code=$(curl -s -o /dev/null -w "%{http_code}" "$URL"); [ "$code" = "200" ] || { echo "ERROR: archivo no accesible ($code)"; exit 1; }
case "$TIPO" in
  foto)  r=$(curl -sS -X POST "$API/$PAGE/photos" -d "published=$PUB" --data-urlencode "url=$URL" --data-urlencode "message@$CAP");;
  video) r=$(curl -sS -X POST "$API/$PAGE/videos" -d "published=$PUB" --data-urlencode "file_url=$URL" --data-urlencode "description@$CAP");;
  *) echo "tipo debe ser foto o video"; exit 1;;
esac
echo "respuesta: $r"
echo "$r" | python3 -c "import sys,json;d=json.load(sys.stdin);sys.exit(0 if (d.get('id') or d.get('post_id')) else 1)"
