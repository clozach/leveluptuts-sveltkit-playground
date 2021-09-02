<script context="module">
  export async function load({ page, fetch, session, context }) {
    const Post = (await import(`../../posts/${page.params.slug}.md`)).default;
    const post = {
      title: page.params.slug,
      date: new Date(),
      body: `Lorem ipsum dolor sit amet,…`
    };
    return {
      props: { Post, post }
    };
  }
</script>

<script>
  export let post;
  export let Post;
</script>

<Post />
<h3>{post.title}</h3>
<p>{post.body}</p>
