"use client";

import React, { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  fullWidth?: boolean;
};

const HEX_MAP: Record<string, string> = {
  "mottivve-100": "#1f94cc",
  "mottivve-200": "#ff4400",
  "mottivve-300": "#114272",
};

function pickMottivveFromClassName(className?: string) {
  const cls = className || "";
  if (cls.includes("mottivve-200")) return "mottivve-200";
  if (cls.includes("mottivve-300")) return "mottivve-300";
  return "mottivve-100";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", loading = false, disabled = false, fullWidth = false, children, ...props }, ref) => {
    const variantKey = pickMottivveFromClassName(className);
    const main = HEX_MAP[variantKey];                 // fundo
    const ring = variantKey === "mottivve-300" ? "#1f94cc" : "#114272"; // ring contrast
    const text = "#FFFFFF";

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={[
          "relative inline-flex items-center justify-center gap-2",
          "h-12 px-6 rounded-xl font-semibold select-none",
          "transition-all duration-200",
          "shadow-md hover:shadow-lg active:scale-[0.99]",
          "focus:outline-none focus-visible:ring-4",
          "disabled:opacity-60 disabled:cursor-not-allowed",
          fullWidth ? "w-full" : "",
          className, // pode adicionar extras (ex: mt-4, w-full, etc)
        ].join(" ")}
        style={{
          backgroundColor: main,                 // ✅ não depende do tailwind
          color: text,
          boxShadow: `0 12px 30px -18px ${ring}80`,
        }}
        {...props}
      >
        {/* brilho leve (sempre visível) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(255,255,255,0.05), rgba(0,0,0,0.05))",
          }}
        />

        {/* conteúdo */}
        <span className="relative">
          {loading ? "Carregando..." : children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
