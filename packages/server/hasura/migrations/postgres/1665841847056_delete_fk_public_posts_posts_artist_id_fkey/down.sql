alter table "public"."posts"
  add constraint "posts_artist_id_fkey"
  foreign key ("artist_id")
  references "public"."artists"
  ("id") on update no action on delete no action;
