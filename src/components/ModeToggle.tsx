import * as React from "react";
import { Moon, Sun, SunMoon } from "lucide-react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<"theme-light" | "dark" | "system">("theme-light");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  const handleThemeChange = (value: "theme-light" | "dark" | "system") => {
    setThemeState(value);
  };

  return (
    <ToggleGroup size={"lg"} type="single" value={theme} onValueChange={handleThemeChange}>
      <ToggleGroupItem value="theme-light" aria-label="Toggle light">
        <Sun className="h-6 w-6" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle dark">
        <Moon className="h-6 w-6" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="Toggle system">
        <SunMoon className="h-6 w-6" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}


    //   )
    // }

    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" size="icon">
    //       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setThemeState("theme-light")}>Light</DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setThemeState("dark")}>Dark</DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setThemeState("system")}>System</DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>