"use client";

import { ButtonGroup, Button, Drawer } from "@/Components/elements";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <body className="light">
        <div className="bg-white dark:bg-black w-full h-screen">
          <Drawer
            title="Title"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            dasds
          </Drawer>
          <Button onClick={() => setIsOpen(true)}>dasd</Button>
        </div>
      </body>
    </main>
  );
}
