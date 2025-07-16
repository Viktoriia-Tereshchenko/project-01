import { cn } from "clsx-for-tailwind";
import { useState } from "react";

export default function ToggleCard() {
  const [isBlue, setIsBlue] = useState<boolean>(false);

  function handleColorChange() {
    setIsBlue((prev) => !prev);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-4">
      <div
        className={cn(
          "h-24 w-48 rounded-xl shadow-lg flex items-center justify-center",
          {
            "bg-blue-400": isBlue,
            "bg-yellow-300": !isBlue,
          }
        )}
      >
        ToggleCard
      </div>
      <button
        type="button"
        onClick={handleColorChange}
        className="px-4 py-2 bg-pink-300 text-white rounded-md hover:bg-pink-500"
      >
        Toggle card color
      </button>
    </div>
  );
}
