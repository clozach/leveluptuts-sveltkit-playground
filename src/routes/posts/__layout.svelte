<div>
	<slot>§ I Am Default §</slot>

	<aside>
		<h5>Archive</h5>
		<ul>
			<li><a href="/posts">Home (blog)</a></li>
			<li><a href="/posts/about">About (blog)</a></li>
			<li><a href="/">Home (site)</a></li>
			<li><a href="/about">About (site)</a></li>
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
