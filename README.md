# 🚀 Inolib

Inolib is an accessible website

## 📜 Summary

This repository contains the source code of the INOLIB website, dedicated to promoting digital accessibility and inclusion.

- [How to run this app](#-how-to-run-this-app)

## 👨🏽‍💻 How to run this app

### 📦 Node Package Manager

This project uses pnpm as its package manager.
Make sure you have pnpm v7 or higher installed.

To check your pnpm version:

```
pnpm --version

```

If you need to install pnpm:

```
npm install -g pnpm
```

on both /frontend and /backend folders

### ♻️ Run on Front End

To run on Development mode:

go to /frontend folder then :

```
pnpm run serve:development
```

then go to : http://localhost:8000/

### ♻️ Run on Back End

Before running the backend, you need to configure environment variables.

Create a .env file

```
cd packages/app-strapi
touch .env
```

Generate and add your API token salt

Strapi requires a secure API_TOKEN_SALT for hashing API tokens.
Generate a random salt using Node.js or OpenSSL:

Using Node.js:

```
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Or using OpenSSL:

```
openssl rand -hex 64
```

Copy the generated string and add it to your .env file like this:

```
API_TOKEN_SALT=your_generated_random_string_here

```
