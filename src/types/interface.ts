export interface BooleanDictionary {
	[key: string]: boolean;
}

export interface StringDictionary {
	[key: string]: string;
}

export interface PopupData {
	dataName: string;
	header: string;
	text: string;
	link: string;
	path: string;
}

export interface ChangePath {
	text: string;
	link: string;
	path: string;
}
export interface Structure {
	inputs: string[];
	header: string;
	isLogIn: boolean;
	isValidate: boolean;
	isRemindPassword: boolean;
	textOnButton: string;
	changePath: ChangePath;
	popupData?: PopupData;
}
