<script setup>
defineProps({
	defaultImage: String,
  	galleries: Array
})

</script>

<template>
	<section id="gallery">
		<img :src="defaultImage" alt class="w-full mt-6 rounded-2xl" />
		<div class="grid grid-cols-4 gap-4 mt-4">
			<template v-for="gallery in galleries" :key="gallery.id">
				<div
					@click="defaultImage = gallery.url"
					:class="{ 'ring-2 ring-indigo-500': defaultImage == gallery.url }"
					class="overflow-hidden cursor-pointer rounded-2xl"
				>
					<img :src="gallery.url" class="w-full" alt />
				</div>
			</template>
		</div>
	</section>
</template>