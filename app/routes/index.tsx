import stylesUrl from "~/styles/index.css";

import { LoaderArgs, LinksFunction, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import Post from "~/components/Post";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

// const post = { title: "Test", content: "Post content" };

export const loader = async ({ context, params }: LoaderArgs) => {
  console.log({ context });
  const post = { title: "Test", content: "Post content" };
  await context.POSTS.put("posts-home", JSON.stringify(post));
  let postFromKV = await context.POSTS.get<{ name: string }>(`posts-home`, {
    type: "json",
  });

  return json(postFromKV);
  /* return json(
  ); */
};

export default function IndexRoute() {
  const post = useLoaderData<typeof loader>();
  // console.log(post);
  return (
    <div className="container">
      <div className="content">
        <h1>Welcome to RS Motors</h1>
        <Post post={post} />
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  return <div className="error-container">I did a whoopsies.</div>;
}
