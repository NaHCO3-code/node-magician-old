import { MPowerSchema, MDataTypes, MData } from "./types"

export const PowerSchema: MPowerSchema[] = [
  {
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

export const Save:MSave = [
  {

  }
]