import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// componenets

import Navbar from "../components/Navbar";
export default async function DashboardLayout({ children }) {
  const supebase = createServerComponentClient({ cookies });
  const { data } = await supebase.auth.getSession();

  if (!data.session) {
    redirect("/login");
  }

  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  );
}
