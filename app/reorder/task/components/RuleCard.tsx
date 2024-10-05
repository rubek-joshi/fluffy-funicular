"use client";
import {
  DragHandleDots2Icon,
  Pencil2Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";

export type PricingRule = {
  id: number;
  airline: string;
  price?: string;
  tripType?: string;
  formula: { adult: string; rounding: number };
};

type Props = { data: PricingRule; isReordering: boolean };

export const RuleCard = ({ data, isReordering }: Props) => {
  return (
    <div className="border border-primary rounded-lg p-4">
      <div className="flex w-full gap-4">
        {isReordering && (
          <div className="p-1">
            <DragHandleDots2Icon height={24} width={24} />
          </div>
        )}

        <div className="flex flex-1 gap-4 justify-between">
          <div className="flex flex-col flex-1 gap-6">
            <div className="flex gap-3 flex-wrap">
              <Badge variant="secondary">Content source: Amadeus</Badge>
              <Badge variant="secondary">Airline: {data.airline}</Badge>
              {data.tripType && (
                <Badge variant="secondary">One Way: {data.tripType}</Badge>
              )}
              {data.price && (
                <Badge variant="secondary">Price: {data.price}</Badge>
              )}
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Forumla</h3>
              <div className="flex gap-3 flex-wrap">
                <Badge variant="secondary">Adult {data.formula.adult}</Badge>
                <Badge variant="secondary">
                  Rounding up to the nearest {data.formula.rounding}
                </Badge>
              </div>
            </div>
          </div>

          {!isReordering && (
            <div className="flex gap-2">
              <Pencil2Icon height={24} width={24} />
              <TrashIcon height={24} width={24} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
