# Use a imagem Node.js como base
FROM node:14-alpine

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código da sua aplicação para o diretório de trabalho
COPY . .

# Defina a porta na qual a aplicação será executada
EXPOSE 3000

# Defina o comando para iniciar a aplicação
CMD [ "npm", "start" ]
