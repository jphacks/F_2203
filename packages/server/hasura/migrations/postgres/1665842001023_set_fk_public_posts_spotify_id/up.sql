alter table "public"."posts"
  add constraint "posts_spotify_id_fkey"
  foreign key ("spotify_id")
  references "public"."artists"
  ("spotify_id") on update set null on delete set null;
