const message = "/src/assets/icon/message.svg";
const password = "/src/assets/icon/password.svg";
const profile = "/src/assets/icon/profile.svg";
const phone = "/src/assets/icon/call.svg";
const address = "/src/assets/icon/home.svg";
const show = "/src/assets/icon/show.svg";
const hide = "/src/assets/icon/hide.svg";

export const selectIcon = (input: string) => {
	switch (input) {
		case "email":
			return message;
		case "password":
			return password;
		case "name":
			return profile;
		case "phone":
			return phone;
		case "address":
			return address;
	}
};
export const getHideOrShow = (isVisibilityPassword: boolean): string =>
	isVisibilityPassword ? show : hide;
