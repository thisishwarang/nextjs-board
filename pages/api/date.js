export default function handler(요청, 응답) {
  let a = new Date();
  if (요청.method == "GET") {
    return 응답.status(200).json(a);
  }
}
