import moment from 'moment';
import fetch from 'node-fetch';

export interface ILaunch {
  flight_number?: number;
  mission_name?: string;
  rocket_name?: string;
  rocket_type?: string;
  details?: string;
  launch_success?: boolean;
  error?: string;
}

export class Launches {
  url = 'https://api.spacexdata.com/v3/launches';

  /**
   * Gets the daily spaceX launches
   * @param date string with YYYY format
   */
  public async getLaunchesByYear(year: string): Promise<ILaunch[]> {
    try {
      // Get the date as a moment object
      const dateAsMoment = moment(year, 'YYYY');
      // Check that the date string is valid, and that the date is before or equal to today's date
      // moment() creates a moment with today's date
      if (!dateAsMoment.isValid() || !dateAsMoment.isSameOrBefore(moment())) {
        return [{ error: 'invalid year' }];
      }
      // Get the parsed request
      const parsed = await this.requestLaunchesByYear(year);
      // Maps and creates the return list
      return this.filterFields(parsed);
    } catch (e) {
      console.log(e);
      return [
        {
          error: `There was an error retrieving this launch`,
        },
      ];
    }
  }

  /**
   * Makes the api request for launches per year
   * @param year
   */
  async requestLaunchesByYear(year: string): Promise<any[]> {
    const res = await fetch(`${this.url}?launch_year=${year}`);
    return res.json();
  }

    /**
     * Gets the daily spaceX launches
     * @param rangeStart 
     * @param rangeEnd
     */
  public async getLaunchesByRange(rangeStart: string, rangeEnd:string): Promise<ILaunch[]> {
    try {
      // Get the date as a moment object
      const rangeStartAsMoment = moment(rangeStart, 'YYYY[-]MM[-]DD');
      const rangeEndAsMoment = moment(rangeEnd, 'YYYY[-]MM[-]DD');
      
      // Check that the date string is valid, and that the date is before or equal to today's date
      // moment() creates a moment with today's date
      if (!rangeStartAsMoment.isValid() || !rangeStartAsMoment.isSameOrBefore(moment())) {
        return [{ error: 'invalid start year' }];
      }
      if (!rangeEndAsMoment.isValid() || !rangeEndAsMoment.isSameOrAfter(moment())) {
        return [{ error: 'invalid end year' }];
      }
      // Get the parsed request
      const parsed = await this.requestLaunchesByRange(rangeStart, rangeEnd);
      // Maps and creates the return list
      return this.filterFields(parsed);
    } catch (e) {
      console.log(e);
      return [
        {
          error: `There was an error retrieving this launch`,
        },
      ];
    }
  }
  /**
   * Makes the api request for launches per year
   * @param rangeStart
   * @param rangeEnd
   */
  async requestLaunchesByRange(rangeStart: string, rangeEnd: string) {
    const res = await fetch(`${this.url}?start=${rangeStart}&end=${rangeEnd}`);
    return res.json();
  }
    
  /**
   * Helpers
   */

  /**
   * Filters out desired fields
   * @param data
   */
  filterFields(data: any[]) {
    return data.map((p) => ({
      flight_number: p.flight_number,
      mission_name: p.mission_name,
      rocket_name: p.rocket?.rocket_name,
      rocket_type: p.rocket?.rocket_type,
      details: p.details,
      launch_success: p.launch_success,
    }));
  }
}
