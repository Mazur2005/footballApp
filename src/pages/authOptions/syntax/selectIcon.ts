const message = "/src/assets/icon/message.svg";
const password = "/src/assets/icon/password.svg";
const profile = "/src/assets/icon/profile.svg";
const phone = "/src/assets/icon/call.svg";
const address = "/src/assets/icon/home.svg";
const show = "/src/assets/icon/show.svg";
const hide = "/src/assets/icon/hide.svg";

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
export const getHideOrShow = (isVisibilityPassword: boolean): string =>
	isVisibilityPassword ? show : hide;
