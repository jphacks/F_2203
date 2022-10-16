alter table "public"."favoriteArtists"
  add constraint "favoriteArtists_artists_id_fkey"
  foreign key ("artists_id")
  references "public"."artists"
  ("id") on update no action on delete no action;
