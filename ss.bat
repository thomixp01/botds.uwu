@echo off
title Actualizacion
color 0a


echo Starting..
ncu -u
npm install
echo "Actualizado"
node index.js