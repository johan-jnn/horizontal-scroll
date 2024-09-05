<script setup lang="ts">
import IndexCard from "./components/IndexCard.vue";
import Slider from "./components/Slider.vue";
import cardsList from "./assets/cardsList";
import { Card } from "./assets/card";
import BuiltInCard from "./components/BuiltInCard.vue";
import FooterCard from "./components/FooterCard.vue";
</script>

<template>
	<Slider
		:cards="[
			[IndexCard, {}],
			...cardsList.map((data, index) => [
				BuiltInCard,
				{ ...data, id: index + 1 }
			] satisfies [Card, object]),
			[FooterCard, {}]
		]"
	/>
</template>
