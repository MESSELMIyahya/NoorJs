// all the component element supported html tags

type ComponentCoreElementTags =   | "a"
| "abbr"
| "address"
| "area"
| "article"
| "aside"
| "audio"
| "b"
| "bdi"
| "bdo"
| "blockquote"
| "button"
| "canvas"
| "cite"
| "code"
| "data"
| "datalist"
| "dd"
| "del"
| "details"
| "dfn"
| "dialog"
| "div"
| "dl"
| "dt"
| "em"
| "embed"
| "fieldset"
| "figcaption"
| "figure"
| "footer"
| "form"
| "h1"
| "h2"
| "h3"
| "h4"
| "h5"
| "h6"
| "header"
| "hgroup"
| "hr"
| "i"
| "iframe"
| "img"
| "input"
| "ins"
| "kbd"
| "label"
| "legend"
| "li"
| "link"
| "main"
| "map"
| "mark"
| "meta"
| "meter"
| "nav"
| "noscript"
| "object"
| "ol"
| "optgroup"
| "option"
| "output"
| "p"
| "picture"
| "pre"
| "progress"
| "q"
| "rp"
| "rt"
| "ruby"
| "s"
| "samp"
| "script"
| "section"
| "select"
| "small"
| "source"
| "span"
| "strong"
| "style"
| "sub"
| "summary"
| "sup"
| "table"
| "tbody"
| "td"
| "template"
| "textarea"
| "tfoot"
| "th"
| "thead"
| "time"
| "tr"
| "track"
| "u"
| "ul"
| "var"
| "video"
| "wbr" ;

type ComponentCoreElementTypes<T extends keyof HTMLElementTagNameMap = "div"> = 
  T extends "a" ? HTMLAnchorElement :
  T extends "abbr" ? HTMLElement :
  T extends "address" ? HTMLElement :
  T extends "area" ? HTMLAreaElement :
  T extends "article" ? HTMLElement :
  T extends "aside" ? HTMLElement :
  T extends "audio" ? HTMLAudioElement :
  T extends "b" ? HTMLElement :
  T extends "bdi" ? HTMLElement :
  T extends "bdo" ? HTMLElement :
  T extends "blockquote" ? HTMLQuoteElement :
  T extends "br" ? HTMLBRElement :
  T extends "button" ? HTMLButtonElement :
  T extends "canvas" ? HTMLCanvasElement :
  T extends "cite" ? HTMLElement :
  T extends "code" ? HTMLElement :
  T extends "data" ? HTMLDataElement :
  T extends "datalist" ? HTMLDataListElement :
  T extends "dd" ? HTMLElement :
  T extends "del" ? HTMLModElement :
  T extends "details" ? HTMLDetailsElement :
  T extends "dfn" ? HTMLElement :
  T extends "dialog" ? HTMLDialogElement :
  T extends "div" ? HTMLDivElement :
  T extends "dl" ? HTMLDListElement :
  T extends "dt" ? HTMLElement :
  T extends "em" ? HTMLElement :
  T extends "embed" ? HTMLEmbedElement :
  T extends "fieldset" ? HTMLFieldSetElement :
  T extends "figcaption" ? HTMLElement :
  T extends "figure" ? HTMLElement :
  T extends "footer" ? HTMLElement :
  T extends "form" ? HTMLFormElement :
  T extends "h1" ? HTMLHeadingElement :
  T extends "h2" ? HTMLHeadingElement :
  T extends "h3" ? HTMLHeadingElement :
  T extends "h4" ? HTMLHeadingElement :
  T extends "h5" ? HTMLHeadingElement :
  T extends "h6" ? HTMLHeadingElement :
  T extends "header" ? HTMLElement :
  T extends "hgroup" ? HTMLElement :
  T extends "hr" ? HTMLHRElement :
  T extends "i" ? HTMLElement :
  T extends "iframe" ? HTMLIFrameElement :
  T extends "img" ? HTMLImageElement :
  T extends "input" ? HTMLInputElement :
  T extends "ins" ? HTMLModElement :
  T extends "kbd" ? HTMLElement :
  T extends "label" ? HTMLLabelElement :
  T extends "legend" ? HTMLLegendElement :
  T extends "li" ? HTMLLIElement :
  T extends "link" ? HTMLLinkElement :
  T extends "main" ? HTMLElement :
  T extends "map" ? HTMLMapElement :
  T extends "mark" ? HTMLElement :
  T extends "meta" ? HTMLMetaElement :
  T extends "meter" ? HTMLMeterElement :
  T extends "nav" ? HTMLElement :
  T extends "noscript" ? HTMLElement :
  T extends "object" ? HTMLObjectElement :
  T extends "ol" ? HTMLOListElement :
  T extends "optgroup" ? HTMLOptGroupElement :
  T extends "option" ? HTMLOptionElement :
  T extends "output" ? HTMLOutputElement :
  T extends "p" ? HTMLParagraphElement :
  T extends "picture" ? HTMLPictureElement :
  T extends "pre" ? HTMLPreElement :
  T extends "progress" ? HTMLProgressElement :
  T extends "q" ? HTMLQuoteElement :
  T extends "rp" ? HTMLElement :
  T extends "rt" ? HTMLElement :
  T extends "ruby" ? HTMLElement :
  T extends "s" ? HTMLElement :
  T extends "samp" ? HTMLElement :
  T extends "script" ? HTMLScriptElement :
  T extends "section" ? HTMLElement :
  T extends "select" ? HTMLSelectElement :
  T extends "small" ? HTMLElement :
  T extends "source" ? HTMLSourceElement :
  T extends "span" ? HTMLSpanElement :
  T extends "strong" ? HTMLElement :
  T extends "style" ? HTMLStyleElement :
  T extends "sub" ? HTMLElement :
  T extends "summary" ? HTMLElement :
  T extends "sup" ? HTMLElement :
  T extends "table" ? HTMLTableElement :
  T extends "tbody" ? HTMLTableSectionElement :
  T extends "td" ? HTMLTableCellElement :
  T extends "template" ? HTMLTemplateElement :
  T extends "textarea" ? HTMLTextAreaElement :
  T extends "tfoot" ? HTMLTableSectionElement :
  T extends "th" ? HTMLTableCellElement :
  T extends "thead" ? HTMLTableSectionElement :
  T extends "time" ? HTMLTimeElement :
  T extends "tr" ? HTMLTableRowElement :
  T extends "track" ? HTMLTrackElement :
  T extends "u" ? HTMLElement :
  T extends "ul" ? HTMLUListElement :
  T extends "var" ? HTMLElement :
  T extends "video" ? HTMLVideoElement :
  T extends "wbr" ? HTMLElement :
  HTMLDivElement;


export type { ComponentCoreElementTags,ComponentCoreElementTypes };
