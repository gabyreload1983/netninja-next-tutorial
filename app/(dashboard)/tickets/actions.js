"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function addTicket(formData) {
  const ticket = Object.fromEntries(formData);

  const supebase = createServerActionClient({ cookies });

  const {
    data: { session },
  } = await supebase.auth.getSession();

  const { error } = await supebase
    .from("tickets")
    .insert({ ...ticket, user_email: session.user.email });

  if (error) {
    throw new Error("Could not add the new tickets");
  }

  revalidatePath("/tickets");
  redirect("/tickets");
}
