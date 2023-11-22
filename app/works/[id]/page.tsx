import React from "react";
import WorkDetail from "@/app/components/Works/WorkDetail/WorkDetail";

const OneWork = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <WorkDetail params={params} />
    </div>
  );
};

export default OneWork;
