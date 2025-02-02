# StableMax - > Text To Image Generator For Free

## Link - > https://stable-max-green.vercel.app

# Some IMP Website Links

- Next.js -> https://nextjs.org/docs
- Schadcn UI -> https://ui.shadcn.com/docs
- Framer Motion -> https://framermotion.framer.website/
- neonDB -> https://console.neon.tech/
- prisma -> https://www.prisma.io/
- next auth google prisma -> https://next-auth.js.org/v3/adapters/prisma
- google cloud -> https://console.cloud.google.com/
- pollination ai -> https://pollinations.ai/

# ENV

- DATABASE_URL=
- GOOGLE_CLIENT_ID=GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET=GOOGLE_CLIENT_SECRET
- NEXTAUTH_SECRET=

# Tech Stack

- Frontend + Backend
- Next js
- TypeScript
- Tailwind
- Prisma (ORM) + Postgres (using neonDB)
- Scadcn UI (UI component library) + Framer Motion (animation library can make complex animation simply)
- Fully Responsive
- Server Side Rendering
- Vercel Deployment

# Why to use Next js

- Text to image generation online website
- Free
- > Built with next js
- Easy to deploy on vercel
- server side rendering (Make applycation very fast)
- Code is much maintainable
- Can have nice security
- We can use next outh (authentication setup will get easy)
- Next js do image optimization on it's own
- Image Based Software (Don't need to use any extra library)
- Routing is easy and there are lots of benifit

# Terminal commands

- npx create-next-app@latest
- npm run dev

- > Shadcn UI
- npx shadcn@latest init
- npx install next-themes (Dark Mode)
- npx shadcn@latest add button (Button)
- npx shadcn@latest add avatar (Add a avatar)
- npx shadcn@latest add input (Add a input)
- npx shadcn@latest add form (Add a form)
- npx shadcn@latest add toast (Add a toast)

- > Framer Motion
- npm i framer-motion

- > Prisma
- npm i prisma
- npx prisma init
- npx prisma migrate dev --name init (create migration table -> means how many times we make changes in database)
- npx prisma generate (generate prisma client)
- npx prisma studio (we can see neonDB database)
- npm install @prisma/client @next-auth/prisma-adapter

- npm i next-auth (For Authentication)
- npm i react-icons (For Icons)

- > git reset -soft HEAD^ (It will give back the previous files that you added to github so you can add them again if you have some issue also changed file will not be shown in history -> i added .env file by mistake)
- git rm --cached .env
- git commit --amend -m "Fixing issue"
- git pull
- git push

- > node
- const crypto = require("crypto")
- crypto.randomBytes(128).toString("hex")

# Create Folder And Files

- src -> cretae folder (components)
- components -> create file (theme-provider.tsx)
- components -> create file (Header.tsx)
- app -> create folder (api) -> cretae folder (auth) -> create folder ([...nextauth]) -> create file (route.ts)
- src -> create folder (utils) -> create file (authOptions.ts)
- utils -> create file (prisma.ts)
- app -> create file (Provider.tsx)
- app -> create folder (cretae) -> create file (page.tsx)
- app -> create file (template.tsx)
- api -> create folder (image) -> create file (route.ts)
- src -> create folder (types) -> create file (session.d.ts)
- app -> create folder (profile) -> cretae file (page.tsx)

# Some issues

- npm i @radix-ui/react-icons
