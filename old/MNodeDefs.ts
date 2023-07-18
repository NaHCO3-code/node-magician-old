import { MPowerSchema, MDataTypes, MData, MBlockType } from "./types"

export const PowerSchema: MPowerSchema[] = [
  {
    class: "控制台",
    name: "console.log",
    title: "输出",
    inputs: [
      {
        name: 'content',
        type: MDataTypes.string
      }
    ],
    outputs: [],
    template: function(inputs: MData[]){
      return `console.log("${inputs[0]}");`
    }
  }
]

// export const Save:MSave = [
//   {
//     type: MBlockType.root,
    
//   }
// ]