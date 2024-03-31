import React, { memo, ReactNode } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { UpdateDrawer } from "../drawer-demo";
import { LockClosedIcon, LockOpen2Icon } from "@radix-ui/react-icons";
import { Badge, CheckCircle } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle 


} from "../ui/card";
import clsx from "clsx";

export type TurboNodeData = {
  type: "daily" | "weekly" | "monthly" | "quarterly" | "yearly";
  date: Date;
  time: string;
  description: string;
  goal: string;
  attachable: boolean;
};

const TurboNode = (props: NodeProps<TurboNodeData>) => {
  const { data } = props;
  return (
    <>
     <Handle position={Position.Top} type="target" className="!-bottom-2 !h-4 !w-4 dark:bg-neutral-800 z-10" />
      <Card
        // onClick={(e) => {
        //   e.stopPropagation();
        //   const val = state.editor.elements.find((n) => n.id === nodeId);
        //   if (val)
        //     dispatch({
        //       type: "SELECTED_ELEMENT",
        //       payload: {
        //         element: val,
        //       },
        //     });
        // }}
        className="relative max-w-[400px] dark:border-muted-foreground/70"
      >
        <CardHeader className="flex flex-row items-center gap-4">
          <div>test</div>
          <div>
            <CardTitle className="text-md">{data.goal}</CardTitle>
            <CardDescription>
              <p className="text-xs text-muted-foreground/50">
                <b className="text-muted-foreground/80">ID: </b>
               34
              </p>
              <p>{data.description}</p>
            </CardDescription>
          </div>
        </CardHeader>
        <Badge className="absolute right-2 top-2">
          {data.type}
        </Badge>
        <div
          className="absolute left-3 top-4 h-2 w-2 rounded-full bg-green-500 animation-pulse"
        ></div>
      </Card>
      <Handle className="!-bottom-2 !h-4 !w-4 dark:bg-neutral-800" type="source" position={Position.Bottom} id="a" />
    </>
  );
};

export default memo(TurboNode);
