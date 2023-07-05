"use client";

import { ButtonGroup, Button, Drawer, Dropdown } from "@/Components/elements";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <div className="bg-white dark:bg-black w-full h-screen">
        <Dropdown />
        <Button onClick={() => setIsOpen(true)}>dasd</Button>
      </div>
    </main>
  );
}
