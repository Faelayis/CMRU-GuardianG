import React, { createContext, useContext, useState, ReactNode } from "react";

export type UserMode = "drive" | "parent";

interface ModeContextType {
	mode: UserMode;
	toggleMode: () => void;
	setMode: (mode: UserMode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

interface ModeProviderProps {
	children: ReactNode;
}

export const ModeProvider: React.FC<ModeProviderProps> = ({ children }) => {
	const [mode, setModeState] = useState<UserMode>("drive");

	const toggleMode = () => {
		setModeState((prevMode) => (prevMode === "drive" ? "parent" : "drive"));
	};

	const setMode = (newMode: UserMode) => {
		setModeState(newMode);
	};

	return <ModeContext.Provider value={{ mode, toggleMode, setMode }}>{children}</ModeContext.Provider>;
};

export const useMode = (): ModeContextType => {
	const context = useContext(ModeContext);

	if (context === undefined) {
		throw new Error("useMode must be used within a ModeProvider");
	}

	return context;
};
