#!/usr/bin/env bash
# Publica UNA imagen en @mentoor.cl vía la API de Instagram.
# Uso: publicar-instagram.sh <url_imagen_publica> <archivo_caption>
# El token NO está aquí: lo agrega el proxy del entorno (credencial "Instagram Mentoor") al llamar a graph.instagram.com.
set -euo pipefail
IMG="$1"; CAP="$2"; API="https://graph.instagram.com/v21.0"
code=$(curl -s -o /dev/null -w "%{http_code}" "$IMG"); [ "$code" = "200" ] || { echo "ERROR: imagen no accesible ($code)"; exit 1; }
r=$(curl -sS -X POST "$API/me/media" --data-urlencode "image_url=$IMG" --data-urlencode "caption@$CAP"); echo "contenedor: $r"
id=$(echo "$r" | python3 -c "import sys,json;print(json.load(sys.stdin).get('id',''))"); [ -n "$id" ] || { echo "ERROR creando contenedor"; exit 1; }
for i in $(seq 1 20); do
  s=$(curl -sS "$API/$id?fields=status_code" | python3 -c "import sys,json;print(json.load(sys.stdin).get('status_code',''))")
  [ "$s" = "FINISHED" ] && break; [ "$s" = "ERROR" ] && { echo "ERROR procesando"; exit 1; }; sleep 3
done
p=$(curl -sS -X POST "$API/me/media_publish" -d "creation_id=$id"); echo "publicado: $p"
pid=$(echo "$p" | python3 -c "import sys,json;print(json.load(sys.stdin).get('id',''))"); [ -n "$pid" ] || exit 1
curl -sS "$API/$pid?fields=permalink,timestamp"; echo
