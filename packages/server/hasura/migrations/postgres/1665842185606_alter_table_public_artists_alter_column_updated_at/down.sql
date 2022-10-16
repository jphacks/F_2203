alter table "public"."artists" alter column "updated_at" drop not null;
ALTER TABLE "public"."artists" ALTER COLUMN "updated_at" drop default;
