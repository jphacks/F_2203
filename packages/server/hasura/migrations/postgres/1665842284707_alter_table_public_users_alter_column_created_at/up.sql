alter table "public"."users" alter column "created_at" set default now();
alter table "public"."users" alter column "created_at" set not null;
