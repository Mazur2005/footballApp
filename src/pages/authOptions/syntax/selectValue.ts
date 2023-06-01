const message = "/src/assets/icon/message.svg";
const password = "/src/assets/icon/password.svg";
const profile = "/src/assets/icon/profile.svg";
const phone = "/src/assets/icon/call.svg";
const address = "/src/assets/icon/home.svg";

export const selectIcon = (input: string) => {
	switch (input) {
		case "Email":
			return message;
		case "Password":
			return password;
		case "Name":
			return profile;
		case "Phone":
			return phone;
		case "Address":
			return address;
	}
};
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
