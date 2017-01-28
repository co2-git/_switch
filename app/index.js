// @flow

type $caseAsObject = {[case: string]: any};
type $cases = {
  case?: any | any[],
  then: () => any,
}[];

export default function _switch(
  value: any,
  cases: $caseAsObject | $cases,
  _default: ?() => any
): any {
  if (Array.isArray(cases)) {
    for (const _case of cases) {
      if (Array.isArray(_case.case)) {
        const index = _case.case.indexOf(value);
        if (index > -1) {
          return _case.then();
        }
      } else {
        if (_case.case === value) {
          return _case.then();
        }
      }
    }
  } else if (cases && typeof cases === 'object') {
    for (const attr in cases) {
      if (attr === value) {
        return cases[attr];
      }
    }
  }
  if (typeof _default === 'function') {
    return _default();
  }
}
