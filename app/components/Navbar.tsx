"use client";
import { github } from "@/app/utils/icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ThemeToggler from "./ThemeToggler";
import SearchDialog from "./SearchDialog";

const Navbar = () => {
  const router = useRouter();

  return (
    <header>
      <div className="w-full py-4 flex items-center justify-between">
        <div className="left"></div>
        <div className="search-container flex flex-shrink-0 w-full gap-2 sm:w-fit items-center">
          <SearchDialog />
          <div className="btn-group flex items-center gap-2">
            <ThemeToggler />
            <Button
              variant="outline"
              onClick={() =>
                router.push("https://github.com/ozywashere/fsWeatherApp")
              }
              className="source-code flex items-center gap-2"
            >
              {github} Source Code
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
