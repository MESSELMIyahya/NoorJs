// The component dom properties

type ComponentCoreDomProperties =
  | "accept"
  | "acceptCharset"
  | "accessKey"
  | "action"
  | "allow"
  | "allowFullscreen"
  | "allowPaymentRequest"
  | "alt"
  | "as"
  | "async"
  | "autoComplete"
  | "autoFocus"
  | "autoPlay"
  | "capture"
  | "charSet"
  | "checked"
  | "cite"
  | "className"
  | "cols"
  | "colSpan"
  | "content"
  | "contentEditable"
  | "controls"
  | "coords"
  | "crossOrigin"
  | "data"
  | "dateTime"
  | "default"
  | "defer"
  | "dir"
  | "disabled"
  | "download"
  | "draggable"
  | "encType"
  | "enterKeyHint"
  | "form"
  | "formAction"
  | "formEncType"
  | "formMethod"
  | "formNoValidate"
  | "formTarget"
  | "headers"
  | "height"
  | "hidden"
  | "high"
  | "href"
  | "hrefLang"
  | "htmlFor"
  | "httpEquiv"
  | "id"
  | "inputMode"
  | "integrity"
  | "isMap"
  | "itemProp"
  | "keyParams"
  | "keyType"
  | "kind"
  | "label"
  | "lang"
  | "list"
  | "loop"
  | "low"
  | "max"
  | "maxLength"
  | "media"
  | "method"
  | "min"
  | "minLength"
  | "multiple"
  | "muted"
  | "name"
  | "noValidate"
  | "nonce"
  | "open"
  | "optimum"
  | "pattern"
  | "placeholder"
  | "poster"
  | "preload"
  | "readOnly"
  | "rel"
  | "required"
  | "reversed"
  | "rows"
  | "rowSpan"
  | "sandbox"
  | "scope"
  | "scoped"
  | "selected"
  | "shape"
  | "size"
  | "sizes"
  | "slot"
  | "span"
  | "spellCheck"
  | "src"
  | "srcDoc"
  | "srcLang"
  | "srcSet"
  | "start"
  | "step"
  | "style"
  | "tabIndex"
  | "target"
  | "title"
  | "translate"
  | "type"
  | "useMap"
  | "value"
  | "width"
  | "wrap";

interface ComponentCoreDomPropertiesTypes {
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
}

export type { ComponentCoreDomProperties, ComponentCoreDomPropertiesTypes };
