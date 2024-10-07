<script lang="ts">
	import { marked } from 'marked';
	import type { GuideLoadResponse } from './+page.server';

	export let data: GuideLoadResponse;
</script>

<svelte:head>
	<title>{data.name} - Prisma Guide</title>
</svelte:head>

<div class="page">
	<div class="page-container">
		<div class="sidebar-container">
			{#each data.guides as guide}
				<a
					href={`/${guide.path}`}
					class={`sidebar-guide ${data.path === guide.path && 'sidebar-guide-hover'}`}
				>
					{guide.name}
				</a>
			{/each}
		</div>
		<div class="container">
			<div class="content-wrapper">
				<div class="content">
					{@html marked.parse(data.content ?? '')}
				</div>
			</div>
			<div class="aside"></div>
		</div>
		<div class="container-background" />
	</div>
</div>

<style>
	:root {
		--guide-content-max-width: 720px;
		--sidebar-width: 272px;
		--guide-aside-max-width: 256px;
	}

	.page {
		display: flex;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		justify-content: center;
	}

	.page-container {
		display: flex;
		width: 100%;
		max-width: 1400px;
		height: 100%;
	}

	.sidebar-container {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: var(--sidebar-width);
		flex-shrink: 0;
		background-color: #161618;
	}

	.sidebar-guide {
		text-decoration: none;
		font-size: 15px;
		margin: 3px 0px;
		color: #ebebf599;
	}

	.sidebar-guide-hover,
	.sidebar-guide:hover {
		color: #ffc7a8;
	}

	.content-wrapper {
		width: 100%;
		height: calc(100% - 48px * 2);
		padding: 48px 32px 0;
		overflow-y: auto;
	}

	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: var(--guide-content-max-width);
		margin-bottom: 48px;
	}

	.container {
		z-index: 1;
		display: flex;
		width: 100%;
		height: 100%;
		background-color: #1b1b1f;
		padding: 48px 32px 0;
	}

	.container-background {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 50%;
		background-color: #1b1b1f;
	}

	.aside {
		padding-left: 32px;
		margin-left: auto;
		width: 100%;
		max-width: var(--guide-aside-max-width);
	}
</style>
