<script>
	import { resolvePermission } from "@/utils/resolvePermission";
	import Perms from "@/services/accessController";

	let navbar_component = resolvePermission({
		permission_required: Perms.Navbar.permission,
	});
	console.log(navbar_component);
</script>

<h1>home</h1>

<svelte:component this={navbar_component} />

<style>
	h1 {
		color: red;
	}
</style>
