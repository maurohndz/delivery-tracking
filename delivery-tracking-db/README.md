# Database Module

This project are implemented in PostgreSQL.

- **Restaurants**

  - id
  - uuid
  - name
  - phone_number
  - address
  - geolocation

  #### script to create the table

  ```sql
    -- Table: public.restaurants

    -- DROP TABLE public.restaurants;

    CREATE TABLE public.restaurants
    (
        id integer NOT NULL DEFAULT nextval('restaurants_id_seq'::regclass),
        uuid character varying(36) COLLATE pg_catalog."default" NOT NULL,
        phone_number character varying(20) COLLATE pg_catalog."default" NOT NULL,
        address character varying(500) COLLATE pg_catalog."default" NOT NULL,
        geolocation point NOT NULL,
        CONSTRAINT restaurant_pkey PRIMARY KEY (id),
        CONSTRAINT "restaurant_uPhone" UNIQUE (phone_number),
        CONSTRAINT "restaurant_uUuid" UNIQUE (uuid)
    )

    TABLESPACE pg_default;

    ALTER TABLE public.restaurants
        OWNER to "deliveryTracking";

    GRANT ALL ON TABLE public.restaurants TO "deliveryTracking";
  ```

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

- **Deliveries**

  - id
  - uuid
  - userId
  - restaurantId
  - dealerId
  - restaurant_location
  - user_location
