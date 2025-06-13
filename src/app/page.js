// src/app/page.js (or any server component)
import prisma from '../lib/prisma';

export default async function Page() {
  const actors = await prisma.actor.findMany(); // Example: fetch all actors

  return (
    <div>
      <h1>Actors</h1>
      <ul>
        {actors.map(actor => (
          <li key={actor.actor_id}>{actor.first_name} {actor.last_name}</li>
        ))}
      </ul>
    </div>
  );
}