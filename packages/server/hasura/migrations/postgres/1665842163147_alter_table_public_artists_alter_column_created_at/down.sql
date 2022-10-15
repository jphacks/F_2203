alter table "public"."artists" alter column "created_at" drop not null;
ALTER TABLE "public"."artists" ALTER COLUMN "created_at" drop default;
