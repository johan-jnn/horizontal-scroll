<script setup lang="ts">
import { BuiltInCardOptions } from "../assets/card";

defineProps<BuiltInCardOptions>();
</script>

<template>
	<section
		class="card"
		:id="`card-${id}`"
		:style="{
			backgroundColor: color,
			color: fontColor,
			borderColor: fontColor,
			'--font-color': fontColor,
			'--back-color': color,
		}"
	>
		<img :src="cover" :alt="`${title}'s cover'`" />
		<main>
			<div class="top">
				<span class="date">{{ date.getFullYear() }}</span>
				<ul class="tags">
					<li v-for="tag in tags" :key="tag">
						{{ tag }}
					</li>
				</ul>
			</div>
			<h2>
				<span
					class="letter"
					v-for="letter in title"
					:class="{
						space: /\s/.test(letter),
					}"
					>{{ letter }}</span
				>
			</h2>
			<div class="bottom">
				<span class="index">{{ id }}</span>
				<a :href="link" target="_blank" v-if="link"> 🔗 </a>
			</div>
		</main>
	</section>
</template>

<style scoped lang="scss">
.card {
	height: 100vh;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: calc(100% - 240px) auto;
	align-items: end;
	position: relative;
	width: min(calc(100vw - var(--scrollbar-width, 0)), 920px);

	> img {
		width: 100%;
		height: calc(var(--progress, 1) * 100%);
		object-fit: cover;
	}

	> main {
		display: grid;
		grid-template-rows: max-content auto max-content;
		grid-template-columns: 100%;
		align-items: center;
		padding: 15px 10px;
		height: 100%;

		> h2 {
			flex-grow: 1;
			font-size: min(75px, 12vw);
			text-align: center;
			> span {
				display: inline-block;

				&.space {
					width: 0.25em;
				}
			}
		}

		> .top,
		> .bottom {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		> .top {
			> .date {
				padding: 5px 10px;
				border: 1px solid;
				border-radius: 999px;
			}
			> .tags {
				list-style: none;
				display: flex;
				align-items: center;
				gap: 15px;
			}
		}

		> .bottom {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding: 0 10px;

			> .index {
				position: absolute;
				bottom: 5px;
				left: 5px;
			}

			> a {
				aspect-ratio: 1 / 1;
				border: 1px solid var(--font-color, black);
				border-radius: 50%;
				padding: 15px;
				text-decoration: none;
				transition: 0.15s;

				&:hover {
					background-color: var(--font-color, black);
				}
			}
		}
	}

	@media screen and (max-width: 860px) {
		$min-main-height: 240px;
		$max-main-height: 65vh;

		grid-template-rows: auto calc(
				$min-main-height + max(0.25, var(--progress, 1)) * calc($max-main-height - $min-main-height)
			);
	}
}
</style>
