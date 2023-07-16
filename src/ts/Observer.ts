
import { MPowerSchema } from "./types";
import { Vector2 } from "./lm";

export class Power{
  schema: MPowerSchema

  nodes: Map<number, HTMLElement>

  constructor(schema: MPowerSchema){
    this.schema = schema;
    this.nodes = new Map();
  }

  createNode(position: Vector2){
    let token = new Date().getTime();
    let node = document.createElement('node-power')
    node.setAttribute('x', ''+position.x);
    node.setAttribute('y', ''+position.y);
    node.setAttribute('schema', this.schema.name)
    
    this.nodes.set(token, node)
  }

  static defauleSchema: MPowerSchema = {
    name: "defaultSchema",
    title: "",
    inputs: [],
    outputs: [],
    template: ()=>"",
  }
}  


export let Powers = new Map<string, Power>();