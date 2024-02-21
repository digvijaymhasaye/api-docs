"use client";
import { useRouter } from "next/navigation";
import { ModeToggle } from "../ui/theme-toggle";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function TopBar() {
  const router = useRouter();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        padding: "10px",
      }}
    >
      {/* <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar> */}
      <Button
        onClick={(e) => {
          e.preventDefault();
          router.push("/dashboard");
        }}
      >
        Home
      </Button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ModeToggle />
        <div className="mx-1"></div>
        <Input />
        {/* <input
          type="text"
          placeholder="Search"
          style={{
            borderRadius: "5px",
            padding: "5px",
            // margin: "10px 10px",
            border: "1px solid white",
          }}
        ></input> */}
      </div>
    </div>
  );
}
