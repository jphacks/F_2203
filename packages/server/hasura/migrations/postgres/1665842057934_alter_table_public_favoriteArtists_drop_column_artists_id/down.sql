alter table "public"."favoriteArtists"
  add constraint "favoriteArtists_artists_id_fkey"
  foreign key (artists_id)
  references "public"."artists"
  (id) on update no action on delete no action;
alter table "public"."favoriteArtists" alter column "artists_id" drop not null;
alter table "public"."favoriteArtists" add column "artists_id" int4;
