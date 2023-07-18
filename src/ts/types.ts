export type NodeToken = number

export enum DataType{
  string,
  number,
  boolean,
  any
}

export enum SocketType{
  simple,
  input,
  select
}

export enum BlockType{
  root,
  event,
  logic,
}

export interface IData{
  value: string
}

export interface IDataSocketSchema{
  type: SocketType
  dataType: DataType
  title: string
  required: boolean
  defaultContent?: any
}

export interface IPowerSocketSchema{
  title: string
}

export interface IPowerSchema{
  class: string
  name: string
  title: string
  inputs: IDataSocketSchema[]
  outputs: IDataSocketSchema[]
  template: (inputs: IData[])=>string
  color?: string
}

export interface IBlock{
  class: string
  type: BlockType
  name: string
  title: string
  inputs: IDataSocketSchema[]
  exports: (inputs: IDataSocketSchema[])=>string[]
  index: IPowerSocketSchema[]
  template: (content: string[][], inputs: IData[])=>string
  color?: string 
}