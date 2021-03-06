import { defineStore  } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
	id: "user",
	state: () => ({
		user: false
	}),
	getters: {
		IsLoggedIn: (state) => state.user !== false,
		getUser: (state) => state.user
	},
	actions: {
		async fetchUser() {
			try {
				const { data } = await axios.get("https://zullkit-backend.buildwithangga.id/api/user", {
					headers: {
						Authorization: localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token')
					}
				})
				this.user = data
			} catch (error) {
				this.user = false
			}
		},
		logout() {
			this.user = false
			localStorage.setItem("access_token", null)
			localStorage.setItem("token_type", null)
		}
	}
})