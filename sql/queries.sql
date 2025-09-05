USE website_traffic;

-- most visited entry pages
SELECT p.page_url AS entry_page, COUNT(*) AS entry_count
FROM sessions s
JOIN pages p ON s.entry_page_id=p.page_id
GROUP BY p.page_url
ORDER BY entry_count DESC;

-- most common exit pages
SELECT p.page_url AS exit_page, COUNT(*) exit_count
FROM sessions s
JOIN pages p ON s.exit_page_id=p.page_id
GROUP BY p.page_url
ORDER BY exit_count DESC;

-- Average session duration
SELECT AVG(duration) AS avg_session_duration_seconds
FROM sessions;

-- Bounce rate
SELECT (COUNT(CASE WHEN entry_page_id = exit_page_id THEN 1 END) * 100.0 / COUNT(*)) AS bounce_rate_percent
FROM sessions; 

-- total sessions per user
SELECT u.name, COUNT(s.session_id) AS total_sessions
FROM user u
JOIN sessions s ON u.user_id=s.user_id
GROUP BY u.name
ORDER BY total_sessions DESC;

-- Most active devices
SELECT device, COUNT(*) AS sessions_count
FROM users u
JOIN sessions s ON u.user_id=s.user_id
GROUP BY device
ORDER BY sessions_count DESC;

-- Sessions per location
SELECT location, COUNT(*) AS sessions_count
FROM users u 
JOIN sessions s ON u.user_id=s.user_id
GROUP BY location
ORDER BY sessions_count DESC;