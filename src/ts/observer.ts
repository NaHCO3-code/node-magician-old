type emitRange = "global"|"core"|"ui"

type eventSchema = {
  compile: {
    enterPoint: number
  },
  debug: {
    enterPoint: number,
    pause: boolean
  },
  loadFile: {
    path: string
  }
}

function emit<T extends keyof eventSchema>(
  type: T,
  content: eventSchema[T], 
  range: emitRange
){
  
}

emit('compile', {enterPoint: 114514}, 'core')
emit('debug', {enterPoint: 114514, pause: false}, 'global')
emit('loadFile', {path: "/awa.txt"}, 'global')

