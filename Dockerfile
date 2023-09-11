FROM node:18 AS ui-build
WORKDIR /usr/src/app
COPY frontend/ ./frontend/
RUN cd frontend && npm install && npm run build
# Use a lightweight Nginx image as the runtime environment

FROM node:18 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/frontend/build ./frontend/build
COPY backend/package*.json ./backend/
RUN cd backend && npm install
COPY backend/server.js ./backend/
EXPOSE 80
CMD ["node", "./backend/server.js"]