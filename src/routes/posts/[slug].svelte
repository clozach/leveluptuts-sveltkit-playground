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
	export let post;
</script>

<h3>{post.title}</h3>
<p>{post.body}</p>
