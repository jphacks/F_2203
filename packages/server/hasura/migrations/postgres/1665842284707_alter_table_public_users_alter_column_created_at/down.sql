alter table "public"."users" alter column "created_at" drop not null;
ALTER TABLE "public"."users" ALTER COLUMN "created_at" drop default;
