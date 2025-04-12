
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Toggle } from "@/components/ui/toggle";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // After mounting, we can safely show the toggle
  // This prevents hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className="w-9 h-9"></div>; // Placeholder to prevent layout shift
  }
  
  return (
    <Toggle 
      pressed={theme === "dark"} 
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      className={`p-2 relative overflow-hidden transition-all duration-300 ease-in-out ${
        theme === 'dark' 
          ? 'bg-gray-900 hover:bg-gray-800 border-blue-900/40 dark-glow' 
          : 'bg-blue-50 hover:bg-blue-100 border-blue-200'
      } border rounded-full`}
    >
      <div className="relative z-10">
        {theme === "dark" ? (
          <Moon className="h-5 w-5 text-yellow-300" />
        ) : (
          <Sun className="h-5 w-5 text-amber-500" />
        )}
      </div>
      
      {/* Animated background effect */}
      <div 
        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 to-gray-950' 
            : 'bg-gradient-to-br from-blue-50 to-white'
        } rounded-full`}
        style={{
          transform: theme === 'dark' ? 'scale(1)' : 'scale(0)',
          transformOrigin: 'center'
        }}
      />
    </Toggle>
  );
};
