#!/bin/bash
set -e

export XDG_RUNTIME_DIR=/run/user/$(id -u)

DEPLOY_DIR=~/app-deploy
ZIP_FILE=~/app-build.zip

echo "Extrayendo el nuevo build..."
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"
unzip -o "$ZIP_FILE" -d "$DEPLOY_DIR"

echo "Instalando dependencias de produccion..."
cd "$DEPLOY_DIR"
npm install --omit=dev

echo "Reiniciando el servicio..."
systemctl --user restart app.service

echo "Despliegue completado."
