#!/usr/bin/env bash
# Publica UN reel en @mentoor.cl vía la API de Instagram.
# Uso: publicar-reel.sh <url_video_publica_mp4> <archivo_caption>
# El token NO está aquí: lo agrega el proxy del entorno al llamar a graph.instagram.com.
set -euo pipefail
VID="$1"; CAP="$2"; API="https://graph.instagram.com/v21.0"
code=$(curl -s -o /dev/null -w "%{http_code}" "$VID"); [ "$code" = "200" ] || { echo "ERROR: video no accesible ($code)"; exit 1; }
r=$(curl -sS -X POST "$API/me/media" -d "media_type=REELS" --data-urlencode "video_url=$VID" --data-urlencode "caption@$CAP"); echo "contenedor: $r"
id=$(echo "$r" | python3 -c "import sys,json;print(json.load(sys.stdin).get('id',''))"); [ -n "$id" ] || { echo "ERROR creando contenedor"; exit 1; }
for i in $(seq 1 40); do
  s=$(curl -sS "$API/$id?fields=status_code" | python3 -c "import sys,json;print(json.load(sys.stdin).get('status_code',''))")
  [ "$s" = "FINISHED" ] && break
  case "$s" in ERROR|EXPIRED) echo "ERROR procesando: $s"; exit 1;; esac
  sleep 6
done
[ "$s" = "FINISHED" ] || { echo "ERROR: el video no terminó de procesarse"; exit 1; }
p=$(curl -sS -X POST "$API/me/media_publish" -d "creation_id=$id"); echo "publicado: $p"
pid=$(echo "$p" | python3 -c "import sys,json;print(json.load(sys.stdin).get('id',''))"); [ -n "$pid" ] || exit 1
curl -sS "$API/$pid?fields=permalink,timestamp"; echo
