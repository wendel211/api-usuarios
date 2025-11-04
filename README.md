# User Management API

A modular and scalable RESTful API built with NestJS, TypeORM, and PostgreSQL. Fully containerized with Docker and documented using Swagger.

## Overview

**User Management API** is a backend service designed for managing users and profiles. It leverages NestJS for structure and scalability, TypeORM for data persistence, and PostgreSQL as the relational database. All components run in isolated Docker containers for easy setup and deployment.

### Key Features

- Modular architecture with Users and Profiles modules
- TypeORM integration with PostgreSQL
- Interactive API documentation via Swagger
- Docker-based development environment
- Environment-based configuration

## Tech Stack

- **NestJS** - Backend framework for scalable Node.js applications
- **TypeORM** - ORM for PostgreSQL database integration
- **PostgreSQL** - Primary relational database
- **Docker Compose** - Container orchestration for local development
- **Swagger** - API documentation and testing UI

## Setup & Installation

### Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- npm or yarn

### Installation Steps

1. Clone the repository
```bash
git clone https://github.com/wendel211/api-usuarios.git
cd api-usuarios
```

2. Start the PostgreSQL container
```bash
docker-compose up -d
```

3. Install dependencies
```bash
npm install
```

4. Create a `.env` file in the project root
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=nestuser
DB_PASS=nestpass
DB_NAME=nestdb
```

5. Run the application
```bash
npm run start:dev
```

The server will start at `http://localhost:3000`

Swagger documentation available at `http://localhost:3000/api`

## Project Structure

```
src/
├── app.module.ts              # Root application module
├── main.ts                    # Application entry point
├── users/                     # Users module
│   ├── user.entity.ts
│   ├── users.controller.ts
│   └── users.service.ts
└── profiles/                  # Profiles module
    ├── profile.entity.ts
    ├── profiles.controller.ts
    └── profiles.service.ts
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run start` | Start the app in production mode |
| `npm run start:dev` | Start the app in development mode with hot-reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run lint` | Run ESLint |

## Docker Configuration

The `docker-compose.yml` file sets up a PostgreSQL 16 container with the following configuration:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16
    container_name: nest_postgres
    restart: always
    environment:
      POSTGRES_USER: nestuser
      POSTGRES_PASSWORD: nestpass
      POSTGRES_DB: nestdb
    ports:
      - '5432:5432'
    volumes:
      - ./pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U nestuser"]
      interval: 5s
      timeout: 5s
      retries: 5
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Retrieve all users |
| POST | `/users` | Create a new user |
| GET | `/profiles` | Retrieve all profiles |
| POST | `/profiles` | Create a new profile |

All endpoints are documented and testable through the Swagger interface at `/api`.

## License

This project is licensed under the MIT License.

## Author

**Wendel Muniz**  
Developer & Software Engineer | Systems Information Student @ IFBA

---

For more information or to contribute, visit the [GitHub repository](https://github.com/wendel211/api-usuarios).
