<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="corner">
		<a href="https://github.com/pch720">
			<img src={github} alt="GitHub" />
		</a>
	</div>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">홈</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">글목록</a>
			</li>
			<li aria-current={$page.url.pathname === '/Todo' ? 'page' : undefined}>
				<a href="/Todo">Todo</a>
			</li>
			<li aria-current={$page.url.pathname === '/tab3' ? 'page' : undefined}>
				<a href="/tab3">커뮤니티</a>
			</li>

		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		/*justify-content: space-between;*/
		border-bottom: black solid 1px;
		padding: 0 1rem 0 1rem;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		border-left: black solid 1px;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0.5em;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
