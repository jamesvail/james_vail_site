"use client";

// reusable loading for layout's suspense box.

export default function LoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[50vh]">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-accent/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-accent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
