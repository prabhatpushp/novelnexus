"use client";

import { EditorContainer } from "@/components/editor/editor-container";
import { useZenMode } from "@/store/use-zen-mode";
import { cn } from "@/lib/utils";

export default function Home() {
    const { isZenMode } = useZenMode();

    return (
        <div className={cn("h-full w-full bg-background transition-all duration-300", isZenMode && "bg-white dark:bg-gray-950")}>
            <EditorContainer />
        </div>
    );
}
