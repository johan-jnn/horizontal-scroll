<template>
	<header>
		<h1>Scroll Horizontal</h1>
		<p>
			Mon petit slider à la manière du studio
			<a href="https://akaru.fr" target="_blank">Akaru</a>.
		</p>
		<p style="max-width: 500px; margin-top: 15px">
			Ce slider présente une partie des agences web où j'aimerai avoir
			l'opportunité de faire mon stage.
		</p>

		<div class="mouse">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				version="1.1"
				x="0px"
				y="0px"
				viewBox="0 0 100 125"
				style="enable-background: new 0 0 100 100"
				xml:space="preserve"
			>
				<path
					d="M56.6,79.6L50,86.2l-6.6-6.6c-0.8-0.8-2-0.8-2.8,0s-0.8,2,0,2.8l8,8C49,90.8,49.5,91,50,91s1-0.2,1.4-0.6l8-8  c0.8-0.8,0.8-2,0-2.8S57.4,78.8,56.6,79.6z"
				/>
				<path
					d="M59.4,68.6c-0.8-0.8-2-0.8-2.8,0L50,75.2l-6.6-6.6c-0.8-0.8-2-0.8-2.8,0s-0.8,2,0,2.8l8,8C49,79.8,49.5,80,50,80  s1-0.2,1.4-0.6l8-8C60.2,70.6,60.2,69.4,59.4,68.6z"
				/>
				<path
					d="M68,45V27c0-9.9-8.1-18-18-18s-18,8.1-18,18v18c0,9.9,8.1,18,18,18S68,54.9,68,45z M50,59c-7.7,0-14-6.3-14-14V27  c0-7.7,6.3-14,14-14s14,6.3,14,14v18C64,52.7,57.7,59,50,59z"
				/>
				<path
					d="M50,20c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2v-6C52,20.9,51.1,20,50,20z"
				/>
			</svg>
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	height: 100%;
	width: 100%;
	display: grid;
	place-content: center;
	text-align: center;
	background-image: url("/homeCardBG.svg");
	background-size: cover;
	background-position: center;
	color: white;
	position: relative;
	width: 90vw;

	> h1 {
		font-size: min(50px, 10vw);
	}

	> .mouse {
		fill: white;
		position: absolute;
		width: 75px;
		aspect-ratio: 1 / 1;
		top: 60%;
		left: 50%;
		animation: mouseAnimation infinite ease-in-out alternate 5s;

		@keyframes mouseAnimation {
			from {
				translate: -50% 0;
			}
			to {
				translate: -50% 15px;
			}
		}
	}
}
</style>
