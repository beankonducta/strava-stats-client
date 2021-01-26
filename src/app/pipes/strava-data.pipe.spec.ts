import { StravaDataPipe } from './strava-data.pipe';

describe('StravaDataPipe', () => {
  it('create an instance', () => {
    const pipe = new StravaDataPipe();
    expect(pipe).toBeTruthy();
  });
});
