<script context="module">
  export async function load({ page, fetch, session, context }) {
    try {
      const Post = await import(`../../posts/${page.params.slug}.md`);
      return {
        props: { Post: Post.default }
      };
    } catch (error) {
      return {
        status: 404,
        error: '☣️ Got nada'
      };
    }
  }
</script>

<script>
  export let Post;
</script>

<svelte:component this={Post} />
