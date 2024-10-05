"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PricingRule, RuleCard } from "./components";
import MOCK_DATA from './data.json'

// see https://www.framer.com/motion/reorder/##drag-triggers
export default function ReorderTask() {
  const [isReordering, setReordering] = useState(false);
  const [pricingRules, setPricingRules] = useState<PricingRule[]>(MOCK_DATA);

  const handleCancel = () => {
    setPricingRules(MOCK_DATA);
    setReordering(false);
  };

  return (
    <main className="container min-h-screen py-14 flex flex-col items-center">
      <div className="flex justify-between w-full mb-8">
        <h1 className="text-4xl font-semibold">Pricing Rules</h1>
        <div className="flex gap-4">
          {isReordering ? (
            <>
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={() => setReordering(false)}>Save changes</Button>
            </>
          ) : (
            <>
              <Button
                variant="secondary"
                className=""
                onClick={() => setReordering(true)}
              >
                Reorder rules
              </Button>
              <Button disabled>Create new criteria</Button>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {pricingRules.map((data) => (
          <RuleCard data={data} isReordering={isReordering} key={data.id} />
        ))}
      </div>
    </main>
  );
}
