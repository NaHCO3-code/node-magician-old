import { Power, Powers } from './Observer'
import { Vector2 } from './lm'
import { MPowerSchema } from './types'
import styleUrl from '/src/css/power.css?url'

export class PowerElement extends HTMLElement{
  shadowRoot: ShadowRoot

  template: Node

  css: HTMLLinkElement

  main: HTMLElement

  position=new Vector2(0,0)

  schema: MPowerSchema

  constructor(){
    super();
    /**
     * 获得template
     */
    let el = <HTMLTemplateElement>document.querySelector("template[id=MPower]")
    this.template = el.content.cloneNode(true);

    /**
     * 设置css
     */
    this.css = document.createElement('link');
    this.css.rel="stylesheet";
    this.css.href = styleUrl;
    

    /**
     * 创建一个shadow
     */
    this.shadowRoot = this.attachShadow({mode: "open"});
    this.shadowRoot.append(this.template);
    this.shadowRoot.append(this.css);
    
    /**
     * 获取主要内容
     */
    this.main = <HTMLElement>this.shadowRoot.querySelector(".MPower");
    this.schema = Power.defauleSchema;
  }

  connectedCallback(){
    /**获取schema */
    let schema = Powers.get(this.getAttribute('schema')??'')?.schema;
    if(!schema){
      throw new Error("\nmissing required attribute schema. \nIt is because they are.")
    }
    this.schema = schema

    /**设置位置 */
    this.position.set(Number(this.getAttribute('x')??-1), Number(this.getAttribute('y')??-1));
    if(this.position.x==-1 || this.position.y==-1){
      throw new Error("\nmissing required attribute(s) x or y. \nIt is because they are.")
    }
    this.updatePosition()
    
    /**
     * 处理拖放事件
     */
    let mousePos = new Vector2(0,0);
    this.draggable=true
    this.ondragstart = (ev)=>{
      /**设置拖动数据 */
      if(!ev.dataTransfer)return;
      ev.dataTransfer.dropEffect="move";
      ev.dataTransfer.effectAllowed="move";
      ev.dataTransfer.setData("all", "");
      ev.dataTransfer.setDragImage(this.css,0,0);

      mousePos.set(ev.clientX, ev.clientY);
    }
    this.ondrag = (ev)=>{
      if(ev.clientX==0 && ev.clientY==0)return;
      let detla = new Vector2(ev.clientX, ev.clientY).reduce(mousePos)
      mousePos.add(detla)
      this.position.add(detla)
      this.updatePosition()
    }
  }

  updatePosition(){
    this.main.style.setProperty('--x', this.position.x+'px');
    this.main.style.setProperty('--y', this.position.y+'px');
  }
}