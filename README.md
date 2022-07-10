# saltier

Small collection of utility functions

# Install

```bash
npm install https://github.com/code-gorilla-au/saltier.git
```

# Documentation



## Functions

Name | Description
------ | -----------
[chunk(chunkSize, list)] | Creates a new nested array with array elements chunked
[tail(list)] | returns the tail of an array in a brand new array
[unique(list)] | return unique elements from an array
[union(...lists)] | Creates an array of unique values, in order, from all given arrays using
[composeTwo(fn1, fn2)] | Compose two function
[pipe(...fns)] | Performs left-to-right function composition
[compose(...fns)] | Performs right-to-left function composition
[debounce(fn, waitMs)] | Creates a throttled function that invokes after the provided time. Any attempt to invoke the function before the wait will reset the timer
[throttle(fn, waitMs)] | invoke functions at most once per interval
[trampoline(fn)] | trampoline a recursive function for a safe recursion https://levelup.gitconnected.com/safe-recursion-with-trampoline-in-javascript-dbec2b903022
[clamp(min, max, value)] | Restricts a number to be within range
[omit(keys, obj)] | Returns a partial copy of an object omitting the keys specified.
[pick(keys, obj)] | Returns a partial copy of an object containing only the keys specified. If the key does not exist, the property is ignored.
[addPrefix(value, prefixValue)] | adds a prefix to a string if it doesn't exist already
[stripPrefix(value, prefixes)] | Strips a string's prefix if present
[capitalise(value)] | capitalise every word in a given sentence
[toSnakeCase(value)] | Takes in Pascal, kebab, camel, snake case and converts to snake_case
[toTitleCase(value)] | Takes in Pascal, kebab, camel, snake case and converts to Title ase
[truncate(text, maxLength)] | truncates text if it's length is greater than to equal to max length
[mask(secret, maskLength)] | mask a secret
[maskHalf(secret)] | mask half of the secret
[dateToUTC(date)] | returns date converted to UTC
[daysBetween(startDate, endDate)] | returns the number of days between two dates
[daysSinceDate(date)] | returns the number of days since the given date
[isDateInPast(value)] | Checks if date is in the past
[isBetweenDateRange(date, startDate, endDate)] | checks if a date is within a specified date range
[relativeFromToday(date)] | returns the date relative time formatting
[timer(initTime, callback)] | simple stop watch with pause and reset

## Typedefs

Name | Description
------ | -----------
[composeFunction] | This callback type is called `requestCallback` and is displayed as a global symbol.
[RelativeTimeFormat] | 


## chunk(chunkSize, list)

Creates a new nested array with array elements chunked

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| chunkSize | `number` | number of elements per array |
| list | `Array.<any>` | array to be chunked |

**Example**  
```js
// returns [[1,2],[3,4]]
chunk([1,2,3,4], 2)
```

## tail(list)

returns the tail of an array in a brand new array

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| list | `Array.<any>` | array |

**Example**  
```js
// returns [2,3,4]
tail([1,2,3,4])
```

## unique(list)

return unique elements from an array

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| list | `Array.<any>` | array |

**Example**  
```js
// returns [1,2,3,4]
unique([1,1,1,2,3,3,3,4,4,4])
```

## union(...lists)

Creates an array of unique values, in order, from all given arrays using

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...lists | `Array.<any>` | arrays to be merged |

**Example**  
```js
// returns [1,2,3,4]
union([1,2],[3,4])
```

## composeTwo(fn1, fn2)

Compose two function

**Kind**: global function  
**Returns**: [`composeFunction`] - compose function  

| Param | Type |
| --- | --- |
| fn1 | [`composeFunction`] | 
| fn2 | [`composeFunction`] | 

**Example**  
```js
// returns 10
const sum = composeTwo(add(2), add(3))
sum(5)
```

## pipe(...fns)

Performs left-to-right function composition

**Kind**: global function  
**Returns**: [`composeFunction`] - compose function  

| Param | Type |
| --- | --- |
| ...fns | [`composeFunction`] | 

**Example**  
```js
// returns 3
const mathPipe = fns.pipe(
   (value) => value * 2,
   (value) => value - 3,
)(3);
```

## compose(...fns)

Performs right-to-left function composition

**Kind**: global function  
**Returns**: `any` - result of your compose  

| Param | Type |
| --- | --- |
| ...fns | [`composeFunction`] | 

**Example**  
```js
// returns 3
const stuff = fns.compose(
   (value) => value - 3,
   (value) => value * 2,
)(3);
```

## debounce(fn, waitMs)

Creates a throttled function that invokes after the provided time.
Any attempt to invoke the function before the wait will reset the timer

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | [`composeFunction`] | function to be invoked |
| waitMs | `Number` | wait milliseconds |

**Example**  
```js
// foo should be 1
let foo = 0;
const bar = fns.debounce(() => {
   foo += 1;
}, 100);
bar();
bar();
await new Promise((r) => setTimeout(r, 110));
```

## throttle(fn, waitMs)

invoke functions at most once per interval

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | [`composeFunction`] | function to be invoked |
| waitMs | `Number` | wait in milliseconds |

**Example**  
```js
// count should be 2
let count = 0;
const bar = fns.throttle(() => {
    count += 1;
}, 100);
bar();
bar();
bar();
await new Promise((r) => setTimeout(r, 110));
bar();
```

## trampoline(fn)

trampoline a recursive function for a safe recursion
https://levelup.gitconnected.com/safe-recursion-with-trampoline-in-javascript-dbec2b903022

**Kind**: global function  
**Returns**: `function` - function being trampolined  

| Param | Type | Description |
| --- | --- | --- |
| fn | `function` | function to trampoline |

**Example**  
```js
// returns true
function recursiveFn(n) {
  if (n < 0) {
    return true;
  }
  return function f() {
    return recursiveFn(n - 1);
  };
}
trampoline(recursiveFn)
```

## clamp(min, max, value)

Restricts a number to be within range

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| min | `number` | min value |
| max | `number` | max value |
| value | `number` | value to be evaluated |

**Example**  
```js
// returns 1
const value = clamp(1,10,-1);
```
**Example**  
```js
// returns 10
const value = clamp(1, 10, 11);
```
**Example**  
```js
// returns 5
const value = clamp(1, 10, 5);
```

## omit(keys, obj)

Returns a partial copy of an object omitting the keys specified.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| keys | `Array.<string>` | properties to omit |
| obj | `object` | object to iterate |

**Example**  
```js
// should return { a: 1 }
omit(['b'], { a:1, b:2 })
```

## pick(keys, obj)

Returns a partial copy of an object containing only the keys specified.
If the key does not exist, the property is ignored.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| keys | `Array.<string>` | properties to pick |
| obj | `object` | object to iterate |

**Example**  
```js
// should return { a:1 }
pick(['a], { a:1,b:2 })
```

## addPrefix(value, prefixValue)

adds a prefix to a string if it doesn't exist already

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` | string to have the prefix added |
| prefixValue | `string` | expected prefix |

**Example**  
```js
// returns flashsuper
addPrefix(super, flash)
```

## stripPrefix(value, prefixes)

Strips a string's prefix if present

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` | string to be stripped |
| prefixes | `Array.<string>` | a list of prefix's to strip |

**Example**  
```js
// returns super
stripPrefix(superflash, super)
```

## capitalise(value)

capitalise every word in a given sentence

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | `String` | sentence |

**Example**  
```js
// returns Hello World
capitalise(hello world)
```

## toSnakeCase(value)

Takes in Pascal, kebab, camel, snake case and converts to snake_case

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | `string` | 

**Example**  
```js
// returns hello_world
toSnakeCase(helloWorld)
```

## toTitleCase(value)

Takes in Pascal, kebab, camel, snake case and converts to Title ase

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | `String` | pascal, snake, camel case |

**Example**  
```js
// returns Hello World
toTitleCase(hello_world)
```

## truncate(text, maxLength)

truncates text if it's length is greater than to equal to max length

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| text | `string` | string to truncate |
| maxLength | `number` | max length of string before truncating |

**Example**  
```js
//returns hello ...
truncate('hello world', 5)
```

## mask(secret, maskLength)

mask a secret

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| secret | `string` | secret to be masked |
| maskLength | `number` | how much of the secret should be masked |

**Example**  
```js
// returns snap***
mask(snapFoo, 3)
```

## maskHalf(secret)

mask half of the secret

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| secret | `string` | secret to be masked |

**Example**  
```js
// returns Foo***
maskHalf(FooBar)
```

## dateToUTC(date)

returns date converted to UTC

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| date | `Date` | date object |


## daysBetween(startDate, endDate)

returns the number of days between two dates

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| startDate | `Date` | date object |
| endDate | `Date` | date object |


## daysSinceDate(date)

returns the number of days since the given date

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| date | `Date` | date object |


## isDateInPast(value)

Checks if date is in the past

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | `String` | Date string |


## isBetweenDateRange(date, startDate, endDate)

checks if a date is within a specified date range

**Kind**: global function  
**Returns**: `boolean` - boolean  

| Param | Type | Description |
| --- | --- | --- |
| date | `Date` | date to be checked |
| startDate | `Date` | lower bound of date range |
| endDate | `Date` | upper bound of date range |

**Example**  
```js
// returns true
isBetweenDateRange(today(), yesterday(), tomorrow())
```

## relativeFromToday(date)

returns the date relative time formatting

**Kind**: global function  
**Returns**: `string` - date in string format  

| Param | Type | Description |
| --- | --- | --- |
| date | `Date` | date to format |


## timer(initTime, callback)

simple stop watch with pause and reset

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| initTime | `Number` | starting time to count down |
| callback | `TimerFunc` | callback function |

**Example**  
```js
const stopwatch = timer((value) => {
   console.log(value);
});
stopwatch.start();
```

## composeFunction

This callback type is called `requestCallback` and is displayed as a global symbol.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| value | `any` | 


## RelativeTimeFormat

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| relativeValue | `Number` | relative value (can be negative) |
| formatUnit | `String` | format units (seconds, minutes, days, weeks, months) |

<!-- LINKS -->

[composeFunction]:#composefunction
[RelativeTimeFormat]:#relativetimeformat
[`composeFunction`]:#composefunction
[chunk(chunkSize, list)]:#chunkchunksize-list
[tail(list)]:#taillist
[unique(list)]:#uniquelist
[union(...lists)]:#unionlists
[composeTwo(fn1, fn2)]:#composetwofn1-fn2
[pipe(...fns)]:#pipefns
[compose(...fns)]:#composefns
[debounce(fn, waitMs)]:#debouncefn-waitms
[throttle(fn, waitMs)]:#throttlefn-waitms
[trampoline(fn)]:#trampolinefn
[clamp(min, max, value)]:#clampmin-max-value
[omit(keys, obj)]:#omitkeys-obj
[pick(keys, obj)]:#pickkeys-obj
[addPrefix(value, prefixValue)]:#addprefixvalue-prefixvalue
[stripPrefix(value, prefixes)]:#stripprefixvalue-prefixes
[capitalise(value)]:#capitalisevalue
[toSnakeCase(value)]:#tosnakecasevalue
[toTitleCase(value)]:#totitlecasevalue
[truncate(text, maxLength)]:#truncatetext-maxlength
[mask(secret, maskLength)]:#masksecret-masklength
[maskHalf(secret)]:#maskhalfsecret
[dateToUTC(date)]:#datetoutcdate
[daysBetween(startDate, endDate)]:#daysbetweenstartdate-enddate
[daysSinceDate(date)]:#dayssincedatedate
[isDateInPast(value)]:#isdateinpastvalue
[isBetweenDateRange(date, startDate, endDate)]:#isbetweendaterangedate-startdate-enddate
[relativeFromToday(date)]:#relativefromtodaydate
[timer(initTime, callback)]:#timerinittime-callback
