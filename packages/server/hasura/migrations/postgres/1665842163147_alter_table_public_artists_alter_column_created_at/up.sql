alter table "public"."artists" alter column "created_at" set default now();
alter table "public"."artists" alter column "created_at" set not null;
