# Texpert

A Swiss Army Knife for your text - helping you edit, transform, and manage text with ease.

## Features

Texpert offers a wide range of tools to make text editing in Visual Studio Code a breeze. Key features include:

- **Password Generator**: Quickly generate secure, random passwords of custom length and complexity, with options for including uppercase letters, lowercase letters, digits, and special characters. The password is automatically inserted at the cursor position in the active text editor.
  
- **Text Transformation Utilities**: Transform selected text with commands like:
  - Convert to **Uppercase** or **Lowercase**.
  - **Reverse** the selected text.
  - **Remove extra whitespace** from your text.
  

Example screenshots of these features in action:

![Password Generator](images/password-generator.gif)
> The password generator in action.

![Text Transformation](images/text-transformation.gif)
> Converting selected text to uppercase.


## Requirements

Texpert requires **Visual Studio Code** version **1.60.0** or higher. No additional dependencies are required for basic functionality.

## Extension Settings

Texpert does not currently add custom settings to VS Code via `contributes.configuration`. However, you can customize its behavior by modifying the commands available through the command palette.

### Available Commands:

- `texpert.generatePassword`: Generates a secure password and pastes it at the cursor position.
- `texpert.toUpperCase`: Converts selected text to uppercase.
- `texpert.toLowerCase`: Converts selected text to lowercase.
- `texpert.reverseText`: Reverses the selected text.
- `texpert.removeWhitespace`: Removes extra whitespace from the selected text.

## Known Issues

- There are no known issues at this time.
  
If you encounter any problems, please report them via the [GitHub Issues page](https://github.com/r3yc0n1c/texpert/issues).

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of **Texpert**

<!-- ### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z. -->

---

**Enjoy!**
