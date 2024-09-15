import ComponentCreator from "../component/creators/component-creator";
import { ComponentCreatorPropsAllType } from "./component-creator";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // HTML elements
      div: Partial<ComponentCreatorPropsAllType>;
      a: Partial<ComponentCreatorPropsAllType>;
      abbr: Partial<ComponentCreatorPropsAllType>;
      address: Partial<ComponentCreatorPropsAllType>;
      area: Partial<ComponentCreatorPropsAllType>;
      article: Partial<ComponentCreatorPropsAllType>;
      aside: Partial<ComponentCreatorPropsAllType>;
      audio: Partial<ComponentCreatorPropsAllType>;
      b: Partial<ComponentCreatorPropsAllType>;
      bdi: Partial<ComponentCreatorPropsAllType>;
      bdo: Partial<ComponentCreatorPropsAllType>;
      blockquote: Partial<ComponentCreatorPropsAllType>;
      button: Partial<ComponentCreatorPropsAllType>;
      base: Partial<ComponentCreatorPropsAllType>;
      canvas: Partial<ComponentCreatorPropsAllType>;
      cite: Partial<ComponentCreatorPropsAllType>;
      code: Partial<ComponentCreatorPropsAllType>;
      col: Partial<ComponentCreatorPropsAllType>;
      colgroup: Partial<ComponentCreatorPropsAllType>;
      caption: Partial<ComponentCreatorPropsAllType>;
      data: Partial<ComponentCreatorPropsAllType>;
      datalist: Partial<ComponentCreatorPropsAllType>;
      dd: Partial<ComponentCreatorPropsAllType>;
      del: Partial<ComponentCreatorPropsAllType>;
      details: Partial<ComponentCreatorPropsAllType>;
      dfn: Partial<ComponentCreatorPropsAllType>;
      dialog: Partial<ComponentCreatorPropsAllType>;
      dl: Partial<ComponentCreatorPropsAllType>;
      dt: Partial<ComponentCreatorPropsAllType>;
      em: Partial<ComponentCreatorPropsAllType>;
      embed: Partial<ComponentCreatorPropsAllType>;
      fieldset: Partial<ComponentCreatorPropsAllType>;
      figcaption: Partial<ComponentCreatorPropsAllType>;
      figure: Partial<ComponentCreatorPropsAllType>;
      footer: Partial<ComponentCreatorPropsAllType>;
      form: Partial<ComponentCreatorPropsAllType>;
      h1: Partial<ComponentCreatorPropsAllType>;
      h2: Partial<ComponentCreatorPropsAllType>;
      h3: Partial<ComponentCreatorPropsAllType>;
      h4: Partial<ComponentCreatorPropsAllType>;
      h5: Partial<ComponentCreatorPropsAllType>;
      h6: Partial<ComponentCreatorPropsAllType>;
      header: Partial<ComponentCreatorPropsAllType>;
      hgroup: Partial<ComponentCreatorPropsAllType>;
      hr: Partial<ComponentCreatorPropsAllType>;
      i: Partial<ComponentCreatorPropsAllType>;
      iframe: Partial<ComponentCreatorPropsAllType>;
      img: Partial<ComponentCreatorPropsAllType>;
      input: Partial<ComponentCreatorPropsAllType>;
      ins: Partial<ComponentCreatorPropsAllType>;
      kbd: Partial<ComponentCreatorPropsAllType>;
      label: Partial<ComponentCreatorPropsAllType>;
      legend: Partial<ComponentCreatorPropsAllType>;
      li: Partial<ComponentCreatorPropsAllType>;
      link: Partial<ComponentCreatorPropsAllType>;
      main: Partial<ComponentCreatorPropsAllType>;
      map: Partial<ComponentCreatorPropsAllType>;
      mark: Partial<ComponentCreatorPropsAllType>;
      meta: Partial<ComponentCreatorPropsAllType>;
      meter: Partial<ComponentCreatorPropsAllType>;
      menu: Partial<ComponentCreatorPropsAllType>;
      menuitem: Partial<ComponentCreatorPropsAllType>;
      nav: Partial<ComponentCreatorPropsAllType>;
      noscript: Partial<ComponentCreatorPropsAllType>;
      object: Partial<ComponentCreatorPropsAllType>;
      ol: Partial<ComponentCreatorPropsAllType>;
      optgroup: Partial<ComponentCreatorPropsAllType>;
      option: Partial<ComponentCreatorPropsAllType>;
      output: Partial<ComponentCreatorPropsAllType>;
      p: Partial<ComponentCreatorPropsAllType>;
      picture: Partial<ComponentCreatorPropsAllType>;
      pre: Partial<ComponentCreatorPropsAllType>;
      progress: Partial<ComponentCreatorPropsAllType>;
      q: Partial<ComponentCreatorPropsAllType>;
      rp: Partial<ComponentCreatorPropsAllType>;
      rt: Partial<ComponentCreatorPropsAllType>;
      ruby: Partial<ComponentCreatorPropsAllType>;
      s: Partial<ComponentCreatorPropsAllType>;
      samp: Partial<ComponentCreatorPropsAllType>;
      script: Partial<ComponentCreatorPropsAllType>;
      section: Partial<ComponentCreatorPropsAllType>;
      select: Partial<ComponentCreatorPropsAllType>;
      small: Partial<ComponentCreatorPropsAllType>;
      source: Partial<ComponentCreatorPropsAllType>;
      span: Partial<ComponentCreatorPropsAllType>;
      strong: Partial<ComponentCreatorPropsAllType>;
      style: Partial<ComponentCreatorPropsAllType>;
      sub: Partial<ComponentCreatorPropsAllType>;
      summary: Partial<ComponentCreatorPropsAllType>;
      sup: Partial<ComponentCreatorPropsAllType>;
      svg: Partial<ComponentCreatorPropsAllType>;
      table: Partial<ComponentCreatorPropsAllType>;
      tbody: Partial<ComponentCreatorPropsAllType>;
      td: Partial<ComponentCreatorPropsAllType>;
      template: Partial<ComponentCreatorPropsAllType>;
      textarea: Partial<ComponentCreatorPropsAllType>;
      tfoot: Partial<ComponentCreatorPropsAllType>;
      th: Partial<ComponentCreatorPropsAllType>;
      thead: Partial<ComponentCreatorPropsAllType>;
      time: Partial<ComponentCreatorPropsAllType>;
      tr: Partial<ComponentCreatorPropsAllType>;
      track: Partial<ComponentCreatorPropsAllType>;
      u: Partial<ComponentCreatorPropsAllType>;
      ul: Partial<ComponentCreatorPropsAllType>;
      var: Partial<ComponentCreatorPropsAllType>;
      video: Partial<ComponentCreatorPropsAllType>;
      wbr: Partial<ComponentCreatorPropsAllType>;
    }
  }

  type ComponentCreator = typeof ComponentCreator;

  // For components
  //   interface ElementChildrenAttribute {
  //     children: {};
  //   }

  //   type Element = React.ReactElement;
}
