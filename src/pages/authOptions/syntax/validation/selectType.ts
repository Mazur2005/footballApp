export const selectTypeInput = (
	input: string,
	isVisibilityPassword: boolean
) => {
	if (input === "password" && isVisibilityPassword) return "text";
	switch (input) {
		case "password":
			return "password";
		case "email":
			return "email";
		case "phone":
			return "number";
		default:
			return "text";
	}
};
