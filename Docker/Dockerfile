FROM node:lts-alpine3.19 as base

FROM base AS temp

RUN apk add --no-cache libc6-compat

RUN npm install -g npm@latest

RUN mkdir frontend-builder

# Building Stage

WORKDIR /frontend-builder

COPY ./nanosoft-app/package.json ./

COPY ./nanosoft-app/package-lock.json ./

RUN npm install

COPY ./nanosoft-app ./

RUN npm run build

# Production Stage

FROM base AS runner

WORKDIR /frontend-prod

COPY --from=temp /frontend-builder/.next/standalone ./

COPY --from=temp /frontend-builder/.next/static ./.next/static

COPY --from=temp /frontend-builder/public ./public

CMD [ "/bin/sh", "-c", "node server.js" ]