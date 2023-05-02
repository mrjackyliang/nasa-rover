import axios from 'axios';
import { z } from 'zod';

import {
  DetailApi,
  DetailRequest,
  DetailResponse,
  DetailReturns,
} from '@/types';

/**
 * Detail.
 *
 * @param {DetailRequest}  request  - Request.
 * @param {DetailResponse} response - Response.
 *
 * @returns {DetailReturns}
 *
 * @since 1.0.0
 */
export default async function detail(request: DetailRequest, response: DetailResponse): DetailReturns {
  const schema = z.object({
    roverType: z.string().nonempty(),
    earthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  });
  const result = schema.safeParse(request.body);
  const apiKey = process.env.NASA_API_KEY ?? 'DEMO_KEY';

  if (!result.success) {
    response.status(400).json({
      error: {
        code: 'INVALID_REQUEST',
        message: 'Your request is invalid. Please check your request and try again.',
      },
    });

    return;
  }

  try {
    const api = await axios.get<DetailApi>(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${result.data.roverType}/photos`,
      {
        params: {
          earth_date: result.data.earthDate,
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
