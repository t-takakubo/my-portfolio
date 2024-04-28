import React from "react";
import Work from "@/components/Works/Work";

export const WorksPage = () => {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-3xl font-bold">Works</div>
      </div>
      <Work />
    </div>
  );
};
