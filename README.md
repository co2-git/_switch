underscore-switch
===

`_switch` is a functional programming substitute for `switch` statement in JavaScript. It aims at more readability and reasoning. It comes at a small cost since it uses a function instead of native condition blocks. At the end, it comes down to each one's own preferences. For some, it would make no sense sugar-coding a language construct - to others, it helps reason about their scope variables by always using functions.

# Install

```bash
npm i -S underscore-switch
```

# Usage

The most straight-forward usage is to switch string cases via an object which keys match the possible cases:

```javascript
import _switch from 'underscore-switch';

const role = 'ADMIN';

_switch(role, {ADMIN: true, DEVELOPER: false}); // true
```

If you have cases that can not be translated into strings - such as numbers, you would use an array.

```javascript
import _switch from 'underscore-switch';

const roles = {ADMIN: 1, DEVELOPER: 2};
const role = 1;

_switch(role, [
  {case: roles.ADMIN, then: () => true},
  {case: roles.DEVELOPER, then: () => false},
]); // true
```

You can use an array for your cases as well to specify the same behavior for various cases:

```javascript
import _switch from 'underscore-switch';

const roles = {ADMIN: 1, DEVELOPER: 2, TESTER: 3};
const role = 1;

_switch(role, [
  {case: roles.ADMIN, then: () => true},
  {case: [roles.DEVELOPER, roles.TESTER], then: () => false},
]); // true
```

You can specify a default value as the third argument which has to be a function:

```javascript
import _switch from 'underscore-switch';

const myVar = 'barz';

_switch(myVar, {foo: 1, bar: 2}, () => 3); // 3
```

# TODO

- Symbol support
