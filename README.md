# Scrub Detector

Monitor your Everflow campaigns for CVR drops and volume changes in real-time.

## Deployment to Cloudflare Pages

This app is ready to deploy to Cloudflare Pages with the functions folder working.

### Quick Deploy

1. Push this repository to GitHub
2. Go to [Cloudflare Pages](https://dash.cloudflare.com/)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
6. Add environment variable:
   - **Variable name**: `EVERFLOW_API_KEY`
   - **Value**: Your Everflow API key
7. Click "Save and Deploy"

### Environment Variables

The app requires one environment variable:

- `EVERFLOW_API_KEY`: Your Everflow API key for accessing the reporting API

### Features

- **Scrub Detector**: Monitor CVR drops across campaigns
- **Volume Watcher**: Track traffic volume changes
- **Cap Radar**: Monitor campaign caps and limits
- Demo mode available for testing

### API Endpoint

The `/api/everflow` endpoint is a Cloudflare Function that proxies requests to the Everflow API, keeping your API key secure.
