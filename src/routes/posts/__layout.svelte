<script context="module">
  export async function load() {
    // For low number of blog posts, pre-loading everything synchronously,
    // via Eager globbing, is fine:
    const posts = import.meta.globEager('../../posts/*.md');
    const postsLists = Object.values(posts);
    const postsMeta = postsLists.map((post) => {
      return post.metadata;
    });
    return {
      props: {
        posts: postsMeta
      }
    };
  }
</script>

<script>
  export let posts;
</script>

<div>
  <slot>§ I Am Default §</slot>

  <aside>
    <h5>Archive</h5>
    <ul>
      <li><a href="/posts">Blog</a></li>
      <li><a href="/posts/about">About Blog</a></li>
      {#each posts.reverse() as post}
        <li><a href={`/posts/${post.slug}`}>{post.title}</a></li>
      {/each}
    </ul>
  </aside>
</div>

<style lang="postcss">
  div {
    background-color: wheat;
  }
  a {
    color: green;
    @apply underline;
  }
</style>
