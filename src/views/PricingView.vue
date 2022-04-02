<script setup>
import { RouterLink } from "vue-router";
import IconLayer from "@/components/icons/IconLayer.vue";
import IconBadge from "@/components/icons/IconBadge.vue";
import IconBook from "@/components/icons/IconBook.vue";
</script>

<template>
	<div class="relative overflow-hidden bg-white">
		<div class="mx-auto">
			<div class="flex flex-col items-center w-full sm:justify-center sm:pt-0">
				<div class="w-full p-5 mx-auto mt-10 md:max-w-7xl">
					<h2 class="mb-4 text-5xl font-bold text-center">
						<span class="block lg:mb-2">Friendly Pricing,</span>
						<span class="block">High Quality Design</span>
					</h2>
					<p class="mb-5 text-lg text-center text-gray-500">Working faster and better than before</p>
				</div>
				<div class="w-full p-5 mx-auto mb-10 md:max-w-4xl">
					<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
						<div>
							<div class="p-8 border rounded-3xl">
								<h1 class="text-5xl font-semibold">
									IDR 2,000
									<span class="text-xl font-light text-gray-500">/month</span>
								</h1>
								<h2 class="text-lg font-semibold mt-7">Basic Plan</h2>
								<p class="mb-6 text-gray-500">Suitable for new team</p>
								<ul class="mb-6 text-gray-700">
									<li class="mb-3">
										<img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt />

										Customizable layers
									</li>
									<li class="mb-3">
										<img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt />

										Official documentation
									</li>
									<li class="mb-3">
										<img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt />

										SVG icons
									</li>
									<li class="mb-3">
										<img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt />

										SVG illustrations
									</li>
									<li class="mb-3">
										<img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt />

										Pre-built design screen
									</li>
								</ul>
								<RouterLink
									to="success"
									class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-md md:px-10 hover:shadow"
								>Checkout Now</RouterLink>
							</div>
						</div>
						<div>
							<div class="p-8 border rounded-3xl">
								<h1 class="text-5xl font-semibold">
									IDR 9,000
									<span class="text-xl font-light text-gray-500">/month</span>
								</h1>
								<h2 class="text-lg font-semibold mt-7">Gold Plan</h2>
								<p class="mb-6 text-gray-500">Suitable for big company</p>
								<ul class="mb-6 text-gray-700">
									<li class="mb-3">
										<img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt />

										Customizable layers
									</li>
									<li class="mb-3">
										<img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt />

										Official documentation
									</li>
									<li class="mb-3">
										<img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt />

										SVG icons
									</li>
									<li class="mb-3">
										<img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt />

										SVG illustrations
									</li>
									<li class="mb-3">
										<img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt />

										Pre-built design screen
									</li>
									<li class="mb-3">
										<img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt />

										Coded template
									</li>
									<li class="mb-3">
										<img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt />

										Support 24/7
									</li>
									<li class="mb-3">
										<img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt />

										Private designer group
									</li>
									<li class="mb-3">
										<img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt />

										Unlock cloning app
									</li>
								</ul>
								<RouterLink
									to="success"
									class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
								>Checkout Now</RouterLink>
							</div>
						</div>
					</div>
				</div>
				<div class="w-full p-5 mx-auto mb-10 md:max-w-7xl">
					<div class="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 md:mx-0">
						<div class="mb-12">
								<div class="block mb-2">
									<IconLayer />
									<h3 class="inline-block ml-2 text-lg font-semibold">Customizable</h3>
								</div>
								<p class="mt-2 text-lg text-gray-500">
									Accelerate your work with our millions
									<br />of ready-to-use design projects.
								</p>
							</div>
							<div class="mb-12">
								<div class="block mb-2">
									<IconBadge />
									<h3 class="inline-block ml-2 text-lg font-semibold">500 Fortune</h3>
								</div>
								<p class="mt-2 text-lg text-gray-500">
									Accelerate your work with our millions
									<br />of ready-to-use design projects.
								</p>
							</div>
							<div class="mb-12">
								<div class="block mb-2">
									<IconBook />

									<h3 class="inline-block ml-2 text-lg font-semibold">Documentation</h3>
								</div>
								<p class="mt-2 text-lg text-gray-500">
									Accelerate your work with our millions
									<br />of ready-to-use design projects.
								</p>
							</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>