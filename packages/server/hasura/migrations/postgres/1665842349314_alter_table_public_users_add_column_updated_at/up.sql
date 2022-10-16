alter table "public"."users" add column "updated_at" timestamp
 not null default now();
