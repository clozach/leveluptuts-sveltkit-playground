<script context="module">
  export async function load({ page, fetch, session, context }) {
    const Post = await import(`../../posts/${page.params.slug}.md`);
    return {
      props: { Post: Post.default }
    };
  }
</script>

<script>
  export let Post;
</script>

<Post />
