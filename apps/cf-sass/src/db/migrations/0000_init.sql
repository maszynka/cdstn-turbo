CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL,
	`firstName` text(255),
	`lastName` text(255),
	`email` text(255),
	`passwordHash` text,
	`role` text DEFAULT 'user' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);

CREATE TABLE `exercises` (
	`id` text PRIMARY KEY NOT NULL,
	`group_id` text REFERENCES `exercise_groups`(`id`),
	`name` text NOT NULL,
	`description` text,
	`difficulty_level` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);

CREATE TABLE `videos` (
	`id` text PRIMARY KEY NOT NULL,
	`cloudflare_uid` text NOT NULL,
	`title` text,
	`creator_id` text,
	`type` text,
	`duration` real,
	`status` text,
	`thumbnail_url` text,
	`hls_url` text,
	`dash_url` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);

CREATE TABLE `exercise_videos` (
	`id` text PRIMARY KEY NOT NULL,
	`exercise_id` text NOT NULL REFERENCES `exercises`(`id`) ON DELETE CASCADE,
	`video_id` text NOT NULL REFERENCES `videos`(`id`) ON DELETE CASCADE,
	`video_type` text NOT NULL,
	`is_primary` integer DEFAULT 0,
	`order` integer,
	`notes` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);

CREATE INDEX `idx_exercise_videos_exercise_id` ON `exercise_videos` (`exercise_id`);
CREATE INDEX `idx_exercise_videos_video_id` ON `exercise_videos` (`video_id`);
