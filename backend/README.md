# Backend

## Ejecución

Ejecutar desde src/ :
`uvicorn main:app --reload`

## Rutas

/data: Obtiene info de temperatura/humedad
/data/historiacl: Obtiene el historial de datos de la base de datos
/control: Controla los parámetros para regar, etc

## Conexiones raspberry

![](raspberry_connections.png)

- 3 Relays
- 2 Sensores humedad
- 1 Sensor temperatura y humedad ambiental
- 1 Sensor de luz
