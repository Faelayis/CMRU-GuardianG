import { useRouter, usePathname } from "expo-router";
import { useMode, UserMode } from "@/contexts/ModeContext";

export const useModeNavigation = () => {
	const router = useRouter();
	const pathname = usePathname();
	const { mode, setMode } = useMode();

	const getCurrentTab = (): string => {
		const segments = pathname.split("/");
		const lastSegment = segments[segments.length - 1];

		if (lastSegment.endsWith("-drive")) {
			return lastSegment.replace("-drive", "");
		} else if (lastSegment.endsWith("-parent")) {
			return lastSegment.replace("-parent", "");
		}

		return "index";
	};

	const switchMode = () => {
		const currentTab = getCurrentTab();
		const newMode: UserMode = mode === "drive" ? "parent" : "drive";

		setMode(newMode);

		const validRoutes = {
			drive: {
				index: "/(tabs-drive)/index-drive",
				explore: "/(tabs-drive)/explore-drive",
				chat: "/(tabs-drive)/chat-drive",
				profile: "/(tabs-drive)/profile-drive",
			},
			parent: {
				index: "/(tabs-parent)/index-parent",
				explore: "/(tabs-parent)/explore-parent",
				chat: "/(tabs-parent)/chat-parent",
				profile: "/(tabs-parent)/profile-parent",
			},
		};

		const targetRoute = validRoutes[newMode][currentTab as keyof typeof validRoutes.drive];
		if (targetRoute) {
			router.push(targetRoute as any);
		}
	};

	const navigateToTab = (tab: string, targetMode?: UserMode) => {
		const targetModeToUse = targetMode || mode;
		setMode(targetModeToUse);

		const validRoutes = {
			drive: {
				index: "/(tabs-drive)/index-drive",
				explore: "/(tabs-drive)/explore-drive",
				chat: "/(tabs-drive)/chat-drive",
				profile: "/(tabs-drive)/profile-drive",
			},
			parent: {
				index: "/(tabs-parent)/index-parent",
				explore: "/(tabs-parent)/explore-parent",
				chat: "/(tabs-parent)/chat-parent",
				profile: "/(tabs-parent)/profile-parent",
			},
		};

		const targetRoute = validRoutes[targetModeToUse][tab as keyof typeof validRoutes.drive];
		if (targetRoute) {
			router.push(targetRoute as any);
		}
	};

	return {
		switchMode,
		navigateToTab,
		getCurrentTab,
		currentMode: mode,
	};
};
