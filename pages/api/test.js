import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  //서버는 기능실행 후 유저에게 응답해줘야함. 응답하지 않으면 무한 대기(무한 loading)상태에 빠짐
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  if (요청.method == "GET") {
    //요청이 GET인지 POST인지 구별
    return 응답.status(200).json(result);
  }
  if (요청.method == "POST") {
    console.log(요청.body);
    db.collection("post").insertOne(요청.body);
    return 응답.status(200).json(result);
  }
}
