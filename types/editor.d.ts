declare module '@editorjs/marker' {
    import { BlockTool, BlockToolConstructable } from '@editorjs/editorjs';
    export default class Marker implements BlockTool {
        static get toolbox(): any;
        constructor(data: any);
        render(): HTMLElement;
        save(block: HTMLElement): any;
    }
}

declare module '@editorjs/quote' {
    import { BlockTool, BlockToolConstructable } from '@editorjs/editorjs';
    export default class Quote implements BlockTool {
        static get toolbox(): any;
        constructor(data: any);
        render(): HTMLElement;
        save(block: HTMLElement): any;
    }
}

declare module '@editorjs/inline-code' {
    import { BlockTool, BlockToolConstructable } from '@editorjs/editorjs';
    export default class InlineCode implements BlockTool {
        static get toolbox(): any;
        constructor(data: any);
        render(): HTMLElement;
        save(block: HTMLElement): any;
    }
} 