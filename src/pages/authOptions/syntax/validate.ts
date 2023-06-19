import { errorMessage } from "./errorMessage";
import { KeyboardEvent } from "react";
const {
	CANT_USE_SPECIAL__CHARACTERS,
	USE_AT_ONE_SPECIAL__CHARACTERS,
	USE_AT_LEAST_ONE_CAPITAL_LETTER,
	USE_AT_LEAST_ONE_DIGIT,
	THIS_NUMBER_DOEST_EXIST,
	MIN_NUMBER_OF_CHARACTER_IS_4,
	MIN_NUMBER_OF_CHARACTER_IS_6,
	MAX_NUMBER_OF_CHARACTER_IS_10,
	MAX_NUMBER_OF_CHARACTER_IS_20,
} = errorMessage;

const nameValidate = (value: string) => {
	if (/[\W_]/g.test(value)) return CANT_USE_SPECIAL__CHARACTERS;
	if (!/^.{4,}$/g.test(value)) return MIN_NUMBER_OF_CHARACTER_IS_4;
	if (!/^.{1,10}$/g.test(value)) return MAX_NUMBER_OF_CHARACTER_IS_10;
	return true;
};
const passwordValidate = (value: string) => {
	if (!/^.{1,20}$/g.test(value)) return MAX_NUMBER_OF_CHARACTER_IS_20;
	if (!/^.{6,}$/g.test(value)) return MIN_NUMBER_OF_CHARACTER_IS_6;
	if (!/[A-Z]/g.test(value)) return USE_AT_LEAST_ONE_CAPITAL_LETTER;
	if (!/[\W]/.test(value)) return USE_AT_ONE_SPECIAL__CHARACTERS;
	if (!/\d/.test(value)) return USE_AT_LEAST_ONE_DIGIT;
	return true;
};
const phoneValidate = (value: string) => {
	if (!/^.{9}$/.test(value)) return THIS_NUMBER_DOEST_EXIST;
	return true;
};

export const regexValidation =
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

export const preventDefaultInput = (e: KeyboardEvent<HTMLInputElement>) =>
	["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
