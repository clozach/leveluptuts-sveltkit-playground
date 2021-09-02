<script context="module">
  export async function load({ page, fetch, session, context }) {
    const Hello = (await import('../../posts/hello.md')).default;
    const post = {
      title: page.params.slug,
      date: new Date(),
      body: `Lorem ipsum dolor sit amet,…`
    };
    return {
      props: { Hello, post }
    };
  }
</script>

<script>
  export let post;
  export let Hello;
</script>

<Hello />
<h3>{post.title}</h3>
<p>{post.body}</p>
