// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as types from './types';


function generatePassword(length: number, options: { useUppercase: boolean, useLowercase: boolean, useDigits: boolean, useSpecialChars: boolean }): string {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const specialChars = '_'; // '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characterPool = '';
    if (options.useUppercase) {characterPool += uppercaseChars;}
    if (options.useLowercase) {characterPool += lowercaseChars;}
    if (options.useDigits) {characterPool += digits;}
    if (options.useSpecialChars) {characterPool += specialChars;}

    if (characterPool === '') {
        throw new Error('At least one character type must be selected!');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    return password;
}


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "texpert" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('texpert.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from texpert!');		
	});

	context.subscriptions.push(disposable);

	// All functions
	const utils: types.Utils = {
		'toUpperCase': () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const selection = editor.selection; // Get the current selection
				const text = editor.document.getText(selection); // Get the selected text
				const upperCaseText = text.toUpperCase(); // Convert to uppercase
	
				// Apply the changes to the text in the editor
				editor.edit(editBuilder => {
					editBuilder.replace(selection, upperCaseText); // Replace the selected text with uppercase text
				});
			} else {
				vscode.window.showInformationMessage('No text selected!');
			}
		},
		'toLowerCase': () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const selection = editor.selection; // Get the current selection
				const text = editor.document.getText(selection); // Get the selected text
				const lowerCaseText = text.toLowerCase(); // Convert to lowercase
	
				// Apply the changes to the text in the editor
				editor.edit(editBuilder => {
					editBuilder.replace(selection, lowerCaseText); // Replace the selected text with lowercase text
				});
			} else {
				vscode.window.showInformationMessage('No text selected!');
			}
		},
		'toTitleCase': () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const selection = editor.selection; // Get the current selection
				const text = editor.document.getText(selection); // Get the selected text
				const titleCaseText = text.replace(
					/\w\S*/g,
					text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
				);
	
				// Apply the changes to the text in the editor
				editor.edit(editBuilder => {
					editBuilder.replace(selection, titleCaseText); // Replace the selected text with lowercase text
				});
			} else {
				vscode.window.showInformationMessage('No text selected!');
			}
		},
		'toSnakeCase': () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const selection = editor.selection; // Get the current selection
				const text = editor.document.getText(selection); // Get the selected text
				const snakeCaseText = text.replace(/\W+/g, " ")
					.split(/ |\B(?=[A-Z])/)
					.map(word => word.toLowerCase())
					.join('_');
		
				// Apply the changes to the text in the editor
				editor.edit(editBuilder => {
					editBuilder.replace(selection, snakeCaseText); // Replace the selected text with lowercase text
				});
			} else {
				vscode.window.showInformationMessage('No text selected!');
			}
		},
		'toCamelCase': () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const selection = editor.selection; // Get the current selection
				const text = editor.document.getText(selection); // Get the selected text
				const camelCaseText = text.replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
		
				// Apply the changes to the text in the editor
				editor.edit(editBuilder => {
					editBuilder.replace(selection, camelCaseText); // Replace the selected text with lowercase text
				});
			} else {
				vscode.window.showInformationMessage('No text selected!');
			}
		},
		'toPascalCase': () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const selection = editor.selection; // Get the current selection
				const text = editor.document.getText(selection); // Get the selected text
				const pascalCaseText = text
					.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
    				.map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    				.join("");
		
				// Apply the changes to the text in the editor
				editor.edit(editBuilder => {
					editBuilder.replace(selection, pascalCaseText); // Replace the selected text with lowercase text
				});
			} else {
				vscode.window.showInformationMessage('No text selected!');
			}
		},
		'toKebabCase': () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const selection = editor.selection; // Get the current selection
				const text = editor.document.getText(selection); // Get the selected text
				const kebabCaseText = text
					.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
					.join('-')
					.toLowerCase();
		
				// Apply the changes to the text in the editor
				editor.edit(editBuilder => {
					editBuilder.replace(selection, kebabCaseText); // Replace the selected text with lowercase text
				});
			} else {
				vscode.window.showInformationMessage('No text selected!');
			}
		},
		'reverseText': () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const selection = editor.selection; // Get the current selection
				const text = editor.document.getText(selection); // Get the selected text
				const reversedText = [...text].reverse().join(''); // reverse the string
	
				// Apply the changes to the text in the editor
				editor.edit(editBuilder => {
					editBuilder.replace(selection, reversedText); // Replace the selected text with reversed text
				});
			} else {
				vscode.window.showInformationMessage('No text selected!');
			}
		},
		'removeWhitespace': () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const selection = editor.selection; // Get the current selection
				const text = editor.document.getText(selection); // Get the selected text
				const cleanedText = text.replace(/\s+/g, '');
	
				// Apply the changes to the text in the editor
				editor.edit(editBuilder => {
					editBuilder.replace(selection, cleanedText); // Replace the selected text with cleaned text
				});
			} else {
				vscode.window.showInformationMessage('No text selected!');
			}			
		},
		'removeExtraSpace': () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const selection = editor.selection; // Get the current selection
				const text = editor.document.getText(selection); // Get the selected text
				const cleanedText = text.replace(/\s+/g, ' ');
	
				// Apply the changes to the text in the editor
				editor.edit(editBuilder => {
					editBuilder.replace(selection, cleanedText); // Replace the selected text with cleaned text
				});
			} else {
				vscode.window.showInformationMessage('No text selected!');
			}			
		},
		'cleanText': () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const selection = editor.selection; // Get the current selection
				const text = editor.document.getText(selection); // Get the selected text
				const charMap = {
					'“': '"',
					'”': '"',
					'‘': '\'',
					'’': '\'',
					'—': '-',
				};
				// Remove unwanted characters
				const cleanedText = text.replace(/['"“”‘’\-—]/g, match => charMap[match as keyof typeof charMap] || match);
		
				// Apply the changes to the text in the editor
				editor.edit(editBuilder => {
					editBuilder.replace(selection, cleanedText); // Replace the selected text with cleaned text
				});
			} else {
				vscode.window.showInformationMessage('No text selected!');
			}
		},
		'generatePassword': async () => {
			const length = await vscode.window.showInputBox({
				prompt: 'Enter password length (8-128)',
				value: '16',
				validateInput: (input) => {
					const value = parseInt(input, 10);
					if (isNaN(value) || value < 8 || value > 128) {
						return 'Password length must be between 8 and 128 characters.';
					}
					return null;
				}
			});
			
			if (!length) {return;}

			const passwordLength = parseInt(length, 10);

			// Ask user for password options
			const options = await vscode.window.showQuickPick(
				[
					{ label: 'Use Uppercase Letters', description: 'Includes uppercase letters', picked: true },
					{ label: 'Use Lowercase Letters', description: 'Includes lowercase letters', picked: true },
					{ label: 'Use Digits', description: 'Includes numeric digits', picked: true },
					{ label: 'Use Special Characters', description: 'Includes special characters like @, $, %, etc.', picked: true }
				],
				{
					placeHolder: 'Select password options',
					canPickMany: true
				}
			);

			if (!options) {return;}

			const optionsMap: types.PasswordOptions = {
				useUppercase: options.some(option => option.label === 'Use Uppercase Letters' && option.picked),
				useLowercase: options.some(option => option.label === 'Use Lowercase Letters' && option.picked),
				useDigits: options.some(option => option.label === 'Use Digits' && option.picked),
				useSpecialChars: options.some(option => option.label === 'Use Special Characters' && option.picked)
			};

			try {
				const password = generatePassword(passwordLength, optionsMap);
				
				// Get the active text editor
				const editor = vscode.window.activeTextEditor;
				if (editor) {
					const position = editor.selection.active; // Get the position of the cursor
					editor.edit(editBuilder => {
						// Insert the password at the cursor position
						editBuilder.insert(position, password);
					});
				} else {
					vscode.window.showInformationMessage('No active text editor found.');
				}
			} catch (error: any) {
				vscode.window.showErrorMessage(error.message);
			}
	
		},
	};

	// register all utils
	for (let func in utils) {
		const command = vscode.commands.registerCommand(`texpert.${func}`, utils[func]);
		context.subscriptions.push(command);
	}
}

// This method is called when your extension is deactivated
export function deactivate() {}
