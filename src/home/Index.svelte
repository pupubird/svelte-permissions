<script>
	import { resolveComponent } from "@/utils/resolveComponent";
	import Perms from "@/services/accessController";

	let navbar_component = resolveComponent({
		permission_required: Perms.Navbar.permission,
	});
</script>

<h1>home</h1>
{#if navbar_component}
	<svelte:component this={navbar_component} />
{:else}
	<h1>No permission</h1>
{/if}

<style>
	h1 {
		color: red;
	}
</style>
