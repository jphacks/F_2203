alter table "public"."artists" alter column "updated_at" set default now();
alter table "public"."artists" alter column "updated_at" set not null;
