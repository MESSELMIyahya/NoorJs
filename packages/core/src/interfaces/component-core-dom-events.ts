// The component dom events

type ComponentCoreDomEvents =
  | "onAbort"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onAnimationStart"
  | "onAuxClick"
  | "onBeforeInput"
  | "onBlur"
  | "onCanPlay"
  | "onCanPlayThrough"
  | "onChange"
  | "onClick"
  | "onContextMenu"
  | "onCopy"
  | "onCut"
  | "onDblClick"
  | "onDrag"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragExit"
  | "onDragLeave"
  | "onDragOver"
  | "onDragStart"
  | "onDrop"
  | "onDurationChange"
  | "onEmptied"
  | "onEnded"
  | "onError"
  | "onFocus"
  | "onFormData"
  | "onInput"
  | "onInvalid"
  | "onKeyDown"
  | "onKeyPress"
  | "onKeyUp"
  | "onLoad"
  | "onLoadedData"
  | "onLoadedMetadata"
  | "onLoadStart"
  | "onMousedown"
  | "onMouseEnter"
  | "onMouseLeave"
  | "onMouseMove"
  | "onMouseOut"
  | "onMouseOver"
  | "onMouseUp"
  | "onPaste"
  | "onPause"
  | "onPlay"
  | "onPlaying"
  | "onPointerDown"
  | "onPointerEnter"
  | "onPointerLeave"
  | "onPointerMove"
  | "onPointerOut"
  | "onPointerOver"
  | "onPointerUp"
  | "onProgress"
  | "onRateChange"
  | "onReset"
  | "onResize"
  | "onScroll"
  | "onSeeked"
  | "onSeeking"
  | "onSelect"
  | "onStalled"
  | "onSubmit"
  | "onSuspend"
  | "onTimeUpdate"
  | "onToggle"
  | "onTouchCancel"
  | "onTouchEnd"
  | "onTouchMove"
  | "onTouchStart"
  | "onTransitionEnd"
  | "onVolumeChange"
  | "onWaiting"
  | "onWheel";

  // the core html events methods types
interface ComponentCoreDomEventsMethodsTypes {

 onAbort : HTMLElement["onabort"] ;
 onAnimationEnd : HTMLElement["onanimationend"] ;
 onAnimationIteration : HTMLElement["onanimationiteration"] ;
 onAnimationStart : HTMLElement["onanimationstart"] ;
 onAuxClick : HTMLElement["onauxclick"] ;
 onBeforeInput : HTMLElement["onbeforeinput"] ;
 onBlur : HTMLElement["onblur"] ;
 onCanPlay : HTMLElement["oncanplay"] ;
 onCanPlayThrough : HTMLElement["oncanplaythrough"] ;
 onChange : HTMLElement["onchange"] ;
 onClick : HTMLElement["onclick"] ;
 onContextMenu : HTMLElement["oncontextmenu"] ;
 onCopy : HTMLElement["oncopy"] ;
 onCut : HTMLElement["oncut"] ;
 onDblClick : HTMLElement["ondblclick"] ;
 onDrag : HTMLElement["ondrag"] ;
 onDragEnd : HTMLElement["ondragend"] ;
 onDragEnter : HTMLElement["ondragenter"] ;
 onDragLeave : HTMLElement["ondragleave"] ;
 onDragOver : HTMLElement["ondragover"] ;
 onDragStart : HTMLElement["ondragstart"] ;
 onDrop : HTMLElement["ondrop"] ;
 onDurationChange : HTMLElement["ondurationchange"] ;
 onEmptied : HTMLElement["onemptied"] ;
 onEnded : HTMLElement["onended"] ;
 onError : HTMLElement["onerror"] ;
 onFocus : HTMLElement["onfocus"] ;
 onFormData : HTMLElement["onformdata"] ;
 onInput : HTMLElement["oninput"] ;
 onInvalid : HTMLElement["oninvalid"] ;
 onKeyDown : HTMLElement["onkeydown"] ;
 onKeyPress : HTMLElement["onkeypress"] ;
 onKeyUp : HTMLElement["onkeyup"] ;
 onLoad : HTMLElement["onload"] ;
 onLoadedData : HTMLElement["onloadeddata"] ;
 onLoadedMetadata : HTMLElement["onloadedmetadata"] ;
 onLoadStart : HTMLElement["onloadstart"] ;
 onMousedown : HTMLElement["onmousedown"] ;
 onMouseEnter : HTMLElement["onmouseenter"] ;
 onMouseLeave : HTMLElement["onmouseleave"] ;
 onMouseMove : HTMLElement["onmousemove"] ;
 onMouseOut : HTMLElement["onmouseout"] ;
 onMouseOver : HTMLElement["onmouseover"] ;
 onMouseUp : HTMLElement["onmouseup"] ;
 onPaste : HTMLElement["onpaste"] ;
 onPause : HTMLElement["onpause"] ;
 onPlay : HTMLElement["onplay"] ;
 onPlaying : HTMLElement["onplaying"] ;
 onPointerDown : HTMLElement["onpointerdown"] ;
 onPointerEnter : HTMLElement["onpointerenter"] ;
 onPointerLeave : HTMLElement["onpointerleave"] ;
 onPointerMove : HTMLElement["onpointermove"] ;
 onPointerOut : HTMLElement["onpointerout"] ;
 onPointerOver : HTMLElement["onpointerover"] ;
 onPointerUp : HTMLElement["onpointerup"] ;
 onProgress : HTMLElement["onprogress"] ;
 onRateChange : HTMLElement["onratechange"] ;
 onReset : HTMLElement["onreset"] ;
 onResize : HTMLElement["onresize"] ;
 onScroll : HTMLElement["onscroll"] ;
 onSeeked : HTMLElement["onseeked"] ;
 onSeeking : HTMLElement["onseeking"] ;
 onSelect : HTMLElement["onselect"] ;
 onStalled : HTMLElement["onstalled"] ;
 onSubmit : HTMLElement["onsubmit"] ;
 onSuspend : HTMLElement["onsuspend"] ;
 onTimeUpdate : HTMLElement["ontimeupdate"] ;
 onToggle : HTMLElement["ontoggle"] ;
 onTouchCancel : HTMLElement["ontouchcancel"] ;
 onTouchEnd : HTMLElement["ontouchend"] ;
 onTouchMove : HTMLElement["ontouchmove"] ;
 onTouchStart : HTMLElement["ontouchstart"] ;
 onTransitionEnd : HTMLElement["ontransitionend"] ;
 onVolumeChange : HTMLElement["onvolumechange"] ;
 onWaiting : HTMLElement["onwaiting"] ;
 onWheel : HTMLElement["onwheel"] ;
}

// the core html events types

type ComponentCoreDomEventsTypes<T extends ComponentCoreDomEvents> =
  T extends "onAbort" ? HTMLElement["onabort"] :
  T extends "onAnimationEnd" ? HTMLElement["onanimationend"] :
  T extends "onAnimationIteration" ? HTMLElement["onanimationiteration"] :
  T extends "onAnimationStart" ? HTMLElement["onanimationstart"] :
  T extends "onAuxClick" ? HTMLElement["onauxclick"] :
  T extends "onBeforeInput" ? HTMLElement["onbeforeinput"] :
  T extends "onBlur" ? HTMLElement["onblur"] :
  T extends "onCanPlay" ? HTMLElement["oncanplay"] :
  T extends "onCanPlayThrough" ? HTMLElement["oncanplaythrough"] :
  T extends "onChange" ? HTMLElement["onchange"] :
  T extends "onClick" ? HTMLElement["onclick"] :
  T extends "onContextMenu" ? HTMLElement["oncontextmenu"] :
  T extends "onCopy" ? HTMLElement["oncopy"] :
  T extends "onCut" ? HTMLElement["oncut"] :
  T extends "onDblClick" ? HTMLElement["ondblclick"] :
  T extends "onDrag" ? HTMLElement["ondrag"] :
  T extends "onDragEnd" ? HTMLElement["ondragend"] :
  T extends "onDragEnter" ? HTMLElement["ondragenter"] :
  T extends "onDragLeave" ? HTMLElement["ondragleave"] :
  T extends "onDragOver" ? HTMLElement["ondragover"] :
  T extends "onDragStart" ? HTMLElement["ondragstart"] :
  T extends "onDrop" ? HTMLElement["ondrop"] :
  T extends "onDurationChange" ? HTMLElement["ondurationchange"] :
  T extends "onEmptied" ? HTMLElement["onemptied"] :
  T extends "onEnded" ? HTMLElement["onended"] :
  T extends "onError" ? HTMLElement["onerror"] :
  T extends "onFocus" ? HTMLElement["onfocus"] :
  T extends "onFormData" ? HTMLElement["onformdata"] :
  T extends "onInput" ? HTMLElement["oninput"] :
  T extends "onInvalid" ? HTMLElement["oninvalid"] :
  T extends "onKeyDown" ? HTMLElement["onkeydown"] :
  T extends "onKeyPress" ? HTMLElement["onkeypress"] :
  T extends "onKeyUp" ? HTMLElement["onkeyup"] :
  T extends "onLoad" ? HTMLElement["onload"] :
  T extends "onLoadedData" ? HTMLElement["onloadeddata"] :
  T extends "onLoadedMetadata" ? HTMLElement["onloadedmetadata"] :
  T extends "onLoadStart" ? HTMLElement["onloadstart"] :
  T extends "onMousedown" ? HTMLElement["onmousedown"] :
  T extends "onMouseEnter" ? HTMLElement["onmouseenter"] :
  T extends "onMouseLeave" ? HTMLElement["onmouseleave"] :
  T extends "onMouseMove" ? HTMLElement["onmousemove"] :
  T extends "onMouseOut" ? HTMLElement["onmouseout"] :
  T extends "onMouseOver" ? HTMLElement["onmouseover"] :
  T extends "onMouseUp" ? HTMLElement["onmouseup"] :
  T extends "onPaste" ? HTMLElement["onpaste"] :
  T extends "onPause" ? HTMLElement["onpause"] :
  T extends "onPlay" ? HTMLElement["onplay"] :
  T extends "onPlaying" ? HTMLElement["onplaying"] :
  T extends "onPointerDown" ? HTMLElement["onpointerdown"] :
  T extends "onPointerEnter" ? HTMLElement["onpointerenter"] :
  T extends "onPointerLeave" ? HTMLElement["onpointerleave"] :
  T extends "onPointerMove" ? HTMLElement["onpointermove"] :
  T extends "onPointerOut" ? HTMLElement["onpointerout"] :
  T extends "onPointerOver" ? HTMLElement["onpointerover"] :
  T extends "onPointerUp" ? HTMLElement["onpointerup"] :
  T extends "onProgress" ? HTMLElement["onprogress"] :
  T extends "onRateChange" ? HTMLElement["onratechange"] :
  T extends "onReset" ? HTMLElement["onreset"] :
  T extends "onResize" ? HTMLElement["onresize"] :
  T extends "onScroll" ? HTMLElement["onscroll"] :
  T extends "onSeeked" ? HTMLElement["onseeked"] :
  T extends "onSeeking" ? HTMLElement["onseeking"] :
  T extends "onSelect" ? HTMLElement["onselect"] :
  T extends "onStalled" ? HTMLElement["onstalled"] :
  T extends "onSubmit" ? HTMLElement["onsubmit"] :
  T extends "onSuspend" ? HTMLElement["onsuspend"] :
  T extends "onTimeUpdate" ? HTMLElement["ontimeupdate"] :
  T extends "onToggle" ? HTMLElement["ontoggle"] :
  T extends "onTouchCancel" ? HTMLElement["ontouchcancel"] :
  T extends "onTouchEnd" ? HTMLElement["ontouchend"] :
  T extends "onTouchMove" ? HTMLElement["ontouchmove"] :
  T extends "onTouchStart" ? HTMLElement["ontouchstart"] :
  T extends "onTransitionEnd" ? HTMLElement["ontransitionend"] :
  T extends "onVolumeChange" ? HTMLElement["onvolumechange"] :
  T extends "onWaiting" ? HTMLElement["onwaiting"] :
  T extends "onWheel" ? HTMLElement["onwheel"] :
  never;

export type { 
  ComponentCoreDomEvents, 
  ComponentCoreDomEventsTypes,
  ComponentCoreDomEventsMethodsTypes 
};
