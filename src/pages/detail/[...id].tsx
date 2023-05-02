import {
  Container,
  Grid,
  Typography,
  useTheme as useMuiTheme,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { DateTime } from 'luxon';
import { useRouter } from 'next/router';
import React from 'react';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PageProvider } from '@/components/page-provider';
import { RoverDetail } from '@/components/rover-detail';
import { convertISOToPrettyDate, parseISODateToLuxon } from '@/lib/utility';
import { generateMuiStyles } from '@/styles/pages/detail/[...id]';
import { DetailIdDatePickerOnAcceptValue } from '@/types';

/**
 * Detail id.
 *
 * @constructor
 *
 * @since 1.0.0
 */
export default function DetailId() {
  const muiTheme = useMuiTheme();
  const router = useRouter();
  const { id, maxDate, minDate } = router.query;

  if (
    Array.isArray(id)
    && id[0] !== undefined // Rover name.
    && id[1] !== undefined // Earth date.
  ) {
    return (
      <PageProvider>
        <Header />
        <Container component="main" sx={generateMuiStyles(muiTheme, 'detail')}>
          <Grid container spacing={2} sx={generateMuiStyles(muiTheme, 'detail-grid')}>
            <Grid item xs={12} md={8}>
              <Typography variant="h3">
                {id[0]}
                {' '}
                Rover Photos
              </Typography>
              <Typography variant="body1">
                {convertISOToPrettyDate(id[1])}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <DatePicker
                label="Select a date"
                defaultValue={DateTime.fromISO(id[1])}
                maxDate={parseISODateToLuxon(maxDate)}
                minDate={parseISODateToLuxon(minDate)}
                onAccept={(value: DetailIdDatePickerOnAcceptValue) => {
                  if (value !== null) {
                    const min = parseISODateToLuxon(minDate);
                    const max = parseISODateToLuxon(maxDate);

                    let url = `/detail/${id[0]}/${value.toISODate()}`;

                    if (min !== undefined && max !== undefined) {
                      url += `?minDate=${min.toISODate()}&maxDate=${max.toISODate()}`;
                    } else if (min !== undefined) {
                      url += `?minDate=${min.toISODate()}`;
                    } else if (max !== undefined) {
                      url += `?maxDate=${max.toISODate()}`;
                    }

                    window.open(
                      url,
                      '_self',
                    );
                  }
                }}
                sx={generateMuiStyles(muiTheme, 'detail-date')}
              />
            </Grid>
          </Grid>
          <RoverDetail rover={id[0]} earthDate={id[1]} />
        </Container>
        <Footer />
      </PageProvider>
    );
  }

  return null;
}
