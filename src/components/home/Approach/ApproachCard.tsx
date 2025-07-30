// components/ApproachCard.tsx
import React from "react";
import { type ApproachStep } from "@/utils/interface";

interface Props {
  step: ApproachStep;
  isLast: boolean;
}

const ApproachCard: React.FC<Props> = ({ step }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-3 w-full">
      <span className="flex flex-col justify-start items-start gap-1">
        <p className="text-gray-500 text-para-small md:text-body-small font-bold uppercase text-md">
          {step.icon}
        </p>
        <h4 className="text-para md:text-h6 font-semibold leading-tight">{step.title}</h4>
      </span>
      <p className="text-body-small md:text-body xl:text-para text-gray-600">{step.description}</p>
      {step.icon !== "Step 3" && <hr className="w-full border-t border-gray-300 mt-4" />}
    </div>
  );
};

export default ApproachCard;
