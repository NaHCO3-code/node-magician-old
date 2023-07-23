import { BlockType, DataType, IBlock, IData, IPowerSchema, SocketType } from "../types";

export const PowerSchema: IPowerSchema[] = [
  {
    class: "console",
    name: "console.log",
    title: "输出",
    inputs: [
      {
        type: SocketType.simple,
        title: "消息",
        dataType: DataType.any,
        required: false,
      }
    ],
    outputs: [],
    template: (inputs:IData[])=>`console.log(${inputs[0].value})`
  }
]

export const Blocks: IBlock[] = [
  {
    class: "main",
    type: BlockType.root,
    name: "main",
    title: "当程序开始运行时",
    inputs: [],
    exports: ()=>[],
    index: [
      {
        title: "执行"
      }
    ],
    template(content, inputs) {
        return content[0].join('\n');
    },
  }
]