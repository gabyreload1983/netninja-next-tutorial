import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// componenets

import Navbar from "../components/Navbar";
export default async function DashboardLayout({ children }) {
  const supebase = createServerComponentClient({ cookies });
  const { data } = await supebase.auth.getSession();

  return (
    <>
      <Navbar user={data.session?.user} />
      {children}
    </>
  );
}
