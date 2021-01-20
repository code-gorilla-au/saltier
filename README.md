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
[debounce(fn, waitMs)] | Creates a throttled function that only invokes func at most once per every wait milliseconds
[trampoline(fn)] | trampoline a recusive function for a safe recusion https://levelup.gitconnected.com/safe-recursion-with-trampoline-in-javascript-dbec2b903022
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

## Typedefs

Name | Description
------ | -----------
[composeFunction] | This callback type is called `requestCallback` and is displayed as a global symbol.


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


## unique(list)

return unique elements from an array

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| list | `Array.<any>` | array |


## union(...lists)

Creates an array of unique values, in order, from all given arrays using

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...lists | `Array.<any>` | arrays to be merged |


## composeTwo(fn1, fn2)

Compose two function

**Kind**: global function  
**Returns**: [`composeFunction`] - compose function  

| Param | Type |
| --- | --- |
| fn1 | [`composeFunction`] | 
| fn2 | [`composeFunction`] | 


## pipe(...fns)

Performs left-to-right function composition

**Kind**: global function  
**Returns**: [`composeFunction`] - compose function  

| Param | Type |
| --- | --- |
| ...fns | [`composeFunction`] | 


## compose(...fns)

Performs right-to-left function composition

**Kind**: global function  
**Returns**: `any` - result of your compose  

| Param | Type |
| --- | --- |
| ...fns | [`composeFunction`] | 


## debounce(fn, waitMs)

Creates a throttled function that only invokes func at most once per every wait milliseconds

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | [`composeFunction`] | function to be invoked |
| waitMs | `Number` | wait milliseconds |


## trampoline(fn)

trampoline a recusive function for a safe recusion
https://levelup.gitconnected.com/safe-recursion-with-trampoline-in-javascript-dbec2b903022

**Kind**: global function  
**Returns**: `function` - function being trampolined  

| Param | Type | Description |
| --- | --- | --- |
| fn | `function` | function to trampoline |


## addPrefix(value, prefixValue)

adds a prefix to a string if it doesn't exist already

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` | string to have the prefix added |
| prefixValue | `string` | expected prefix |


## stripPrefix(value, prefixes)

Strips a string's prefix if present

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` | string to be stripped |
| prefixes | `Array.<string>` | a list of prefix's to strip |


## capitalise(value)

capitalise every word in a given sentence

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | `String` | sentence |


## toSnakeCase(value)

Takes in Pascal, kebab, camel, snake case and converts to snake_case

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | `*` | 


## toTitleCase(value)

Takes in Pascal, kebab, camel, snake case and converts to Title ase

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | `String` | pascal, snake, camel case |


## truncate(text, maxLength)

truncates text if it's length is greater than to equal to max length

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| text | `string` | string to truncate |
| maxLength | `number` | max length of string before truncating |


## mask(secret, maskLength)

mask a secret

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| secret | `string` | secret to be masked |
| maskLength | `number` | how much of the secret should be masked |


## maskHalf(secret)

mask half of the secret

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| secret | `string` | secret to be masked |


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


## composeFunction

This callback type is called `requestCallback` and is displayed as a global symbol.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| value | `any` | 

<!-- LINKS -->

[composeFunction]:#composefunction
[`composeFunction`]:#composefunction
[chunk(chunkSize, list)]:#chunkchunksize-list
[tail(list)]:#taillist
[unique(list)]:#uniquelist
[union(...lists)]:#unionlists
[composeTwo(fn1, fn2)]:#composetwofn1-fn2
[pipe(...fns)]:#pipefns
[compose(...fns)]:#composefns
[debounce(fn, waitMs)]:#debouncefn-waitms
[trampoline(fn)]:#trampolinefn
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
