# CharityCode

A full-stack social platform connecting developers with organizations needing technical solutions.

## 🌐 Live Site

[Visit CharityCode](https://charitycoder.com/)

## 📖 Description

CharityCode enables:

- **Developers** to contribute their coding skills to meaningful projects.
- **Organizations** to access talented developers for websites, apps, and digital tools.

## 🚀 Overview

- **Project Posting**: Organizations can create detailed project posts describing their needs
- **Developer Exploration**: Developers can browse and discover projects that match their skills and interests
- **Solution Submission**: submission system for developers to propose solutions
- **Community Features**: Like system to highlight popular projects
- **User Dashboard**: Personalized space for managing posts and tracking submissions

## 📦 Dependencies

This project is built with:

- **Next.js 15**
- **Firebase**
- **Bootstrap 5**
- **TypeScript**
- **React**
- **Date-fns**
- **use-debounce**

## 🛠️ Getting Started

First, install dependencies:

```bash
npm install
```

Set up a Firebase project at [https://firebase.google.com/](https://firebase.google.com/) and copy your client credentials into a `.env.local` file.

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📁 Project Structure

```
app/
├── components/
│   ├── auth/
│   │   ├── LoginCard.tsx
│   │   └── auth-buttons.tsx
│   ├── nav/
│   │   ├── NavBar.tsx
│   │   ├── SideNav.tsx
│   │   ├── SearchBar.tsx
│   │   ├── MenuButton.tsx
│   │   └── Footer.tsx
│   ├── posts/
│   │   ├── ProjectPost.tsx
│   │   ├── PostFeed.tsx
│   │   ├── LikeButton.tsx
│   │   ├── Submission.tsx
│   │   ├── SubmissionFeed.tsx
│   │   └── SubmitForm.tsx
│   ├── dashboard/
│   │   ├── CreatePost.tsx
│   │   ├── PersonalFeed.tsx
│   │   └── OldPost.tsx
│   └── Avatar.tsx
├── __tests__/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── nav/
│   │   └── posts/
│   └── context/
├── [postid]/           # Dynamic post detail page
├── dashboard/          # User dashboard page
├── explore/            # Browse projects page
├── privacy/
├── terms/
├── layout.tsx
├── page.tsx
└── globals.css
```
