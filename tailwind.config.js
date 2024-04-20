module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	darkMode: "class",
	safelist: [
		"text-red-500",
		"text-yellow-500",
		"text-blue-500",
		"text-green-500",
		"text-pink-500",
		"text-violet-500",
		"text-orange-500",
		"border-red-600",
		"border-green-600",
	],
	theme: {
		extend: {
			colors: {
				purple: {
					100: "#faf5ff",
					200: "#e9d8fd",
					300: "#d6bcfa",
					400: "#b794f4",
					500: "#9f7aea", // Example purple color
					600: "#805ad5",
					700: "#6b46c1",
					800: "#553c9a",
					900: "#44337a",
				},
				orange: {
					100: "#fffaf0",
					200: "#feebc8",
					300: "#fbd38d",
					400: "#f6ad55",
					500: "#ed8936", // Example orange color
					600: "#dd6b20",
					700: "#c05621",
					800: "#9c4221",
					900: "#7b341e",
				},
				pink: {
					100: "#fff5f7",
					200: "#fed7e2",
					300: "#fbb6ce",
					400: "#f687b3",
					500: "#ed64a6", // Example pink color
					600: "#d53f8c",
					700: "#b83280",
					800: "#97266d",
					900: "#702459",
				},
			},
			animation: {
				first: "moveVertical 30s ease infinite",
				second: "moveInCircle 20s reverse infinite",
				third: "moveInCircle 40s linear infinite",
				fourth: "moveHorizontal 40s ease infinite",
				fifth: "moveInCircle 20s ease infinite",
			},
			fontFamily: {
				palanquin: ["Palanquin", "sans-serif"],
				average: ["Average Sans", "sans-serif"],
			},
			keyframes: {
				moveHorizontal: {
					"0%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
					"50%": {
						transform: "translateX(50%) translateY(10%)",
					},
					"100%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
				},
				moveInCircle: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"50%": {
						transform: "rotate(180deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				moveVertical: {
					"0%": {
						transform: "translateY(-50%)",
					},
					"50%": {
						transform: "translateY(50%)",
					},
					"100%": {
						transform: "translateY(-50%)",
					},
				},
			},
		},
	},
	plugins: [],
};
