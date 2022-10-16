CREATE TABLE "users" (
  "id" SERIAL UNIQUE NOT NULL,
  "uid" varchar PRIMARY KEY NOT NULL,
  "custom_id" varchar UNIQUE,
  "name" varchar,
  "bio" varchar,
  "avatar_url" varchar,
  "twitter_id" varchar,
  "instagram_id" varchar,
  "created_at" timestamp
);

CREATE TABLE "posts" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "title" varchar,
  "link" varchar,
  "message" varchar,
  "location_name" varchar,
  "location_lat" int,
  "location_lng" int,
  "uid" varchar,
  "artist_id" int,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "artists" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" varchar,
  "image_url" varchar,
  "spotify_id" varchar UNIQUE NOT NULL,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "favoriteArtists" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "uid" varchar,
  "artists_id" int,
  "created_at" timestamp,
  "updated_at" timestamp
);

ALTER TABLE "posts" ADD FOREIGN KEY ("uid") REFERENCES "users" ("uid");

ALTER TABLE "posts" ADD FOREIGN KEY ("artist_id") REFERENCES "artists" ("id");

ALTER TABLE "favoriteArtists" ADD FOREIGN KEY ("uid") REFERENCES "users" ("uid");

ALTER TABLE "favoriteArtists" ADD FOREIGN KEY ("artists_id") REFERENCES "artists" ("id");
