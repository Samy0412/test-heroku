Begin;

DROP TABLE IF EXISTS neighbourhoods CASCADE;



CREATE TABLE neighbourhoods (
 id SERIAL PRIMARY KEY NOT NULL,
 name VARCHAR(55) NOT NULL,
 time_created TIMESTAMPTZ NOT NULL DEFAULT now(),
 coordinates POINT,
 bounds POINT [],
 neighbourhood_photo VARCHAR(255) 
 
);

Commit;

