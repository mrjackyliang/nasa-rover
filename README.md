NASA Rover
===========

[![GitHub Releases](https://img.shields.io/github/v/release/mrjackyliang/nasa-rover?style=flat-square&logo=github&logoColor=%23ffffff&color=%23b25da6)](https://github.com/mrjackyliang/nasa-rover/releases)
[![GitHub Top Languages](https://img.shields.io/github/languages/top/mrjackyliang/nasa-rover?style=flat-square&logo=typescript&logoColor=%23ffffff&color=%236688c3)](https://github.com/mrjackyliang/nasa-rover)
[![GitHub License](https://img.shields.io/github/license/mrjackyliang/nasa-rover?style=flat-square&logo=googledocs&logoColor=%23ffffff&color=%2348a56a)](https://github.com/mrjackyliang/nasa-rover/blob/main/LICENSE)
[![Become a GitHub Sponsor](https://img.shields.io/badge/github-sponsor-gray?style=flat-square&logo=githubsponsors&logoColor=%23ffffff&color=%23eaaf41)](https://github.com/sponsors/mrjackyliang)
[![Donate via PayPal](https://img.shields.io/badge/paypal-donate-gray?style=flat-square&logo=paypal&logoColor=%23ffffff&color=%23ce4a4a)](https://liang.nyc/paypal)

This is a coding challenge for creating a small web application that allows a user to browse the Mars Rover photos from NASA's public API.

## Getting Started
To run this application, simply clone the repository, and run the following commands:
```shell
npm install
npm run dev
```

You may optionally build the application before running by running the following commands:
```shell
npm install
npm run build
npm start
```

The application will be available at http://localhost:3000.

**NOTE:** When selecting development mode (`npm run dev`) and if port 3000 is in use, Next.js will attempt to look for other open ports, starting with port 3001 and so on. This will not work if a production build (`npm start`) is being run.

## Environment Variables
The project comes with a default demo key (`DEMO_KEY`) provided by NASA.

To assign your own API key, first sign up for an API key through the [NASA Open APIs](https://api.nasa.gov) website. Then run the following command in the root of this project:

```shell
cp .env.sample .env
```

Once the file is copied, open the `.env` file, then modify the `NASA_API_KEY` variable by replacing the `XXXXX` with the API key NASA emailed to you. For example:

```dotenv
NASA_API_KEY='XXXXX'
```

## NASA API Key
The demo key is heavily rate limited and is highly recommended that you sign up for an API key through the [NASA Open APIs](https://api.nasa.gov) website.

Rate limits are of the following as of May 1st, 2023:
- Demo Key
  - Hourly Limit: 30 requests per IP address per hour
  - Daily Limit: 50 requests per IP address per day
- Web Service Key
  - Daily Limit: 1,000 requests per hour

## Attribution
This project is not affiliated with or endorsed by NASA. The NASA name, logo, and related trademarks are used solely for demonstration purposes.
