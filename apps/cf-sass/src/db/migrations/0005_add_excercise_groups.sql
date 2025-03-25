-- Groups of muscles/movement patterns
CREATE TABLE exercise_groups (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Individual exercises
CREATE TABLE exercises (
    id TEXT PRIMARY KEY,
    group_id TEXT REFERENCES exercise_groups(id),
    name TEXT NOT NULL,
    description TEXT,
    instruction_video_id TEXT, -- Reference to Cloudflare video
    difficulty_level TEXT, -- e.g., 'beginner', 'intermediate', 'advanced'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Training programs/days
CREATE TABLE training_days (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    order_index INTEGER, -- To maintain specific order of days
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Linking exercises to training days with specific parameters
CREATE TABLE training_day_exercises (
    id TEXT PRIMARY KEY,
    training_day_id TEXT REFERENCES training_days(id),
    exercise_id TEXT REFERENCES exercises(id),
    sets INTEGER,
    reps TEXT, -- Could be "12" or "8-12" or "Until failure"
    rest_time INTEGER, -- in seconds
    order_index INTEGER, -- Order within the training day
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);