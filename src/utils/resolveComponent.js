import Perms from "@/services/accessController";

// TODO: Get user current permissions from stores
let current_permissions = ["can_view_navbar", "can_add_user", "etc"];

function deflate_permissions(acc, perms) {
	perms.forEach((item) => {
		if (Array.isArray(item[1])) {
			deflate_permissions(acc, Object.entries(item[1]));
		} else {
			if (!item[1]["permission"]) {
				deflate_permissions(acc, Object.entries(item[1]));
			} else {
				acc.push(item[1]);
			}
		}
	});
}
let permissions = [];
deflate_permissions(permissions, Object.entries(Perms));

export function resolveComponent({ permission_required }) {
	if (current_permissions.some((p) => permission_required == p)) {
		return permissions.find((p) => p["permission"] == permission_required)
			?.component;
	}
}
