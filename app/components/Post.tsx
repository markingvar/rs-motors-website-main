interface Post {
  title: String;
  content: String;
}

export default function Post(props: { post: Post }) {
  const { post } = props;
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <div className="content">{post.content}</div>
    </div>
  );
}
