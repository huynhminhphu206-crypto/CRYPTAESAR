# CRYPTAESAR

### A Unicode-Based Secret Message Encryption System

CRYPTAESAR is a web application designed to help users encrypt, decrypt, and exchange secret messages using a custom Unicode-based character-shifting mechanism.

## Features

- **Encrypt Messages:** Convert normal text into encrypted messages.
- **Decrypt Messages:** Recover the original message using the corresponding shift value.
- **Custom Numeric Key:** Use a numeric value to control the character-shifting process.
- **Unicode Processing:** Process characters through their numeric Unicode-related values.
- **Message Exchange:** Allow users to share encrypted messages with others.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## How It Works

CRYPTAESAR converts each character into a numeric character code and applies a mathematical operation using the numeric shift value.

- **Encryption:** Original character code + shift value.
- **Decryption:** Encrypted character code - shift value.

The resulting numeric values are converted back into characters to produce the message.

## How to Use

1. Enter your message in the input field.
2. Enter the numeric shift value.
3. Click **ENCRYPT** to generate an encrypted message.
4. Share the encrypted message and its corresponding key with the recipient.
5. The recipient enters the encrypted message and the same key.
6. Click **DECRYPT** to recover the original message.

## Project Structure

```text
CRYPTAESAR/
│
├── index.html
├── style.css
├── js.js
├── README.md
└── ALGORITHM_DESIGN.txt
```

## Limitations

CRYPTAESAR is a personal programming project designed for learning and experimentation. Its encryption mechanism is not intended for protecting highly sensitive information or replacing modern cryptographic standards.

## Project Purpose

This project aims to develop practical programming skills through JavaScript, string manipulation, Unicode processing, and the implementation of a custom message encryption and decryption mechanism.

---

**Project:** CRYPTAESAR
