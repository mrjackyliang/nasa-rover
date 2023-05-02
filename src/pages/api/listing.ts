import axios from 'axios';

import {
  ListingApi,
  ListingRequest,
  ListingResponse,
  ListingReturns,
} from '@/types';

/**
 * Listing.
 *
 * @param {ListingRequest}  request  - Request.
 * @param {ListingResponse} response - Response.
 *
 * @returns {ListingReturns}
 *
 * @since 1.0.0
 */
export default async function listing(request: ListingRequest, response: ListingResponse): ListingReturns {
  const apiKey = process.env.NASA_API_KEY ?? 'DEMO_KEY';

  try {
    const api = await axios.get<ListingApi>(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/',
      {
        params: {
          api_key: apiKey,
        },
      },
    );
    const { data, status } = api;

    response.status(status).json(data);

    return;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response !== undefined) {
      response.status(error.response.status).json(error.response.data);

      return;
    }
  }

  response.status(500).json({
    error: {
      code: 'UNKNOWN_ERROR',
      message: 'An unknown server error has occurred.',
    },
  });
}
