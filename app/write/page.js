export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/test" method="POST">
        <input type="text" name="title" />
        <br />
        <textarea name="content" />
        <br />
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
}
