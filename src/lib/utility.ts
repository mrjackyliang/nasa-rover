import { DateTime } from 'luxon';
import numeral from 'numeral';

import {
  ConvertISOToPrettyDateIso,
  ConvertISOToPrettyDateReturns,
  FormatNumberNumber,
  FormatNumberReturns,
  ParseISODateToLuxonDate,
  ParseISODateToLuxonReturns,
} from '@/types';

/**
 * Convert ISO to pretty date.
 *
 * @param {ConvertISOToPrettyDateIso} iso - ISO.
 *
 * @returns {ConvertISOToPrettyDateReturns}
 *
 * @since 1.0.0
 */
export function convertISOToPrettyDate(iso: ConvertISOToPrettyDateIso): ConvertISOToPrettyDateReturns {
  return DateTime.fromISO(iso).toFormat('MMMM d, yyyy');
}

/**
 * Format number.
 *
 * @param {FormatNumberNumber} number - Number.
 *
 * @returns {FormatNumberReturns}
 *
 * @since 1.0.0
 */
export function formatNumber(number: FormatNumberNumber): FormatNumberReturns {
  return numeral(number).format('0,0');
}

/**
 * Parse ISO date to luxon.
 *
 * @param {ParseISODateToLuxonDate} date - Date.
 *
 * @returns {ParseISODateToLuxonReturns}
 *
 * @since 1.0.0
 */
export function parseISODateToLuxon(date: ParseISODateToLuxonDate): ParseISODateToLuxonReturns {
  if (
    typeof date === 'string'
    && /^\d{4}-\d{2}-\d{2}$/.test(date)
  ) {
    return DateTime.fromISO(date);
  }

  return undefined;
}
