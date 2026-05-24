"use client";
import CompanionCard from "@/components/CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import { useState } from "react";

export default function CompanionsListClient({ companions: initialCompanions }) {
  const [companions, setCompanions] = useState(initialCompanions);

  const handleBookmarkToggle = (id) => {
    setCompanions((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, bookmarked: !c.bookmarked } : c
      )
    );
  };

  return (
    <section className="companions-grid">
      {companions.map((companion) => (
        <CompanionCard
          key={companion.id}
          {...companion}
          color={getSubjectColor(companion.subject)}
          onBookmarkToggle={handleBookmarkToggle}
        />
      ))}
    </section>
  );
}
