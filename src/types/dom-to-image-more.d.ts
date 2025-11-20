declare module 'dom-to-image-more' {
  type StyleRecord = Partial<Record<keyof CSSStyleDeclaration, string>>;

  interface DomToImageOptions {
    filter?: (node: Node) => boolean;
    bgcolor?: string;
    width?: number;
    height?: number;
    quality?: number;
    style?: StyleRecord;
    imagePlaceholder?: string;
    cacheBust?: boolean;
    copyDefaultStyles?: boolean;
    disableInlineImages?: boolean;
    disableEmbedFonts?: boolean;
    useCredentials?: boolean;
    useCredentialsFilters?: Array<RegExp | string>;
    httpTimeout?: number;
    styleCaching?: 'strict' | 'relaxed';
    corsImg?: {
      url: string;
      method?: 'get' | 'post';
      headers?: Record<string, string>;
      data?: Record<string, unknown>;
    };
    adjustClonedNode?: (clonedNode: HTMLElement) => void;
    filterStyles?: (propertyName: string) => boolean;
    scale?: number;
    onclone?: (clonedDoc: Document) => void;
  }

  interface DomToImage {
    toSvg(node: Node, options?: DomToImageOptions): Promise<string>;
    toPng(node: Node, options?: DomToImageOptions): Promise<string>;
    toJpeg(node: Node, options?: DomToImageOptions): Promise<string>;
    toBlob(node: Node, options?: DomToImageOptions): Promise<Blob>;
    toPixelData(node: Node, options?: DomToImageOptions): Promise<Uint8ClampedArray>;
    toCanvas(node: Node, options?: DomToImageOptions): Promise<HTMLCanvasElement>;
    impl: Record<string, unknown>;
  }

  const domToImage: DomToImage;
  export type { DomToImageOptions, DomToImage };
  export default domToImage;
}

