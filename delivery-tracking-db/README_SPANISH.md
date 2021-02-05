# Módulo de Bases de Datos

Este proyecto se implementan en PostgreSQL.

- **Restaurantes**

  - id
  - uuid
  - name
  - phone_number
  - geolocation

- **Usuarios**

  - id
  - uuid
  - name
  - phone_number
  - geolocation

- **Repartidores**

  - id
  - uuid
  - name
  - phone_number
  - geolocation
  - status
  - deliveryId

- **Entregas**

  - id
  - uuid
  - userId
  - restaurantId
  - restaurant_location
  - user_location
