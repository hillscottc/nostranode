FROM nodesource/vivid

ADD package.json package.json
RUN npm install

ENV NODE_ENV dev

# Add your source files
ADD . .
EXPOSE 3000
CMD ["npm", "start"]