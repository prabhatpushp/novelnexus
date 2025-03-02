import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

type SuggestionType = "error" | "warning" | "suggestion" | "style" | "filler" | "adverb" | "passive";

interface TextEditingPanelProps {
    readabilityScore: string;
    writingGrade: string;
    suggestions: Array<{
        type: SuggestionType;
        count: number;
        message: string;
    }>;
}

export function TextEditingPanel({
    readabilityScore = "It's ok",
    writingGrade = "10th grade",
    suggestions = [
        { type: "error", count: 1, message: "sentence is very hard to read. Divide or simplify it." },
        { type: "warning", count: 1, message: "sentence is a bit hard to read. Try to simplify it." },
        { type: "suggestion", count: 18, message: "better alternatives or suggestions." },
        { type: "style", count: 2, message: "style mistakes. Clean it up by rewriting or removing it." },
        { type: "filler", count: 1, message: "Filler1. They don't add much to your text. Can be removed." },
        { type: "adverb", count: 1, message: "adverb. Looks good." },
        { type: "passive", count: 1, message: "Passive voice. Try to rewrite the sentence in active voice." },
    ],
}: TextEditingPanelProps) {
    const getColorForType = (type: SuggestionType): string => {
        const colors: Record<SuggestionType, string> = {
            error: "bg-red-100",
            warning: "bg-yellow-100",
            suggestion: "bg-blue-100",
            style: "bg-green-100",
            filler: "bg-orange-100",
            adverb: "bg-cyan-100",
            passive: "bg-cyan-100",
        };
        return colors[type] || "bg-gray-100";
    };

    return (
        <div className="flex flex-col">
            <div className="p-4 border-b">
                <h2 className="text-lg font-semibold mb-4">Text editing</h2>
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm">Readability</span>
                        <span className="text-sm text-orange-500">{readabilityScore}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm">Writing score</span>
                        <span className="text-sm text-orange-500">{writingGrade}</span>
                    </div>
                </div>
            </div>
            <ScrollArea className="flex-1">
                <div className="p-4 space-y-2">
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className={`p-3 rounded-lg ${getColorForType(suggestion.type)} flex items-start gap-3`}>
                            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-md text-sm font-medium">{suggestion.count}</div>
                            <p className="text-sm">{suggestion.message}</p>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
