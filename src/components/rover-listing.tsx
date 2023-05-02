import {
  Box,
  Grid,
  Link,
  Paper,
  Typography,
  useTheme as useMuiTheme,
} from '@mui/material';
import axios from 'axios';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';

import { ApiError } from '@/components/api-error';
import { ApiLoading } from '@/components/api-loading';
import { convertISOToPrettyDate, formatNumber } from '@/lib/utility';
import { generateMuiStyles } from '@/styles/components/rover-listing';
import { RoverListingFetchDataApi, RoverListingRoverResponse } from '@/types';

/**
 * Rover listing.
 *
 * @constructor
 *
 * @since 1.0.0
 */
export function RoverListing() {
  const muiTheme = useMuiTheme();
  const [roverResponse, setRoverResponse] = useState<RoverListingRoverResponse>(null);

  useEffect(() => {
    const fetchData = async () => {
      const api = await axios.get<RoverListingFetchDataApi>('/api/listing');
      const { data } = api;

      setRoverResponse(data);
    };

    fetchData().catch((error) => {
      setRoverResponse(error.response.data);
    });
  }, []);

  if (roverResponse?.rovers !== undefined && roverResponse.rovers.length > 0) {
    return (
      <Box sx={generateMuiStyles(muiTheme, 'listing')}>
        <Typography variant="h4">Welcome!</Typography>
        <Typography variant="body1">Introducing the NASA Mars Rover Photos project, a small yet exciting initiative that allows users to browse through NASA&apos;s Open API and view stunning images captured by the Curiosity, Opportunity, and Spirit rovers on Mars.</Typography>
        <Grid container spacing={3} sx={generateMuiStyles(muiTheme, 'listing-grid')}>
          {
            roverResponse.rovers.map((rover) => {
              const {
                name: roverName,
                landing_date: roverLandingDate,
                launch_date: roverLaunchDate,
                max_date: roverMaxDate,
                total_photos: roverTotalPhotos,
                cameras,
              } = rover;

              return (
                <Grid key={rover.id} item xs={12} sm={6} md={3}>
                  <LazyLoad>
                    <Link
                      component={NextLink}
                      href={`/detail/${roverName.toLowerCase()}/${roverMaxDate}?minDate=${roverLandingDate}&maxDate=${roverMaxDate}`}
                      sx={generateMuiStyles(muiTheme, 'listing-grid-link')}
                    >
                      <Paper sx={generateMuiStyles(muiTheme, 'listing-grid-link-paper')}>
                        <Typography variant="h4">
                          {roverName}
                        </Typography>
                        <Typography variant="body2">
                          <strong>Launch Date:</strong>
                          {' '}
                          {convertISOToPrettyDate(roverLaunchDate)}
                        </Typography>
                        <Typography variant="body2">
                          <strong>Landing Date:</strong>
                          {' '}
                          {convertISOToPrettyDate(roverLandingDate)}
                        </Typography>
                        <Typography variant="body2">
                          <strong>Total Photos:</strong>
                          {' '}
                          {formatNumber(roverTotalPhotos)}
                        </Typography>
                        <Typography variant="body2">
                          <strong>Cameras Available:</strong>
                          {' '}
                          {cameras.length}
                        </Typography>
                      </Paper>
                    </Link>
                  </LazyLoad>
                </Grid>
              );
            })
          }
        </Grid>
      </Box>
    );
  }

  if (roverResponse?.rovers !== undefined && roverResponse.rovers.length === 0) {
    return (
      <ApiError code="NO_RESULTS" message="No rovers were found from the NASA Mars Rover Photos API." />
    );
  }

  if (roverResponse?.error !== undefined) {
    return (
      <ApiError code={roverResponse.error.code} message={roverResponse.error.message} />
    );
  }

  return (
    <ApiLoading />
  );
}
