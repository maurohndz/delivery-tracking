# Database Module

This project are implemented in PostgreSQL.

- **Restaurants**

  - id
  - uuid
  - name
  - phone_number
  - geolocation

- **Users**

  - id
  - uuid
  - name
  - phone_number
  - geolocation

- **Dealers**

  - id
  - uuid
  - name
  - phone_number
  - geolocation
  - status
  - deliveryId

- **Deliveries**

  - id
  - uuid
  - userId
  - restaurantId
  - dealerId
  - restaurant_location
  - user_location
