type SocketId = number

enum DataType{
  string,
  number,
  array,
}

interface DataSocketSchema{
  type: DataType,
  title: string,
  required: boolean,
}

interface PowerSocketSchema{
  title: string,
}

