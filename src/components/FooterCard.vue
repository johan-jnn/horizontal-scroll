<script setup lang="ts">
import { ref, watchEffect } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const hearts = ref<HTMLOrSVGImageElement[]>();
const heartsContainer = ref<HTMLDivElement>();

const { tween } = defineProps<{
	tween?: GSAPTween;
}>();

watchEffect(() => {
	if (heartsContainer.value && tween) {
		const randomRotation = gsap.utils.random(0, 360, 1, true);
		const randomPosition = gsap.utils.random(0, 100, 1, true);
		const randomSize = gsap.utils.random(20, 125, 1, true);

		gsap.to(hearts.value || [], {
			rotate: () => randomRotation() + "deg",
			top: () => randomPosition() + "%",
			left: () => randomPosition() + "%",
			width: randomSize,
			duration: 3,
			stagger: 0.005,
			ease: "elastic.out",
			scrollTrigger: {
				trigger: heartsContainer.value,
				containerAnimation: tween,
				start: "left center"
			},
		});
	}
});
</script>

<template>
	<footer>
		<div class="background" ref="heartsContainer">
			<!-- Created with Inkscape (http://www.inkscape.org/) -->
			<svg
				xmlns:svg="http://www.w3.org/2000/svg"
				xmlns="http://www.w3.org/2000/svg"
				version="1.0"
				v-for="_ in 25"
				ref="hearts"
				viewBox="2.5 7.65 640 575.43"
			>
				<defs id="defs4"></defs>
				<g id="layer1">
					<path
						d="M 297.29747,550.86823 C 283.52243,535.43191 249.1268,505.33855 220.86277,483.99412 C 137.11867,420.75228 125.72108,411.5999 91.719238,380.29088 C 29.03471,322.57071 2.413622,264.58086 2.5048478,185.95124 C 2.5493594,147.56739 5.1656152,132.77929 15.914734,110.15398 C 34.151433,71.768267 61.014996,43.244667 95.360052,25.799457 C 119.68545,13.443675 131.6827,7.9542046 172.30448,7.7296236 C 214.79777,7.4947896 223.74311,12.449347 248.73919,26.181459 C 279.1637,42.895777 310.47909,78.617167 316.95242,103.99205 L 320.95052,119.66445 L 330.81015,98.079942 C 386.52632,-23.892986 564.40851,-22.06811 626.31244,101.11153 C 645.95011,140.18758 648.10608,223.6247 630.69256,270.6244 C 607.97729,331.93377 565.31255,378.67493 466.68622,450.30098 C 402.0054,497.27462 328.80148,568.34684 323.70555,578.32901 C 317.79007,589.91654 323.42339,580.14491 297.29747,550.86823 z"
						id="path2417"
						fill="#f75e5e"
					></path>
					<g
						transform="translate(129.28571,-64.285714)"
						id="g2221"
					></g>
				</g>
			</svg>
		</div>

		<h2>Et bien d'autres !</h2>
		<p>
			N'hésite pas à partager mon travail si ce petit projet t'as plus !
		</p>

		<section>
			<h3>Hey !</h3>
			<p>
				Je suis actuellement à la recherche d'une agence web sur Lyon
				afin de réaliser mon stage de 2 mois sur l'année 2024/2025.
			</p>
			<p>
				Le mieux pour moi serait un stage dans le domaine du
				développement web (front & back) dans une agence sur Lyon.
			</p>
			<p>
				Si vous pensez pouvoir me prendre afin que j'en apprenne
				toujours plus, voici les moyens de me joindre :
			</p>

			<ul>
				<li>
					Email:
					<a href="mailto:johan.janin@gmail.com"
						>johan.janin@gmail.com</a
					>
				</li>
				<li>
					LinkedIn:
					<a
						href="https://www.linkedin.com/in/johan-janin/"
						target="_blank"
						>johan-janin</a
					>
				</li>
				<li>
					Sur mon site:
					<p>CV, Formulaire de contact, Portfolio, ...</p>
					<a href="https://johan-janin.com/contact" target="_blank">
						<img
							src="/contact.png"
							alt="QR Code pour accéder à l'url https://johan-janin.com/contact"
						/>
						<span>johan-janin.com/contact</span>
					</a>
				</li>
			</ul>
		</section>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	width: calc(100vw - var(--scrollbar-width, 0));
	height: 100%;
	display: grid;
	place-content: center;
	text-align: center;
	position: relative;
	color: #fcfffa;
	padding: 0 20px;

	> h2 {
		font-size: min(75px, 10vw);
	}

	> section {
		margin-top: 15px;
		text-align: left;
		backdrop-filter: blur(10px);
		padding: 15px;
		border-radius: 10px;
		> h3 {
			font-size: 45px;
		}

		> ul {
			list-style: none;
			margin-top: 10px;
			display: grid;
			grid-template-areas:
				"email linkedin"
				"website website";
			gap: 15px;

			> li {
				text-align: center;

				&:nth-of-type(1) {
					grid-area: email;
				}
				&:nth-of-type(2) {
					grid-area: linkedin;
				}
				&:nth-of-type(3) {
					grid-area: website;
					> p {
						opacity: 0.75;
					}
					> a {
						display: block;
						width: min(250px, 100%);
						margin: 5px auto;
						> img {
							width: 100%;
							aspect-ratio: 1 / 1;
							max-height: 20vh;
							object-fit: contain;
						}
					}
				}
			}
		}
	}

	> .background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background-color: #1e1f26;

		overflow: hidden;

		> svg {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 0;
			aspect-ratio: 1 / 1;
			rotate: 0deg;
		}
	}
}
</style>
