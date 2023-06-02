export const selectTypeInput = (
	input: string,
	isVisibilityPassword: boolean
) => {
	if (input === "Password" && isVisibilityPassword) return "text";
	switch (input) {
		case "Password":
			return "password";
		case "Email":
			return "email";
		case "Phone":
			return "number";
		default:
			return "text";
	}
};
