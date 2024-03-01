import { Post, useHome } from "./useHome";

export function Home() {
    const { data } = useHome();

    return (
      <section style={{ padding:  20 }}>
        <h2>Posts</h2>
        {data && <>
          {data.map((post: Post) => (
            <p key={post.id}>{post.title}</p>
          ))}
        </>}
      </section>
    );
  }