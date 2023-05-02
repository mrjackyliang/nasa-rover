NASA Rover
===========
This is a coding challenge for creating a small application that allows a user to browse the Mars Rover photos from NASA's public API.

## Getting Started
To run this application, simply clone the repository, and run the following commands:
```shell
npm install
npm run dev
```

The application will be available at http://localhost:3000. If port 3000 is in use, Next.js will attempt to look for other open ports, starting with port 3001 and so on.

You may optionally build the application before running by running the following commands:
```shell
npm install
npm run build
npm run start
```

## Environment Variables
The project comes with a default demo key (`DEMO_KEY`) provided by NASA.

To assign your own API key, make a copy of the `.env.sample` file located in the root of this project, then modify the `NASA_API_KEY` variable. For example:

```dotenv
NASA_API_KEY='XXXXX'
```

Simply replace the `XXXXX` with the API key NASA emailed to you.

## NASA API Key
The demo key is heavily rate limited and is highly recommended that you sign up for an API key through the [NASA Open APIs](https://api.nasa.gov) website.

Rate limits are of the following as of May 1st, 2023:
- Demo Key
  - Hourly Limit: 30 requests per IP address per hour
  - Daily Limit: 50 requests per IP address per hour
- Web Service Key
  - Daily Limit: 1,000 requests per hour

## Attribution
This project is not affiliated with or endorsed by NASA. The NASA name, logo, and related trademarks are used solely for demonstration purposes.
