import {
  Box,
  Grid,
  ImageListItemBar,
  Typography,
  useTheme as useMuiTheme,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';

import { ApiError } from '@/components/api-error';
import { ApiLoading } from '@/components/api-loading';
import { PhotoModal } from '@/components/photo-modal';
import { convertISOToPrettyDate } from '@/lib/utility';
import { generateMuiStyles } from '@/styles/components/rover-detail';
import {
  RoverDetailFetchDataApi,
  RoverDetailModalStates,
  RoverDetailProps,
  RoverDetailRoverResponse,
} from '@/types';

/**
 * Rover detail.
 *
 * @param {RoverDetailProps} props - Props;
 *
 * @constructor
 *
 * @since 1.0.0
 */
export function RoverDetail(props: RoverDetailProps) {
  const { earthDate, rover } = props;

  const muiTheme = useMuiTheme();
  const [modalStates, setModalStates] = useState({} as RoverDetailModalStates);
  const [roverResponse, setRoverResponse] = useState<RoverDetailRoverResponse>(null);

  useEffect(() => {
    const fetchData = async () => {
      const api = await axios.post<RoverDetailFetchDataApi>(
        '/api/detail',
        {
          roverType: rover,
          earthDate,
        },
      );
      const { data } = api;

      setRoverResponse(data);
    };

    fetchData().catch((error) => {
      setRoverResponse(error.response.data);
    });
  }, [earthDate, rover]);

  useEffect(() => {
    if (roverResponse?.photos !== undefined) {
      const allPhotoIds = roverResponse.photos.reduce((photos, photo) => ({
        ...photos,
        [photo.id]: false,
      }), {});

      setModalStates(allPhotoIds);
    }
  }, [roverResponse]);

  if (roverResponse?.photos !== undefined && roverResponse.photos.length > 0) {
    return (
      <Grid container spacing={3}>
        {
          roverResponse.photos.map((photo) => {
            const {
              camera: photoCamera,
              earth_date: photoEarthDate,
              id: photoId,
              img_src: photoImgSrc,
              rover: photoRover,
              sol: photoSol,
            } = photo;
            const {
              full_name: photoCameraFullName,
            } = photoCamera;
            const {
              name: photoRoverName,
            } = photoRover;

            const altText = `Taken with ${photoCameraFullName} by ${photoRoverName} on ${convertISOToPrettyDate(photoEarthDate)}`;

            return (
              <Grid key={photoId} item xs={12} sm={6} md={3}>
                <LazyLoad>
                  <Box sx={generateMuiStyles(muiTheme, 'detail-grid-item')}>
                    <Box
                      component="img"
                      src={photoImgSrc}
                      alt={altText}
                      onClick={() => setModalStates((prevState) => ({
                        ...prevState,
                        [photoId]: true,
                      }))}
                      sx={generateMuiStyles(muiTheme, 'detail-grid-item-image')}
                    />
                    <ImageListItemBar
                      title={photoCameraFullName}
                      subtitle={(
                        <>
                          <Typography variant="body2">
                            by:
                            {' '}
                            {photoRoverName}
                          </Typography>
                          <Typography variant="body2">
                            on:
                            {' '}
                            {convertISOToPrettyDate(photoEarthDate)}
                            {' '}
                            (Sol
                            {' '}
                            {photoSol}
                            )
                          </Typography>
                        </>
                      )}
                      position="below"
                      sx={generateMuiStyles(muiTheme, 'detail-grid-item-text')}
                    />
                    <PhotoModal
                      open={modalStates[photoId] ?? false}
                      onClose={() => setModalStates((prevState) => ({
                        ...prevState,
                        [photoId]: false,
                      }))}
                      imgSrc={photoImgSrc}
                      alt={altText}
                    />
                  </Box>
                </LazyLoad>
              </Grid>
            );
          })
        }
      </Grid>
    );
  }

  if (roverResponse?.photos !== undefined && roverResponse.photos.length === 0) {
    return (
      <ApiError code="NO_RESULTS" message="No photos were found from the NASA Mars Rover Photos API." />
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
