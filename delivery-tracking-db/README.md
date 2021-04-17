# Database Module

This project are implemented in PostgreSQL.

- **Restaurants**

  - id
  - uuid
  - name
  - phone_number
  - address
  - geolocation

  ### Script to create the table:

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

  ### Script to create the table:

  ```sql
    -- Table: public.users
    -- DROP TABLE public.users;

    CREATE TABLE public.users
    (
        id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
        uuid character varying(36) COLLATE pg_catalog."default" NOT NULL,
        name character varying(200) COLLATE pg_catalog."default" NOT NULL,
        phone_number character varying(20) COLLATE pg_catalog."default" NOT NULL,
        geolocation point NOT NULL,
        CONSTRAINT user_pkey PRIMARY KEY (id),
        CONSTRAINT "user_uPhone" UNIQUE (phone_number),
        CONSTRAINT "user_uUuid" UNIQUE (uuid)
    )

    TABLESPACE pg_default;

    ALTER TABLE public.users
        OWNER to "deliveryTracking";

    GRANT ALL ON TABLE public.users TO "deliveryTracking";
  ```

- **Products**

  - id
  - name
  - description
  - image
  - price
  - uuid

  ### Script to create the table:

  ```sql
    -- Table: public.products
    -- DROP TABLE public.products;

    CREATE TABLE public.products
    (
        id integer NOT NULL,
        name character(150) COLLATE pg_catalog."default" NOT NULL,
        description character(200) COLLATE pg_catalog."default" NOT NULL,
        price real NOT NULL,
        uuid character varying(36) COLLATE pg_catalog."default" NOT NULL,
        CONSTRAINT products_pkey PRIMARY KEY (id),
        CONSTRAINT uuid UNIQUE (uuid)
    )

    TABLESPACE pg_default;

    ALTER TABLE public.products
        OWNER to postgres;
  ```

- **Dealers**

  - id
  - uuid
  - name
  - phone_number
  - geolocation
  - status

  ### Script to create the table:

  ```sql
    -- Table: public.dealers
    -- DROP TABLE public.dealers;

    CREATE TABLE public.dealers
    (
        id integer NOT NULL DEFAULT nextval('dealers_id_seq'::regclass),
        uuid character varying(36) COLLATE pg_catalog."default" NOT NULL,
        name character varying(200) COLLATE pg_catalog."default" NOT NULL,
        phone_number character varying(20) COLLATE pg_catalog."default" NOT NULL,
        geolocation point,
        status dealers_status DEFAULT 'inactivo'::dealers_status,
        CONSTRAINT dealer_pkey PRIMARY KEY (id),
        CONSTRAINT "dealer_uPhone" UNIQUE (phone_number),
        CONSTRAINT "dealer_uUuid" UNIQUE (uuid)
    )

    TABLESPACE pg_default;

    ALTER TABLE public.dealers
        OWNER to "deliveryTracking";
  ```
