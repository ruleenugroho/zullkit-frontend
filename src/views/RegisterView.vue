<script setup>
import RegisterForm from "@/components/authentication/RegisterForm.vue";
import IconLayer from "@/components/icons/IconLayer.vue";
import IconBadge from "@/components/icons/IconBadge.vue";
import IconBook from "@/components/icons/IconBook.vue";
</script>

<template>
	<div class="relative overflow-hidden bg-white">
		<div class="mx-auto">
			<div class="flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0">
				<div class="w-full p-5 mx-auto md:max-w-4xl">
					<h2 class="mb-10 text-5xl font-bold text-center">
						<span class="block lg:mb-2">Join & Get Our</span>
						<span class="block">Pro Benefits</span>
					</h2>
				</div>
				<div class="w-full p-5 mx-auto md:max-w-4xl">
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div class="mx-auto md:mx-0">
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
						<div>
							<RegisterForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>