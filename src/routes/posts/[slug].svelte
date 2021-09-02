<script context="module">
  export async function load({ page, fetch, session, context }) {
    const Post = await import(`../../posts/${page.params.slug}.md`);
    console.log(Post, Post.metadata);
    const post = {
      title: page.params.slug,
      date: new Date(),
      body: `Lorem ipsum dolor sit amet,…`
    };
    return {
      props: { Post: Post.default, post, title: `🧧${Post.metadata?.title}` }
    };
  }
</script>

<script>
  export let post;
  export let title;
  export let Post;
</script>

<Post />
<h2>{title}</h2>
<h3>{post.title}</h3>
<p>{post.body}</p>
