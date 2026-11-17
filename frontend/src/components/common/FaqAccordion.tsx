"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number | null;
  cardBg?: "white" | "slate";
}

export default function FaqAccordion({
  items,
  allowMultiple = true,
  defaultOpenIndex = null,
  cardBg = "white",
}: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex !== null ? [defaultOpenIndex] : []
  );

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  const bgClasses = cardBg === "white" ? "bg-white" : "bg-slate-50";

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${bgClasses} ${
              isOpen
                ? "border-amber-500 shadow-md shadow-amber-600/5 ring-1 ring-amber-500/20"
                : "border-slate-200 shadow-xs hover:border-amber-300 hover:shadow-sm"
            }`}
          >
            {/* Clickable Header Button */}
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors cursor-pointer select-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-3 sm:gap-4 pr-2">
                <span
                  className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold mt-0.5 transition-colors ${
                    isOpen
                      ? "bg-amber-600 text-white"
                      : "bg-amber-50 text-amber-800 border border-amber-200"
                  }`}
                >
                  Q
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-900 font-serif leading-snug">
                  {item.q}
                </span>
              </div>

              {/* + Icon Button */}
              <div
                className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "bg-amber-600 border-amber-600 text-white shadow-sm shadow-amber-600/20 rotate-45"
                    : "bg-white border-slate-300 text-slate-700 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-800"
                }`}
                aria-hidden="true"
              >
                <Plus className="h-5 w-5 stroke-[2.5]" />
              </div>
            </button>

            {/* Collapsible Answer */}
            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 animate-fadeIn">
                <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed pl-10 sm:pl-11">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
