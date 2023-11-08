import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const ticket = await request.json();

  // get supebase instance
  const supebase = createRouteHandlerClient({ cookies });

  // get current user session
  const {
    data: { session },
  } = await supebase.auth.getSession();

  // insert the data
  const response = await supebase
    .from("tickets")
    .insert({ ...ticket, user_email: session.user.email })
    .select()
    .single();

  return NextResponse.json(response);
}
