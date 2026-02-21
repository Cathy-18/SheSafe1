# 🛡️ SafePath – Smart Personal Safety Web App

SafePath is a web-based personal safety application that helps users navigate safely, store emergency contacts, and quickly access SOS features.

---

## 🚀 Features

- 🔐 User Registration & Login (Supabase Authentication)
- 👤 Profile Management
- 📞 Emergency Contacts Setup
- 🗺️ Safe Navigation UI
- 🚨 SOS Button
- 🔒 Row-Level Security (RLS) Enabled Database
- 📱 Responsive UI (Tailwind CSS)

---

## 🧑‍💻 Tech Stack

- HTML5
- Tailwind CSS
- JavaScript (Vanilla JS)
- Supabase (Authentication + Database)
- Git & GitHub

---

## 📂 Project Structure

```
SafePath/
│
├── register.html
├── login.html
├── dashboard.html
├── README.md
```

---

# ⚙️ Complete Setup Guide

---

## 1️⃣ Create Supabase Project

1. Go to: https://supabase.com
2. Create a new project
3. Wait for database to initialize

---

## 2️⃣ Enable Email Authentication

Go to:

Authentication → Providers → Email

- ✅ Enable Email Provider
- ❌ Turn OFF "Confirm Email" (for development)

Save changes.

---

## 3️⃣ Get API Keys

Go to:

Settings → API

Copy:

- Project URL
- anon public key

You will paste these inside:

```javascript
createClient("YOUR_PROJECT_URL", "YOUR_ANON_KEY")
```

in:

- register.html
- login.html
- dashboard.html

---

## 4️⃣ Create Database Tables

Go to:

SQL Editor → New Query

Run this:

```sql
-- PROFILES TABLE
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  created_at timestamptz default now()
);

alter table profiles enable row level security;

create policy "Allow users to insert own profile"
on profiles
for insert
to authenticated
with check (auth.uid() = id);

create policy "Allow users to read own profile"
on profiles
for select
to authenticated
using (auth.uid() = id);


-- EMERGENCY CONTACTS TABLE
create table emergency_contacts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  contact_name text not null,
  phone text not null,
  created_at timestamptz default now()
);

alter table emergency_contacts enable row level security;

create policy "Users can insert their contacts"
on emergency_contacts
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can view their contacts"
on emergency_contacts
for select
to authenticated
using (auth.uid() = user_id);
```

Click RUN.

---

# 🔐 Authentication Flow

### Register

1. User enters name, email, password
2. Account created in `auth.users`
3. Profile stored in `profiles` table

### Login

1. User enters email & password
2. Supabase verifies credentials
3. On success → redirect to dashboard
4. On failure → show error popup

---

# 🛠️ How to Run Locally

Since this is a static frontend project:

Option 1 (Simple):
- Just double click `login.html`

Option 2 (Recommended):
Use Live Server (VS Code Extension)

1. Install Live Server extension
2. Right click `login.html`
3. Click "Open with Live Server"

---

# 🌍 Deploying

You can deploy using:

- GitHub Pages
- Netlify
- Vercel

Make sure:
- Supabase URL and anon key are correct
- Authentication redirect URLs configured if needed

---

# 📤 How to Add to GitHub

---

## 1️⃣ Initialize Git

Open terminal inside project folder:

```bash
git init
```

---

## 2️⃣ Add Files

```bash
git add .
```

---

## 3️⃣ Commit

```bash
git commit -m "Initial SafePath project setup"
```

---

## 4️⃣ Create GitHub Repository

1. Go to https://github.com
2. Click "New Repository"
3. Name it: `SafePath`
4. Do NOT initialize with README (since we already have one)

---

## 5️⃣ Connect Local Repo to GitHub

Copy the repo URL and run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/SafePath.git
git branch -M main
git push -u origin main
```

---

# 🔒 Security Notes

- Row Level Security (RLS) enabled
- Users can only access their own data
- Supabase Auth handles password encryption
- Never expose service_role key in frontend

---

# 🚀 Future Improvements

- ✏ Edit/Delete emergency contacts
- 📍 Live location sharing
- 📩 SMS integration
- 🚨 Real-time SOS alerts
- 🌙 Dark mode toggle
- 🗺️ Real map integration (Google Maps / Mapbox)

---

# 👨‍💻 Author

Developed as part of a personal safety web application project.

---

# 📄 License

This project is open-source and free to use for learning purposes.
