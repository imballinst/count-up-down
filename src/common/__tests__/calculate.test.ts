import { calculate } from '../calculate';

const ANCHOR_DATE = new Date(2020, 2 /* March */, 4);

describe('seconds', () => {
  test('1 second difference into midnight', () => {
    const { result, type } = calculate(
      ANCHOR_DATE,
      new Date(2020, 2 /* March */, 3, 23, 59, 59)
    );

    expect(result.years).toBe(0);
    expect(result.months).toBe(0);
    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(1);

    expect(type).toBe('countdown');
  });

  test('1 second difference after midnight', () => {
    const { result, type } = calculate(
      ANCHOR_DATE,
      new Date(2020, 2 /* March */, 4, 0, 0, 1)
    );

    expect(result.years).toBe(0);
    expect(result.months).toBe(0);
    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(1);

    expect(type).toBe('countup');
  });
});

describe('minutes', () => {
  test('1 minute difference into midnight', () => {
    const { result, type } = calculate(
      ANCHOR_DATE,
      new Date(2020, 2 /* March */, 3, 23, 59, 0)
    );

    expect(result.years).toBe(0);
    expect(result.months).toBe(0);
    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(1);
    expect(result.seconds).toBe(0);

    expect(type).toBe('countdown');
  });

  test('1 minute difference after midnight', () => {
    const { result, type } = calculate(
      ANCHOR_DATE,
      new Date(2020, 2 /* March */, 4, 0, 1, 0)
    );

    expect(result.years).toBe(0);
    expect(result.months).toBe(0);
    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(1);
    expect(result.seconds).toBe(0);

    expect(type).toBe('countup');
  });
});

describe('hours', () => {
  test('1 hour difference into midnight', () => {
    const { result, type } = calculate(
      ANCHOR_DATE,
      new Date(2020, 2 /* March */, 3, 23, 0, 0)
    );

    expect(result.years).toBe(0);
    expect(result.months).toBe(0);
    expect(result.days).toBe(0);
    expect(result.hours).toBe(1);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);

    expect(type).toBe('countdown');
  });

  test('1 hour difference after midnight', () => {
    const { result, type } = calculate(
      ANCHOR_DATE,
      new Date(2020, 2 /* March */, 4, 1, 0, 0)
    );

    expect(result.years).toBe(0);
    expect(result.months).toBe(0);
    expect(result.days).toBe(0);
    expect(result.hours).toBe(1);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);

    expect(type).toBe('countup');
  });
});

describe('days', () => {
  test('1 day difference into midnight', () => {
    const { result, type } = calculate(
      ANCHOR_DATE,
      new Date(2020, 2 /* March */, 3, 0, 0, 0)
    );

    expect(result.years).toBe(0);
    expect(result.months).toBe(0);
    expect(result.days).toBe(1);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);

    expect(type).toBe('countdown');
  });

  test('1 day difference after midnight', () => {
    const { result, type } = calculate(
      ANCHOR_DATE,
      new Date(2020, 2 /* March */, 5, 0, 0, 0)
    );

    expect(result.years).toBe(0);
    expect(result.months).toBe(0);
    expect(result.days).toBe(1);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);

    expect(type).toBe('countup');
  });
});

describe('months', () => {
  test('1 month difference into midnight', () => {
    const { result, type } = calculate(
      ANCHOR_DATE,
      new Date(2020, 1 /* February */, 4, 0, 0, 0)
    );

    expect(result.years).toBe(0);
    expect(result.months).toBe(1);
    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);

    expect(type).toBe('countdown');
  });

  test('1 month difference after midnight', () => {
    const { result, type } = calculate(
      ANCHOR_DATE,
      new Date(2020, 3 /* April */, 4, 0, 0, 0)
    );

    expect(result.years).toBe(0);
    expect(result.months).toBe(1);
    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);

    expect(type).toBe('countup');
  });
});

describe('years', () => {
  test('1 year difference into midnight', () => {
    const { result, type } = calculate(
      ANCHOR_DATE,
      new Date(2019, 2 /* March */, 4, 0, 0, 0)
    );

    expect(result.years).toBe(1);
    expect(result.months).toBe(0);
    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);

    expect(type).toBe('countdown');
  });

  test('1 year difference after midnight', () => {
    const { result, type } = calculate(
      ANCHOR_DATE,
      new Date(2021, 2 /* March */, 4, 0, 0, 0)
    );

    expect(result.years).toBe(1);
    expect(result.months).toBe(0);
    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);

    expect(type).toBe('countup');
  });
});

describe('random stuff', () => {
  test('2021-12-03T12:10:00.000Z to 2021-12-05T11:15:24.219Z', () => {
    const { result, type } = calculate(
      new Date('2021-12-03T12:10:00.000Z'),
      new Date('2021-12-05T11:15:24.219Z')
    );

    expect(result.years).toBe(0);
    expect(result.months).toBe(0);
    expect(result.days).toBe(1);
    expect(result.hours).toBe(23);
    expect(result.minutes).toBe(5);
    expect(result.seconds).toBe(24);

    expect(type).toBe('countup');
  });

  test('2021-12-05T11:15:24.219Z to 2021-12-03T12:10:00.000Z', () => {
    const { result, type } = calculate(
      new Date('2021-12-05T11:15:24.219Z'),
      new Date('2021-12-03T09:45:40.000Z')
    );

    expect(result.years).toBe(0);
    expect(result.months).toBe(0);
    expect(result.days).toBe(2);
    expect(result.hours).toBe(1);
    expect(result.minutes).toBe(29);
    expect(result.seconds).toBe(44);

    expect(type).toBe('countdown');
  });
});
