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

3. Set up environment secrets:
   
   The API requires an `API_KEY` secret for authentication. Set it using Firebase CLI:
   ```bash
   firebase functions:secrets:set API_KEY
   ```
   You'll be prompted to enter the secret value. Alternatively, you can set it directly:
   ```bash
   echo "your-secret-api-key" | firebase functions:secrets:set API_KEY
   ```

   For local development, create a `.env` file in the `functions` directory:
   ```
   API_KEY=your-secret-api-key
   ```
   Note: The `.env` file is gitignored. For production, always use Firebase secrets.

4. Build the TypeScript code:
   ```bash
   npm run build
   ```

5. Deploy functions:
   ```bash
   npm run deploy
   ```

### API Usage

The API is available at the base path `/api/v1`. All endpoints require authentication headers:

- `X-API-KEY`: Must match the `API_KEY` secret configured in Firebase
- `X-USER-EMAIL`: User's email address

**Example request:**
```bash
curl -X GET https://your-region-your-project.cloudfunctions.net/api/api/v1/health \
  -H "X-API-KEY: your-secret-api-key" \
  -H "X-USER-EMAIL: user@example.com"
```

**Available endpoints:**
- `GET /api/v1/health` - Health check endpoint

### Google Apps Script

1. Open [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Copy the contents of `/appsscript` files into your project

## Development

- Functions are written in TypeScript and compiled to JavaScript in the `lib/` directory
- Apps Script code is written in Google Apps Script (JavaScript)

