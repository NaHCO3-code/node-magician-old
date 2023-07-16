import { Vector2 } from "./lm"

export enum MDataTypes{
  string,
  number,
  boolean,
  array,
}

export enum MBlockType{
  root,
  if,
  for,
  while,
  def,
  other
}

export type MNodeToken = number
export type MData = {type: MDataTypes, val: any}


export interface MDataSocketSchema{
  name: string,
  type: MDataTypes
}

export interface MPowerSchema{
  name: string,
  title: string,
  inputs: MDataSocketSchema[],
  outputs: MDataSocketSchema[],
  template: (inputs: MData[])=>string,
}

export interface MPowerSave{
  schema: MPowerSchema,
  position: Vector2,
  fromNode: MNodeToken,
  toNode: MNodeToken,
}

export interface MBlock{
  type: MBlockType,
  
}