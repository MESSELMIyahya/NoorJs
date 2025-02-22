// __The NoorJs DOM Global Types__

import { _NoorNodeType } from "@noorjs/types";
document.getElementById("")!;
// JSX Types
declare global {
  namespace JSX {
    type Element = HTMLElement;

    interface IntrinsicElements {
      // Basic HTML elements
      div: HTMLAttributes<HTMLDivElement>;
      a: HTMLAttributes<HTMLAnchorElement>;
      button: HTMLAttributes<HTMLButtonElement>;
      figure: HTMLAttributes<HTMLElement>;
      audio: HTMLAttributes<HTMLAudioElement>;
      canvas: HTMLAttributes<HTMLCanvasElement>;
      abbr: HTMLAttributes<HTMLElement>;
      address: HTMLAttributes<HTMLElement>;
      area: HTMLAttributes<HTMLAreaElement>;
      article: HTMLAttributes<HTMLElement>;
      aside: HTMLAttributes<HTMLElement>;
      b: HTMLAttributes<HTMLElement>;
      base: HTMLAttributes<HTMLBaseElement>;
      bdi: HTMLAttributes<HTMLElement>;
      bdo: HTMLAttributes<HTMLElement>;
      blockquote: HTMLAttributes<HTMLQuoteElement>;
      body: HTMLAttributes<HTMLBodyElement>;
      br: HTMLAttributes<HTMLBRElement>;
      caption: HTMLAttributes<HTMLTableCaptionElement>;
      cite: HTMLAttributes<HTMLElement>;
      code: HTMLAttributes<HTMLElement>;
      col: HTMLAttributes<HTMLTableColElement>;
      colgroup: HTMLAttributes<HTMLTableColElement>;
      data: HTMLAttributes<HTMLDataElement>;
      datalist: HTMLAttributes<HTMLDataListElement>;
      dd: HTMLAttributes<HTMLElement>;
      del: HTMLAttributes<HTMLModElement>;
      details: HTMLAttributes<HTMLDetailsElement>;
      dfn: HTMLAttributes<HTMLElement>;
      dialog: HTMLAttributes<HTMLDialogElement>;
      dl: HTMLAttributes<HTMLDListElement>;
      dt: HTMLAttributes<HTMLElement>;
      em: HTMLAttributes<HTMLElement>;
      embed: HTMLAttributes<HTMLEmbedElement>;
      fieldset: HTMLAttributes<HTMLFieldSetElement>;
      figcaption: HTMLAttributes<HTMLElement>;
      footer: HTMLAttributes<HTMLElement>;
      form: HTMLAttributes<HTMLFormElement>;
      h1: HTMLAttributes<HTMLHeadingElement>;
      h2: HTMLAttributes<HTMLHeadingElement>;
      h3: HTMLAttributes<HTMLHeadingElement>;
      h4: HTMLAttributes<HTMLHeadingElement>;
      h5: HTMLAttributes<HTMLHeadingElement>;
      h6: HTMLAttributes<HTMLHeadingElement>;
      head: HTMLAttributes<HTMLHeadElement>;
      header: HTMLAttributes<HTMLElement>;
      hgroup: HTMLAttributes<HTMLElement>;
      hr: HTMLAttributes<HTMLHRElement>;
      html: HTMLAttributes<HTMLHtmlElement>;
      i: HTMLAttributes<HTMLElement>;
      iframe: HTMLAttributes<HTMLIFrameElement>;
      img: HTMLAttributes<HTMLImageElement>;
      input: HTMLAttributes<HTMLInputElement>;
      ins: HTMLAttributes<HTMLModElement>;
      kbd: HTMLAttributes<HTMLElement>;
      keygen: HTMLAttributes<HTMLUnknownElement>;
      label: HTMLAttributes<HTMLLabelElement>;
      legend: HTMLAttributes<HTMLLegendElement>;
      li: HTMLAttributes<HTMLLIElement>;
      link: HTMLAttributes<HTMLLinkElement>;
      main: HTMLAttributes<HTMLElement>;
      map: HTMLAttributes<HTMLMapElement>;
      mark: HTMLAttributes<HTMLElement>;
      menu: HTMLAttributes<HTMLMenuElement>;
      menuitem: HTMLAttributes<HTMLUnknownElement>;
      meta: HTMLAttributes<HTMLMetaElement>;
      meter: HTMLAttributes<HTMLMeterElement>;
      nav: HTMLAttributes<HTMLElement>;
      noscript: HTMLAttributes<HTMLElement>;
      object: HTMLAttributes<HTMLObjectElement>;
      ol: HTMLAttributes<HTMLOListElement>;
      optgroup: HTMLAttributes<HTMLOptGroupElement>;
      option: HTMLAttributes<HTMLOptionElement>;
      output: HTMLAttributes<HTMLOutputElement>;
      p: HTMLAttributes<HTMLParagraphElement>;
      param: HTMLAttributes<HTMLParamElement>;
      picture: HTMLAttributes<HTMLPictureElement>;
      pre: HTMLAttributes<HTMLPreElement>;
      progress: HTMLAttributes<HTMLProgressElement>;
      q: HTMLAttributes<HTMLQuoteElement>;
      rp: HTMLAttributes<HTMLElement>;
      rt: HTMLAttributes<HTMLElement>;
      ruby: HTMLAttributes<HTMLElement>;
      s: HTMLAttributes<HTMLElement>;
      samp: HTMLAttributes<HTMLElement>;
      script: HTMLAttributes<HTMLScriptElement>;
      section: HTMLAttributes<HTMLElement>;
      select: HTMLAttributes<HTMLSelectElement>;
      small: HTMLAttributes<HTMLElement>;
      source: HTMLAttributes<HTMLSourceElement>;
      span: HTMLAttributes<HTMLSpanElement>;
      strong: HTMLAttributes<HTMLElement>;
      style: HTMLAttributes<HTMLStyleElement>;
      sub: HTMLAttributes<HTMLElement>;
      summary: HTMLAttributes<HTMLElement>;
      sup: HTMLAttributes<HTMLElement>;
      table: HTMLAttributes<HTMLTableElement>;
      tbody: HTMLAttributes<HTMLTableSectionElement>;
      td: HTMLAttributes<HTMLTableCellElement>;
      textarea: HTMLAttributes<HTMLTextAreaElement>;
      tfoot: HTMLAttributes<HTMLTableSectionElement>;
      th: HTMLAttributes<HTMLTableHeaderCellElement>;
      thead: HTMLAttributes<HTMLTableSectionElement>;
      time: HTMLAttributes<HTMLTimeElement>;
      title: HTMLAttributes<HTMLTitleElement>;
      tr: HTMLAttributes<HTMLTableRowElement>;
      track: HTMLAttributes<HTMLTrackElement>;
      u: HTMLAttributes<HTMLElement>;
      ul: HTMLAttributes<HTMLUListElement>;
      var: HTMLAttributes<HTMLElement>;
      video: HTMLAttributes<HTMLVideoElement>;
      wbr: HTMLAttributes<HTMLElement>;

      // SVG elements
      svg: SVGAttributes<SVGSVGElement>;
      circle: SVGAttributes<SVGCircleElement>;
      rect: SVGAttributes<SVGRectElement>;
      line: SVGAttributes<SVGLineElement>;
      path: SVGAttributes<SVGPathElement>;
      text: SVGAttributes<SVGTextElement>;
      g: SVGAttributes<SVGGElement>;
      defs: SVGAttributes<SVGDefsElement>;
      use: SVGAttributes<SVGUseElement>;
      pattern: SVGAttributes<SVGPatternElement>;
      image: SVGAttributes<SVGImageElement>;
      clipPath: SVGAttributes<SVGClipPathElement>;
      animate: SVGAttributes<SVGAnimateElement>;
      animateTransform: SVGAttributes<SVGAnimateTransformElement>;
      stop: SVGAttributes<SVGStopElement>;
      linearGradient: SVGAttributes<SVGLinearGradientElement>;
      radialGradient: SVGAttributes<SVGRadialGradientElement>;
      filter: SVGAttributes<SVGFilterElement>;
      feGaussianBlur: SVGAttributes<SVGFEGaussianBlurElement>;
      feBlend: SVGAttributes<SVGFEBlendElement>;
      feColorMatrix: SVGAttributes<SVGFEColorMatrixElement>;
      feComponentTransfer: SVGAttributes<SVGFEComponentTransferElement>;
      feComposite: SVGAttributes<SVGFECompositeElement>;
      feConvolveMatrix: SVGAttributes<SVGFEConvolveMatrixElement>;
      feDiffuseLighting: SVGAttributes<SVGFEDiffuseLightingElement>;
      feDisplacementMap: SVGAttributes<SVGFEDisplacementMapElement>;
      feFlood: SVGAttributes<SVGFEFloodElement>;
      feImage: SVGAttributes<SVGFEImageElement>;
      feMerge: SVGAttributes<SVGFEMergeElement>;
      feMorphology: SVGAttributes<SVGFEMorphologyElement>;
      feOffset: SVGAttributes<SVGFEOffsetElement>;
      feSpecularLighting: SVGAttributes<SVGFESpecularLightingElement>;
      feTile: SVGAttributes<SVGFETileElement>;
      feTurbulence: SVGAttributes<SVGFETurbulenceElement>;
    }

    interface HTMLAttributes<T> extends DOMAttributes<T> {
      // attributes
      accept?: string;
      acceptCharset?: string;
      accessKey?: string;
      action?: string;
      allow?: string;
      allowFullscreen?: boolean;
      allowPaymentRequest?: boolean;
      alt?: string;
      as?: string;
      async?: boolean;
      autoComplete?: string;
      autoFocus?: boolean;
      autoPlay?: boolean;
      capture?: boolean | string;
      charSet?: string;
      checked?: boolean;
      cite?: string;
      className?: string;
      cols?: number;
      colSpan?: number;
      content?: string;
      contentEditable?: "true" | "false" | "inherit";
      controls?: boolean;
      coords?: string;
      crossOrigin?: "anonymous" | "use-credentials" | "";
      data?: string;
      dateTime?: string;
      default?: boolean;
      defer?: boolean;
      dir?: "ltr" | "rtl" | "auto";
      disabled?: boolean;
      download?: boolean | string;
      draggable?: boolean | "true" | "false";
      encType?: string;
      enterKeyHint?: string;
      form?: string;
      formAction?: string;
      formEncType?: string;
      formMethod?: string;
      formNoValidate?: boolean;
      formTarget?: string;
      headers?: string;
      height?: string | number;
      hidden?: boolean;
      high?: number;
      href?: string;
      hrefLang?: string;
      htmlFor?: string;
      httpEquiv?: string;
      id?: string;
      inputMode?: string;
      integrity?: string;
      isMap?: boolean;
      itemProp?: string;
      keyParams?: string;
      keyType?: string;
      kind?: string;
      label?: string;
      lang?: string;
      list?: string;
      loop?: boolean;
      low?: number;
      max?: string | number;
      maxLength?: number;
      media?: string;
      method?: string;
      min?: string | number;
      minLength?: number;
      multiple?: boolean;
      muted?: boolean;
      name?: string;
      noValidate?: boolean;
      nonce?: string;
      open?: boolean;
      optimum?: number;
      pattern?: string;
      placeholder?: string;
      poster?: string;
      preload?: string;
      readOnly?: boolean;
      rel?: string;
      required?: boolean;
      reversed?: boolean;
      rows?: number;
      rowSpan?: number;
      sandbox?: string;
      scope?: string;
      scoped?: boolean;
      selected?: boolean;
      shape?: string;
      size?: number;
      sizes?: string;
      slot?: string;
      span?: number;
      spellCheck?: boolean | "true" | "false";
      src?: string;
      srcDoc?: string;
      srcLang?: string;
      srcSet?: string;
      start?: number;
      step?: number | "any";
      style?: Partial<HTMLElement["style"]>;
      tabIndex?: number;
      target?: string;
      title?: string;
      translate?: "yes" | "no";
      type?: string;
      useMap?: string;
      value?: string | number;
      width?: string | number;
      wrap?: string;

      // Event handlers
      // Mouse Events
    onClick?: (event: MouseEvent) => void;
    onContextMenu?: (event: MouseEvent) => void;
    onDoubleClick?: (event: MouseEvent) => void;
    onDrag?: (event: DragEvent) => void;
    onDragEnd?: (event: DragEvent) => void;
    onDragEnter?: (event: DragEvent) => void;
    onDragExit?: (event: DragEvent) => void;
    onDragLeave?: (event: DragEvent) => void;
    onDragOver?: (event: DragEvent) => void;
    onDragStart?: (event: DragEvent) => void;
    onDrop?: (event: DragEvent) => void;
    onMouseDown?: (event: MouseEvent) => void;
    onMouseEnter?: (event: MouseEvent) => void;
    onMouseLeave?: (event: MouseEvent) => void;
    onMouseMove?: (event: MouseEvent) => void;
    onMouseOut?: (event: MouseEvent) => void;
    onMouseOver?: (event: MouseEvent) => void;
    onMouseUp?: (event: MouseEvent) => void;

    // Keyboard Events
    onKeyDown?: (event: KeyboardEvent) => void;
    onKeyPress?: (event: KeyboardEvent) => void;
    onKeyUp?: (event: KeyboardEvent) => void;

    // Form Events
    onChange?: (event: Event) => void;
    onInput?: (event: InputEvent) => void;
    onInvalid?: (event: Event) => void;
    onReset?: (event: Event) => void;
    onSubmit?: (event: SubmitEvent) => void;

    // Focus Events
    onFocus?: (event: FocusEvent) => void;
    onFocusIn?: (event: FocusEvent) => void;
    onFocusOut?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;

    // Clipboard Events
    onCopy?: (event: ClipboardEvent) => void;
    onCut?: (event: ClipboardEvent) => void;
    onPaste?: (event: ClipboardEvent) => void;

    // Media Events
    onAbort?: (event: Event) => void;
    onCanPlay?: (event: Event) => void;
    onCanPlayThrough?: (event: Event) => void;
    onDurationChange?: (event: Event) => void;
    onEmptied?: (event: Event) => void;
    onEncrypted?: (event: Event) => void;
    onEnded?: (event: Event) => void;
    onLoadedData?: (event: Event) => void;
    onLoadedMetadata?: (event: Event) => void;
    onLoadStart?: (event: Event) => void;
    onPause?: (event: Event) => void;
    onPlay?: (event: Event) => void;
    onPlaying?: (event: Event) => void;
    onProgress?: (event: Event) => void;
    onRateChange?: (event: Event) => void;
    onSeeked?: (event: Event) => void;
    onSeeking?: (event: Event) => void;
    onStalled?: (event: Event) => void;
    onSuspend?: (event: Event) => void;
    onTimeUpdate?: (event: Event) => void;
    onVolumeChange?: (event: Event) => void;
    onWaiting?: (event: Event) => void;

    // Image Events
    onLoad?: (event: Event) => void;
    onError?: (event: Event) => void;

    // Animation Events
    onAnimationStart?: (event: AnimationEvent) => void;
    onAnimationEnd?: (event: AnimationEvent) => void;
    onAnimationIteration?: (event: AnimationEvent) => void;

    // Transition Events
    onTransitionEnd?: (event: TransitionEvent) => void;

    // Touch Events
    onTouchCancel?: (event: TouchEvent) => void;
    onTouchEnd?: (event: TouchEvent) => void;
    onTouchMove?: (event: TouchEvent) => void;
    onTouchStart?: (event: TouchEvent) => void;

    // Pointer Events
    onPointerDown?: (event: PointerEvent) => void;
    onPointerMove?: (event: PointerEvent) => void;
    onPointerUp?: (event: PointerEvent) => void;
    onPointerCancel?: (event: PointerEvent) => void;
    onPointerEnter?: (event: PointerEvent) => void;
    onPointerLeave?: (event: PointerEvent) => void;
    onPointerOver?: (event: PointerEvent) => void;
    onPointerOut?: (event: PointerEvent) => void;

    // UI Events
    onScroll?: (event: UIEvent) => void;
    onWheel?: (event: WheelEvent) => void;
    onSelect?: (event: Event) => void;

    // Composition Events
    onCompositionStart?: (event: CompositionEvent) => void;
    onCompositionUpdate?: (event: CompositionEvent) => void;
    onCompositionEnd?: (event: CompositionEvent) => void;

    // Storage Events
    onStorage?: (event: StorageEvent) => void;

    // Generic Events
    onToggle?: (event: Event) => void;
    }

    interface SVGAttributes<T> extends DOMAttributes<T> {
      // Common SVG attributes
      id?: string;
      className?: string;
      style?: Partial<CSSStyleDeclaration>;
      width?: number | string;
      height?: number | string;
      viewBox?: string;
      fill?: string;
      stroke?: string;
      strokeWidth?: number | string;
      strokeLinecap?: "butt" | "round" | "square";
      strokeLinejoin?: "miter" | "round" | "bevel";
      strokeDasharray?: string;
      strokeDashoffset?: string;
      strokeOpacity?: number | string;
      fillOpacity?: number | string;
      transform?: string;
      x?: number | string;
      y?: number | string;
      cx?: number | string;
      cy?: number | string;
      r?: number | string;
      rx?: number | string;
      ry?: number | string;
      d?: string;
      points?: string;
      x1?: number | string;
      y1?: number | string;
      x2?: number | string;
      y2?: number | string;
      gradientUnits?: "userSpaceOnUse" | "objectBoundingBox";
      gradientTransform?: string;
      patternUnits?: "userSpaceOnUse" | "objectBoundingBox";
      patternTransform?: string;
      clipPath?: string;
      clipRule?: "nonzero" | "evenodd";
      mask?: string;
      filter?: string;
    }

    interface DOMAttributes<T> {
      children?: _NoorNodeType;
    }
  }
}
