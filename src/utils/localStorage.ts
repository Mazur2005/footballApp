interface Props {
	email?: string;
}

export const setLocalStorage = (valueToSaveInLocalStorage: Props) => {
	const { email } = valueToSaveInLocalStorage;
	if (email) {
		localStorage.setItem("email", email);
	}
};
export const getLocalStorage = (getValueLocalStorage: string) => {
	return localStorage.getItem(getValueLocalStorage);
};
