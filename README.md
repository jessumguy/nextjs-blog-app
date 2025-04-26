# 24/04/2025 - First Next.js Blog App w/ Kinde Login Authentication, Prisma and SQLite db


https://github.com/user-attachments/assets/ba27d9bc-0f16-4414-97a5-ac3d54f20b85


### Issue encountered

1. Getting error during build process on Vercel
- Unable to debug this. It builds fine locally after running `npm run build` though.
- May have something to do with downgrading next.js from v15 to 14.2.28 as I  

| Local build | Vercel build error |
| ---| --- |
|![image](https://github.com/user-attachments/assets/8cf7faa8-19d6-44bd-baac-8762ba5a0baf) | ![image](https://github.com/user-attachments/assets/b21040d1-de16-498d-8e4b-94a57d988c5c)|

# Notes

## 1. Next.js Server

1. Nav Link Routing, usePathname() (nav links in header)
2. Image component (header logo)
3. Server components - GET (fetch in posts>[id] folders)
4. Server actions - POST/PUT/DELETE (createPost in create-post folder)
5. Suspense component - Loading state (loading post.title and post.body)
6. Kinde Authentication - Two ways: getKindeServerSession() and Middleware

## 2. Next.js Client

1. Client components - Events, React Hooks, Context API Statement management
2. Tailwind CSS

## 3. Database

1. Prisma ORM
2. SQLite


# Source:

[Your first full-stack Next.js project (Server Components, Server Actions, Suspense, Kinde)](https://www.youtube.com/watch?v=y7JCnfbETPs&t=6669s)
