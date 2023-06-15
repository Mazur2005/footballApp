import { ValidationRule } from "react-hook-form";
import { errorMessage } from "./errorMessage";
import { KeyboardEvent } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../data/fireBase";

const {
	CANT_USE_SPECIAL__CHARACTERS,
	USE_AT_ONE_SPECIAL__CHARACTERS,
	USE_AT_LEAST_ONE_CAPITAL_LETTER,
	USE_AT_LEAST_ONE_DIGIT,
	THIS_NUMBER_DOEST_EXIST,
	EMAIL_IS_IN_USE,
} = errorMessage;

const nameValidate = (value: string) => {
	if (/[\W_]/g.test(value)) return CANT_USE_SPECIAL__CHARACTERS;
	return true;
};
const passwordValidate = (value: string) => {
	if (!/[A-Z]/g.test(value)) return USE_AT_LEAST_ONE_CAPITAL_LETTER;
	if (!/[\W]/.test(value)) return USE_AT_ONE_SPECIAL__CHARACTERS;
	if (!/\d/.test(value)) return USE_AT_LEAST_ONE_DIGIT;
	return true;
};
const phoneValidate = (value: string) => {
	if (!/^.{9}$/.test(value)) return THIS_NUMBER_DOEST_EXIST;
	return true;
};

const syntaxCheckLength = (number: number, range: string) => {
	return {
		value: number,
		message: `${range} "number of characters is" ${number}`,
	};
};

export const validation =
	(el: string) =>
	(value: string): string | boolean | undefined => {
		switch (el) {
			case "name":
				return nameValidate(value);
			case "password":
				return passwordValidate(value);
			case "phone":
				return phoneValidate(value);	
		}
	};

export const minLength = (el: string): ValidationRule<number> | undefined => {
	switch (el) {
		case "name":
			return syntaxCheckLength(4, "Minimum");
		case "password":
			return syntaxCheckLength(6, "Minimum");
	}
};
export const maxLength = (el: string): ValidationRule<number> | undefined => {
	switch (el) {
		case "name":
			return syntaxCheckLength(10, "Maximum");
		case "password":
			return syntaxCheckLength(20, "Maximum");
	}
};

export const preventInputE = (
	el: string,
	e: KeyboardEvent<HTMLInputElement>
) => {
	if (el === "phone") {
		["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
	}
};
