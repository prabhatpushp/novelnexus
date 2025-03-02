"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Folder, Home, BookOpen, Share2, FileText, Star, BarChart2, User, Plus } from "lucide-react";
import Link from "next/link";
import { useZenMode } from "@/store/use-zen-mode";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
    const { isZenMode } = useZenMode();

    if (isZenMode) return null;

    const folders = [
        { name: "Diary attempt 234", path: "/diary-234" },
        { name: "Shosho's journey & other stories", path: "/journey", active: true },
        { name: "Work Forms and Infographics", path: "/work-forms" },
        { name: "Chapter 1: It Begins", path: "/chapter-1" },
        { name: "Chapter 2: The New Wave", path: "/chapter-2" },
        { name: "Chapter 3: The Long way home", path: "/chapter-3" },
    ];

    return (
        <div className={cn(" w-60 border-r transition-all duration-300", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-4 px-4 text-lg font-semibold">shosho</h2>
                    <Button className="w-full justify-start" variant="secondary">
                        New story
                    </Button>
                    <div className="space-y-1 mt-4">
                        <Button variant="ghost" className="w-full justify-start">
                            <Home className="mr-2 h-4 w-4" />
                            Workspace
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <BookOpen className="mr-2 h-4 w-4" />
                            All stories
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <Share2 className="mr-2 h-4 w-4" />
                            Shared
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <FileText className="mr-2 h-4 w-4" />
                            Blog
                        </Button>
                    </div>
                </div>
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-sm font-semibold">Favorites</h2>
                    <p className="px-4 text-sm text-muted-foreground">No favorite folders or stories</p>
                </div>
                <div className="px-3 py-2">
                    <div className="flex items-center justify-between px-4">
                        <h2 className="text-sm font-semibold">Folders</h2>
                        <Button variant="ghost" size="icon" className="h-5 w-5">
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                    <ScrollArea className="h-[300px] px-1">
                        <div className="space-y-1 p-2">
                            {folders.map((folder) => (
                                <Button key={folder.path} variant={folder.active ? "secondary" : "ghost"} className="w-full justify-start">
                                    <Folder className="mr-2 h-4 w-4" />
                                    {folder.name}
                                </Button>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
            <div className="mt-auto fixed bottom-0 w-60 border-t">
                <div className="p-3 flex items-center gap-2">
                    <BarChart2 className="h-4 w-4" />
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">Writing stats</span>
                        <span className="text-sm text-muted-foreground">0/300</span>
                    </div>
                </div>
                <Button variant="ghost" className="w-full justify-start p-3">
                    <User className="mr-2 h-4 w-4" />
                    Eugen Esanu
                </Button>
            </div>
        </div>
    );
}
