export type Utils = {
	[key: string]: () => void;
};

export interface PasswordOptions {
    useUppercase: boolean;
    useLowercase: boolean;
    useDigits: boolean;
    useSpecialChars: boolean;
}