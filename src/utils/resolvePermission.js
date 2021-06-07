import Perms from "@/services/accessController";

// TODO: Get user current permissions from stores
let current_permissions = [
	"can_view_navbar",
	"can_view_billing",
	"can_add_user",
	"etc",
];

function deflate_permissions(acc, perms) {
	perms.forEach((item) => {
		let obj = item[1];
		if (Array.isArray(obj)) {
			deflate_permissions(acc, Object.entries(obj));
		} else {
			if (
				Object.keys(obj).filter((k) => !["permission", "component"].includes(k))
			) {
				deflate_permissions(
					acc,
					Object.entries(obj).filter(
						(k) => !["permission", "component"].includes(k[0])
					)
				);
			}
			if (obj["permission"]) {
				acc.push({
					permission: obj.permission,
					component: obj.component,
				});
			}
		}
	});
}
let permissions = [];
deflate_permissions(permissions, Object.entries(Perms));

export function resolvePermission({ permission_required }) {
	if (current_permissions.some((p) => permission_required == p)) {
		let has_permission = permissions.find(
			(p) => p["permission"] == permission_required
		);
		return has_permission?.component ?? !!has_permission?.permission;
	}
}
