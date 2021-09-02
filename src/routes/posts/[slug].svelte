<script context="module">
  export async function load({ page, fetch, session, context }) {
    try {
      const Post = await import(`../../posts/${page.params.slug}.md`);
      return {
        props: { Post: Post.default }
      };
    } catch (error) {
      return {
        status: 303,
        redirect: '/posts'
      };
    }
  }
</script>

<script>
  export let Post;
</script>

<svelte:component this={Post} />
