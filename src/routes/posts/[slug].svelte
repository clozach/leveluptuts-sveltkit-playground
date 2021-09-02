<script context="module">
  export async function load({ page, fetch, session, context }) {
    const post = {
      title: page.params.slug,
      date: new Date(),
      body: `Lorem ipsum dolor sit amet,…`
    };
    return {
      props: { post }
    };
  }
</script>

<script>
  import Hello from '../../posts/hello.md';
  export let post;
</script>

<Hello />
<h3>{post.title}</h3>
<p>{post.body}</p>
