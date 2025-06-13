// src/app/page.js (or any server component)
import prisma from '../lib/prisma';
import { createClient } from '@/utils/supabase/server';

export default async function Instruments() {
  const supabase = await createClient();

  const { data: slectt } = await supabase.from("slect").select();

  return <pre>{JSON.stringify(slectt)}</pre>
}
/*
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
*/