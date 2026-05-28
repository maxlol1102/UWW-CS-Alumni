-- Development seed data — sample UWW CS alumni profiles
-- Run this in the Supabase SQL editor after running the migration

INSERT INTO public.alumni_profiles
  (first_name, last_name, graduation_year, degree, current_company, current_title, industry, location_city, location_state, linkedin_url, willing_to_mentor, mentor_topics, bio)
VALUES
  ('Sarah', 'Johnson', 2018, 'BS Computer Science', 'Microsoft', 'Software Engineer II', 'Software Engineering', 'Seattle', 'WA', 'https://linkedin.com/in/example', true, ARRAY['Software Engineering', 'Career Advice', 'Interviewing'], 'Sarah has been at Microsoft for four years working on Azure infrastructure. Happy to talk career paths.'),
  ('James', 'Chen', 2019, 'BS Computer Science', 'Salesforce', 'Senior Frontend Engineer', 'Software Engineering', 'San Francisco', 'CA', 'https://linkedin.com/in/example', true, ARRAY['Frontend Development', 'React', 'Career Advice'], null),
  ('Maria', 'Rodriguez', 2016, 'BS Computer Science', 'Deloitte', 'Senior Consultant', 'Consulting', 'Chicago', 'IL', null, false, null, null),
  ('David', 'Kim', 2020, 'BS Computer Science', 'Epic Systems', 'Software Developer', 'Healthcare Tech', 'Madison', 'WI', 'https://linkedin.com/in/example', true, ARRAY['Healthcare Tech', 'First Job Search'], null),
  ('Emily', 'Thompson', 2017, 'BS Computer Science', 'Amazon', 'Data Engineer', 'Data Science / AI', 'Seattle', 'WA', null, false, null, null),
  ('Michael', 'Brown', 2021, 'BS Computer Science', 'Target Corporation', 'Software Engineer', 'Software Engineering', 'Minneapolis', 'MN', 'https://linkedin.com/in/example', true, ARRAY['Internships', 'First Job Search'], null),
  ('Jessica', 'Lee', 2015, 'BS Computer Science', 'Google', 'Staff Software Engineer', 'Software Engineering', 'Mountain View', 'CA', 'https://linkedin.com/in/example', false, null, 'Jessica works on Google Cloud infrastructure.'),
  ('Alex', 'Patel', 2022, 'BS Computer Science', 'Northwestern Mutual', 'Junior Developer', 'Finance / FinTech', 'Milwaukee', 'WI', null, false, null, null),
  ('Rachel', 'Nguyen', 2023, 'BS Computer Science', 'Exact Sciences', 'Junior Software Engineer', 'Healthcare Tech', 'Madison', 'WI', 'https://linkedin.com/in/example', true, ARRAY['New Grad Advice', 'Healthcare Tech'], null),
  ('Tyler', 'Wilson', 2014, 'BS Computer Science', 'Accenture', 'Principal Engineer', 'Consulting', 'Chicago', 'IL', null, false, null, null);
