import Navbar from "@/components/Navbar.svelte";
export default {
	Navbar: {
		billing: {
			permission: "can_view_billing",
		},
		permission: "can_view_navbar",
		component: Navbar,
	},
	Home: [
		{
			Statistic: {
				permission: "can_view_statistic",
				component: Navbar,
			},
			Activity: {
				permission: "can_view_activity",
				component: Navbar,
			},
			User: {
				permission: "can_view_users",
				component: Navbar,
			},
		},
	],
};
