-- Create a table to store user information
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,  -- Unique ID for each user
    username VARCHAR(50) NOT NULL UNIQUE,    -- Username must be unique
    email VARCHAR(100) NOT NULL UNIQUE,      -- Email must be unique
    password_hash VARCHAR(255) NOT NULL,     -- Store hashed password, not plain text
    full_name VARCHAR(100),                  -- Optional full name
    date_of_birth DATE,                      -- Optional date of birth
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-set creation time
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE           -- Account status
);

-- Optional: Create an index for faster searches by email
CREATE INDEX idx_users_email ON users(email);

INSERT INTO users (username, password)
VALUES ('latha', '1234');
