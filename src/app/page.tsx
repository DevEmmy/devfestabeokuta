'use client'

import { Dispatch, useEffect, useState } from "react";
import NavBar from "@/components/nav/NavBar";
import Homepage from "@/components/pages/Homepage";
import InvertedCursor from "@/components/ui/InvertedCursor";

export default function Home() {
  return (<>
    <NavBar />
    <Homepage />
  </>
  );
}
