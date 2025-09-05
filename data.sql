USE website_traffic;

-- Insert sample users
INSERT INTO users (name, location, device, browser) VALUES
('Alice', 'India', 'Mobile', 'Chrome'),
('Bob', 'USA', 'Desktop', 'Firefox'),
('Charlie', 'UK', 'Tablet', 'Safari'),
('David', 'Canada', 'Mobile', 'Edge'),
('Emma', 'India', 'Desktop', 'Chrome');

-- Insert sample pages
INSERT INTO pages(page_url, page_category) VALUES
('/home', 'Home'),
('/products', 'Product'),
('/cart', 'Checkout'),
('/blog', 'Blog'),
('/contact', 'Contact');

-- Insert sample sessions
INSERT INTO sessions(user_id, entry_page_id, exit_page_id, session_start, session_end, duration, clicks) VALUES
(1, 1, 3, '2025-09-01 10:00:00', '2025-09-01 10:05:00', 300, 5),
(2, 2, 5, '2025-09-02 11:00:00', '2025-09-02 11:10:00', 600, 8),
(3, 1, 4, '2025-09-03 12:00:00', '2025-09-03 12:07:00', 420, 6),
(4, 1, 2, '2025-09-03 14:00:00', '2025-09-03 14:03:00', 180, 4),
(5, 2, 3, '2025-09-04 09:00:00', '2025-09-04 09:12:00', 720, 10);

