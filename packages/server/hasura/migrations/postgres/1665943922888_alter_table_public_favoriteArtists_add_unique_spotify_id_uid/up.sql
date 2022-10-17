alter table "public"."favoriteArtists" add constraint "favoriteArtists_spotify_id_uid_key" unique ("spotify_id", "uid");
