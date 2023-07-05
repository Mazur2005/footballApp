import message from "/src/assets/icon/message.svg";
import password from "/src/assets/icon/password.svg";
import profile from "/src/assets/icon/profile.svg";
import phone from "/src/assets/icon/call.svg";
import address from "/src/assets/icon/home.svg";
import show from "/src/assets/icon/show.svg";
import hide from "/src/assets/icon/hide.svg";

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
