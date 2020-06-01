import {} from 'jasmine';
import { Launches, ILaunch } from '../src/spaceX/launches';

describe('daily_launch_tests', () => {
  it('test filtering fields', async () => {
    const res = [
      {
        flight_number: 1,
        mission_name: 'Mission 1',
        rocket: {
          rocket_name: 'Rocket 1',
          rocket_type: 'Rocket Type 1',
        },
        details: 'space is cool man',
        launch_success: true,
        extraField1: 1,
        extraField2: 2,
        extraField3: 3,
      },
    ];
    const expected = [
      {
        flight_number: 1,
        mission_name: 'Mission 1',
        rocket_name: 'Rocket 1',
        rocket_type: 'Rocket Type 1',
        details: 'space is cool man',
        launch_success: true,
      },
    ];
    const launches = new Launches();
    expect(launches.filterFields(res)).toEqual(expected);
  });

  it('test with invalid date', async () => {
    const launches = new Launches();
    const result = await launches.getLaunchesByYear('jaslkdjalskjdalksdj');
    expect(result).toEqual([
      {
        error: `invalid year`,
      },
    ]);
  });

  it('test with mock call', async () => {
    const res = [
      {
        flight_number: 1,
        mission_name: 'Mission 1',
        rocket: {
          rocket_name: 'Rocket 1',
          rocket_type: 'Rocket Type 1',
        },
        details: 'space is cool man',
        launch_success: true,
      },
    ];
    const expected = [
      {
        flight_number: 1,
        mission_name: 'Mission 1',
        rocket_name: 'Rocket 1',
        rocket_type: 'Rocket Type 1',
        details: 'space is cool man',
        launch_success: true,
      },
    ];
    const launches = new Launches();
    spyOn(launches, 'requestLaunchesByYear').and.returnValue(
      Promise.resolve(res)
    );
    const result = await launches.getLaunchesByYear('2020');
    expect(result).toEqual(expected);
  });

    it('actually make api call, check required fields', async () => {
      const launches = new Launches();
      const result = await launches.getLaunchesByYear('2020');
      expect(!!(result.length
          && result[0].flight_number
          && result[0].mission_name
          && result[0].rocket_name
          && result[0].rocket_type
          )).toBe(true);
    });
});
