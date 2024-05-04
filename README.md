# alexanderspurlock.com

[Visit](https://www.alexanderspurlock.com)

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://www.cockroachlabs.com)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Running Locally

```bash
bun install
bun dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/leerob/leerob.io/blob/main/.env.example).

## Database Schema

```sql
CREATE TABLE redirects (
  id SERIAL PRIMARY KEY,
  source VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  permanent BOOLEAN NOT NULL
);

CREATE TABLE views (
  slug VARCHAR(255) PRIMARY KEY,
  count INT NOT NULL
);
```

## License
Template by [Lee Robinson](https://vercel.com/templates/next.js/nextjs-portfolio)