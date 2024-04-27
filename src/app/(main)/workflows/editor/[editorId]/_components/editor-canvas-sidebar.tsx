"use client";
import { EditorCanvasCardType } from "@/lib/types";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React, { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { EditorCanvasDefaultCards } from "@/lib/constant";

import { useFlowStore } from "@/components/turbo/store";
import { Node } from "reactflow";
import { TwitterIcon } from "lucide-react";

type Props = {
  nodes: Node<EditorCanvasCardType>[];
};

const EditorCanvasSidebar = () => {
  const { selectedNode } = useFlowStore();

  return (
    <aside>
      <Tabs
        defaultValue="actions"
        className="h-screen w-full overflow-scroll pb-24"
      >
        <TabsList className="bg-transparent w-full p-8">
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="apps">Apps</TabsTrigger>
        </TabsList>
        <Separator />
        <TabsContent value="actions" className="flex flex-col gap-4 p-4">
          test
        </TabsContent>
        <TabsContent value="settings" className="-mt-6">
          <div className="px-2 py-4 text-center text-xl font-bold">
            {selectedNode.data.title}
          </div>
          <div className="">Input</div>
          <div className="">Actions</div>
          <div className="">Output</div>
          <button>Delete</button>
          <button>Save</button>
        </TabsContent>
      </Tabs>
    </aside>
  );
};

export default EditorCanvasSidebar;
