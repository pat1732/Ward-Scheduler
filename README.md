# Ward Scheduler

## Project Structure

- `/functions` - Firebase Cloud Functions (TypeScript, Node 20)
- `/appsscript` - Google Apps Script

## Setup

### Firebase Cloud Functions

1. Navigate to the functions directory:
   ```bash
   cd functions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the TypeScript code:
   ```bash
   npm run build
   ```

4. Deploy functions:
   ```bash
   npm run deploy
   ```

### Google Apps Script

1. Open [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Copy the contents of `/appsscript` files into your project

## Development

- Functions are written in TypeScript and compiled to JavaScript in the `lib/` directory
- Apps Script code is written in Google Apps Script (JavaScript)

