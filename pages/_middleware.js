import {NextResponse} from "next/server"
const middleware =  (req,ev) => {
  const os = req.ua.os.name
  // console.log(req.headers[])
  // console.log(req.headers)
  return NextResponse.next()
};

export default middleware;