ALTER TABLE "public"."posts" ALTER COLUMN "created_at" TYPE timestamp without time zone;
alter table "public"."posts" alter column "created_at" set default now();
alter table "public"."posts" alter column "created_at" set not null;
