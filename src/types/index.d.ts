import type { SxProps, Theme } from '@mui/material';
import type { DateTime } from 'luxon';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { AppProps as NextAppProps } from 'next/app';
import type { ReactNode } from 'react';

import type { ApiNasaMarsPhotosRovers } from '@/types/api';

/**
 * Api error.
 *
 * @since 1.0.0
 */
export type ApiErrorPropsCode = string;

export type ApiErrorPropsMessage = string;

export type ApiErrorProps = {
  code: ApiErrorPropsCode;
  message: ApiErrorPropsMessage;
};

/**
 * App.
 *
 * @since 1.0.0
 */
export type AppProps = NextAppProps;

/**
 * Convert ISO to pretty date.
 *
 * @since 1.0.0
 */
export type ConvertISOToPrettyDateIso = string;

export type ConvertISOToPrettyDateReturns = string;

/**
 * Detail.
 *
 * @since 1.0.0
 */
export type DetailRequest = NextApiRequest;

export type DetailResponse = NextApiResponse<ApiNasaMarsPhotosRovers>;

export type DetailReturns = Promise<void>;

export type DetailApi = ApiNasaMarsPhotosRovers;

/**
 * Detail id.
 *
 * @since 1.0.0
 */
export type DetailIdDatePickerOnAcceptValue = DateTime | null;

/**
 * Format number.
 *
 * @since 1.0.0
 */
export type FormatNumberNumber = number;

export type FormatNumberReturns = string;

/**
 * Generate mui styles.
 *
 * @since 1.0.0
 */
export type GenerateMuiStylesTheme = Theme;

export type GenerateMuiStylesId = string;

export type GenerateMuiStylesReturns = SxProps<Theme> | undefined;

/**
 * Generate mui theme.
 *
 * @since 1.0.0
 */
export type GenerateMuiThemeThemeMode = 'light' | 'dark';

export type GenerateMuiThemeReturns = Theme;

/**
 * Header.
 *
 * @since 1.0.0
 */
export type HeaderAnchorElement = null | HTMLElement;

/**
 * Listing.
 *
 * @since 1.0.0
 */
export type ListingRequest = NextApiRequest;

export type ListingResponse = NextApiResponse<ApiNasaMarsPhotosRovers>;

export type ListingReturns = Promise<void>;

export type ListingApi = ApiNasaMarsPhotosRovers;

/**
 * Page provider.
 *
 * @since 1.0.0
 */
export type PageProviderPropsChildren = ReactNode;

export type PageProviderProps = {
  children?: PageProviderPropsChildren;
};

export type PageProviderCurrentTheme = 'light' | 'dark' | null;

/**
 * Parse ISO date to luxon.
 *
 * @since 1.0.0
 */
export type ParseISODateToLuxonDate = unknown;

export type ParseISODateToLuxonReturns = DateTime | undefined;

/**
 * Rover detail.
 *
 * @since 1.0.0
 */
export type RoverDetailPropsRover = string;

export type RoverDetailPropsEarthDate = string;

export type RoverDetailProps = {
  rover: RoverDetailPropsRover;
  earthDate: RoverDetailPropsEarthDate;
};

export type RoverDetailRoverResponse = ApiNasaMarsPhotosRovers | null;

export type RoverDetailFetchDataApi = ApiNasaMarsPhotosRovers;

/**
 * Rover listing.
 *
 * @since 1.0.0
 */
export type RoverListingRoverResponse = ApiNasaMarsPhotosRovers | null;

export type RoverListingFetchDataApi = ApiNasaMarsPhotosRovers;
