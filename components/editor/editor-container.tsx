"use client";

import React, { useEffect, useRef, useState } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TextEditingPanel } from "./text-editing-panel";
import { useZenMode } from "@/store/use-zen-mode";
import { Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EditorContainerProps {
    onSave?: (data: OutputData) => void;
    initialData?: OutputData;
}

export function EditorContainer({ onSave, initialData }: EditorContainerProps) {
    const editorRef = useRef<EditorJS | null>(null);
    const [activeTab, setActiveTab] = useState<string>("write");
    const [preview, setPreview] = useState<string>("");
    const { isZenMode, toggleZenMode } = useZenMode();

    useEffect(() => {
        if (!editorRef.current) {
            const editor = new EditorJS({
                holder: "editor",
                tools: {
                    header: Header,
                    list: List,
                    image: Image,
                    quote: Quote,
                    marker: Marker,
                    inlineCode: InlineCode,
                },
                placeholder: "Begin your story here...",
                data: initialData || {
                    blocks: [],
                },
                onChange: async () => {
                    const content = await editor.save();
                    const previewText = content.blocks
                        .map((block) => {
                            switch (block.type) {
                                case "header":
                                    return `${"#".repeat(block.data.level)} ${block.data.text}`;
                                case "paragraph":
                                    return block.data.text;
                                case "list":
                                    return block.data.items.map((item: string) => `• ${item}`).join("\n");
                                case "quote":
                                    return `> ${block.data.text}`;
                                default:
                                    return block.data.text || "";
                            }
                        })
                        .join("\n\n");
                    setPreview(previewText);
                },
            });

            editorRef.current = editor;
        }

        return () => {
            if (editorRef.current) {
                editorRef.current.destroy();
                editorRef.current = null;
            }
        };
    }, [initialData]);

    const handleSave = async () => {
        if (editorRef.current) {
            const content = await editorRef.current.save();
            onSave?.(content);
        }
    };

    return (
        <div className={cn("flex h-full bg-background transition-all duration-300", isZenMode && "bg-white dark:bg-gray-950")}>
            <div className="flex-1">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
                    <div className="border-b px-4 py-2 bg-white dark:bg-gray-950">
                        <div className="flex items-center justify-between">
                            <TabsList className="bg-gray-100/50 dark:bg-gray-800/50">
                                <TabsTrigger value="write" className="relative data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950">
                                    Write
                                </TabsTrigger>
                                <TabsTrigger value="preview" className="relative data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950">
                                    Preview
                                </TabsTrigger>
                            </TabsList>
                            <div className="flex items-center gap-2">
                                <Button onClick={toggleZenMode} variant="ghost" size="sm" className="px-2">
                                    {isZenMode ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                                </Button>
                                <Button onClick={handleSave} size="sm" variant="outline">
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>

                    <TabsContent value="write" className="h-[calc(100%-3rem)] mt-0 bg-white dark:bg-gray-950">
                        <ScrollArea className="h-full">
                            <div className={cn("p-4", isZenMode && "max-w-2xl mx-auto")}>
                                <div id="editor" className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert" />
                            </div>
                        </ScrollArea>
                    </TabsContent>

                    <TabsContent value="preview" className="h-[calc(100%-3rem)] mt-0 bg-white dark:bg-gray-950">
                        <ScrollArea className="h-full">
                            <div className={cn("p-4", isZenMode && "max-w-2xl mx-auto")}>
                                <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert">
                                    {preview.split("\n").map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        </ScrollArea>
                    </TabsContent>
                </Tabs>
            </div>
            {!isZenMode && (
                <div className="w-72 border-l border-border bg-white dark:bg-gray-950">
                    <TextEditingPanel
                        readabilityScore="It's ok"
                        writingGrade="10th grade"
                        suggestions={[
                            { type: "error", count: 1, message: "sentence is very hard to read. Divide or simplify it." },
                            { type: "warning", count: 1, message: "sentence is a bit hard to read. Try to simplify it." },
                            { type: "suggestion", count: 18, message: "better alternatives or suggestions." },
                            { type: "style", count: 2, message: "style mistakes. Clean it up by rewriting or removing it." },
                            { type: "filler", count: 1, message: "Filler1. They don't add much to your text. Can be removed." },
                            { type: "adverb", count: 1, message: "adverb. Looks good." },
                            { type: "passive", count: 1, message: "Passive voice. Try to rewrite the sentence in active voice." },
                        ]}
                    />
                </div>
            )}
        </div>
    );
}
