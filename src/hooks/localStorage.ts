interface Props {
	email?: string;
}

export const setLocalStorage = (valueToSaveInLocal: Props) => {
	const { email } = valueToSaveInLocal;
	console.log(email);
	if (email) {
		localStorage.setItem("email", email);
		return;
	}
};
