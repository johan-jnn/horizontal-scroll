<script setup lang="ts">
import { Card } from "../assets/card";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { onMounted, ref } from "vue";
import { getScrollBarWidth } from "../lib/scrollBarWidth";
gsap.registerPlugin(ScrollTrigger);

const { cards } = defineProps<{ cards: [Card, object][] }>();
const slider = ref<HTMLDivElement>();
const container = ref<HTMLUListElement>();
const cardsList = ref<HTMLDivElement[]>();
const sliderTween = ref<GSAPTween | null>(null);

onMounted(() => {
	if (!(container.value && cardsList.value && slider.value))
		throw new Error("No container/cards found.");

	const containerWidth =
		container.value!.offsetWidth -
		slider.value!.clientWidth -
		getScrollBarWidth(true);
	const snaps = cardsList.value.map((card) => {
		return card.getBoundingClientRect().left / containerWidth;
	});

	sliderTween.value = gsap.to(container.value, {
		translateX: () =>
			-container.value!.offsetWidth + slider.value!.clientWidth,
		scrollTrigger: {
			scrub: 1,
			trigger: container.value,
			start: "top top",
			end: () => `+=${containerWidth}`,
			pin: true,
			invalidateOnRefresh: true,
			snap: snaps,
		},
		ease: "none",
	});

	cardsList.value.slice(1).forEach((card, index, arr) => {
		const tm = gsap.timeline({
			scrollTrigger: {
				trigger: card,
				start: "left right",
				end: () =>
					index >= arr.length - 1
						? "right 100%"
						: window.innerWidth < 850
						? "left 0%"
						: "left 15%",
				containerAnimation: sliderTween.value!,
				scrub: 1,
			},
		});
		tm.from(
			card.querySelectorAll("h2 .letter:not(.space)"),
			{
				translateY: 15,
				opacity: 0,
				stagger: 0.25,
			},
			"<+=50%"
		)
			.fromTo(
				card,
				{
					"--progress": 0,
				},
				{
					"--progress": 1,
					duration: () => tm.duration(),
				},
				0
			)
			.from(
				card.querySelector("main > .top"),
				{
					opacity: 0,
					duration: () => tm.duration() / 5,
				},
				tm.duration() / 7.5
			);
	});
});
</script>

<template>
	<div id="slider" ref="slider">
		<ol ref="container">
			<li
				v-for="[element, args] in cards"
				:key="element.id"
				ref="cardsList"
			>
				<component
					:is="element"
					v-bind="{ ...args }"
					:tween="sliderTween"
				></component>
			</li>
		</ol>
	</div>
</template>

<style scoped lang="scss">
#slider {
	width: 100%;
	overflow: hidden;
	ol {
		list-style: none;
		display: flex;
		width: fit-content;
		height: 100vh;

		> li {
			height: 100%;
			overflow: hidden;
		}
	}
}
</style>
