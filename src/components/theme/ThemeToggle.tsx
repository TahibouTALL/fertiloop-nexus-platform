
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeContext";
import { toast } from "sonner";

interface ThemeToggleProps {
  label?: boolean;
  description?: boolean;
}

export const ThemeToggle = ({ 
  label = true, 
  description = true 
}: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    toast.success(`Mode ${newTheme === "light" ? "clair" : "sombre"} activé`);
  };

  return (
    <div className="flex justify-between items-center">
      {(label || description) && (
        <div>
          {label && (
            <h3 className="text-lg font-medium text-foreground">
              {theme === "light" ? "Mode clair" : "Mode sombre"}
            </h3>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">
              {theme === "light" 
                ? "Activer le mode sombre" 
                : "Revenir au mode clair"}
            </p>
          )}
        </div>
      )}
      <div className="flex items-center gap-2">
        <Sun className={`h-4 w-4 ${theme === 'light' ? 'text-amber-500' : 'text-muted-foreground'}`} />
        <Switch
          checked={theme === "dark"}
          onCheckedChange={toggleTheme}
          aria-label="Toggle dark mode"
        />
        <Moon className={`h-4 w-4 ${theme === 'dark' ? 'text-blue-300' : 'text-muted-foreground'}`} />
      </div>
    </div>
  );
};
