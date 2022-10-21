alter table "public"."posts" alter column "created_at" drop not null;
ALTER TABLE "public"."posts" ALTER COLUMN "created_at" drop default;
ALTER TABLE "public"."posts" ALTER COLUMN "created_at" TYPE timestamp without time zone;
