const app = new Vue({
	el: "#app",
	data: {
		peers: [],
		user: {
			x: 1,
			y: 1.25,
			z: -5
		}
	},
	methods: {
		go() {
			this.user = {
				x: this.user.x + 100,
				y: this.user.y + 100,
				z: this.user.z + 100
			};
		}
	},
	computed: {
		userPos() {
			return `${this.x} ${this.y} ${this.z}`;
		}
	}
});
