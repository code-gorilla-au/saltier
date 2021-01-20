## Functions

<dl>
<dt><a href="#tail">tail(list)</a></dt>
<dd><p>return the tail of an array</p>
</dd>
<dt><a href="#unique">unique(list)</a></dt>
<dd><p>return unique elements from an array</p>
</dd>
<dt><a href="#union">union(...lists)</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>Creates an array of unique values, in order, from all given arrays using</p>
</dd>
<dt><a href="#chunk">chunk(chunkSize, list)</a></dt>
<dd><p>slice up an array into chunks</p>
</dd>
<dt><a href="#composeTwo">composeTwo(fn1, fn2)</a> ⇒ <code><a href="#composeFunction">composeFunction</a></code></dt>
<dd><p>Compose two function</p>
</dd>
<dt><a href="#pipe">pipe(...fns)</a> ⇒ <code><a href="#composeFunction">composeFunction</a></code></dt>
<dd><p>Performs left-to-right function composition</p>
</dd>
<dt><a href="#compose">compose(...fns)</a> ⇒ <code>any</code></dt>
<dd><p>Performs right-to-left function composition</p>
</dd>
<dt><a href="#debounce">debounce(fn, waitMs)</a> ⇒ <code>any</code></dt>
<dd><p>Creates a throttled function that only invokes func at most once per every wait milliseconds</p>
</dd>
<dt><a href="#trampoline">trampoline(fn)</a> ⇒ <code>function</code></dt>
<dd><p>trampoline a recusive function for a safe recusion
<a href="https://levelup.gitconnected.com/safe-recursion-with-trampoline-in-javascript-dbec2b903022">https://levelup.gitconnected.com/safe-recursion-with-trampoline-in-javascript-dbec2b903022</a></p>
</dd>
<dt><a href="#stripPrefix">stripPrefix(value, prefixes)</a></dt>
<dd><p>Strips a string&#39;s prefix if present</p>
</dd>
<dt><a href="#addPrefix">addPrefix(value, prefixValue)</a></dt>
<dd><p>adds a prefix to a string if it doesn&#39;t exist already</p>
</dd>
<dt><a href="#capitalise">capitalise(value)</a></dt>
<dd><p>capitalise every word in a given sentence</p>
</dd>
<dt><a href="#splitValues">splitValues(value)</a> ⇒ <code>string</code></dt>
<dd><p>split string to have spaces based on two conditions
split via capitol letters</p>
</dd>
<dt><a href="#toSnakeCase">toSnakeCase(value)</a></dt>
<dd><p>Takes in Pascal, kebab, camel, snake case and converts to snake_case</p>
</dd>
<dt><a href="#toTitleCase">toTitleCase(value)</a></dt>
<dd><p>Takes in Pascal, kebab, camel, snake case and converts to Title ase</p>
</dd>
<dt><a href="#truncate">truncate(text, maxLength)</a></dt>
<dd><p>truncates text if it&#39;s length is greater than to equal to max length</p>
</dd>
<dt><a href="#mask">mask(secret, maskLength)</a></dt>
<dd><p>mask a secret</p>
</dd>
<dt><a href="#maskHalf">maskHalf(secret)</a></dt>
<dd><p>mask half of the secret</p>
</dd>
<dt><a href="#dateToUTC">dateToUTC(date)</a></dt>
<dd><p>returns date converted to UTC</p>
</dd>
<dt><a href="#daysBetween">daysBetween(startDate, endDate)</a></dt>
<dd><p>returns the number of days between two dates</p>
</dd>
<dt><a href="#daysSinceDate">daysSinceDate(date)</a></dt>
<dd><p>returns the number of days since the given date</p>
</dd>
<dt><a href="#isDateInPast">isDateInPast(value)</a></dt>
<dd><p>Checks if date is in the past</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#composeFunction">composeFunction</a> : <code>function</code></dt>
<dd><p>This callback type is called <code>requestCallback</code> and is displayed as a global symbol.</p>
</dd>
</dl>

<a name="tail"></a>

## tail(list)
return the tail of an array

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array.&lt;any&gt;</code> | array |

<a name="unique"></a>

## unique(list)
return unique elements from an array

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array.&lt;any&gt;</code> | array |

<a name="union"></a>

## union(...lists) ⇒ <code>Array.&lt;any&gt;</code>
Creates an array of unique values, in order, from all given arrays using

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...lists | <code>Array.&lt;any&gt;</code> | arrays to be merged |

<a name="chunk"></a>

## chunk(chunkSize, list)
slice up an array into chunks

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| chunkSize | <code>number</code> | number of elements per array |
| list | <code>Array.&lt;any&gt;</code> | array to be chunked |

<a name="composeTwo"></a>

## composeTwo(fn1, fn2) ⇒ [<code>composeFunction</code>](#composeFunction)
Compose two function

**Kind**: global function  
**Returns**: [<code>composeFunction</code>](#composeFunction) - compose function  

| Param | Type |
| --- | --- |
| fn1 | [<code>composeFunction</code>](#composeFunction) | 
| fn2 | [<code>composeFunction</code>](#composeFunction) | 

<a name="pipe"></a>

## pipe(...fns) ⇒ [<code>composeFunction</code>](#composeFunction)
Performs left-to-right function composition

**Kind**: global function  
**Returns**: [<code>composeFunction</code>](#composeFunction) - compose function  

| Param | Type |
| --- | --- |
| ...fns | [<code>composeFunction</code>](#composeFunction) | 

<a name="compose"></a>

## compose(...fns) ⇒ <code>any</code>
Performs right-to-left function composition

**Kind**: global function  
**Returns**: <code>any</code> - result of your compose  

| Param | Type |
| --- | --- |
| ...fns | [<code>composeFunction</code>](#composeFunction) | 

<a name="debounce"></a>

## debounce(fn, waitMs) ⇒ <code>any</code>
Creates a throttled function that only invokes func at most once per every wait milliseconds

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | [<code>composeFunction</code>](#composeFunction) | function to be invoked |
| waitMs | <code>Number</code> | wait milliseconds |

<a name="trampoline"></a>

## trampoline(fn) ⇒ <code>function</code>
trampoline a recusive function for a safe recusion
https://levelup.gitconnected.com/safe-recursion-with-trampoline-in-javascript-dbec2b903022

**Kind**: global function  
**Returns**: <code>function</code> - function being trampolined  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | function to trampoline |

<a name="stripPrefix"></a>

## stripPrefix(value, prefixes)
Strips a string's prefix if present

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | string to be stripped |
| prefixes | <code>Array.&lt;string&gt;</code> | a list of prefix's to strip |

<a name="addPrefix"></a>

## addPrefix(value, prefixValue)
adds a prefix to a string if it doesn't exist already

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | string to have the prefix added |
| prefixValue | <code>string</code> | expected prefix |

<a name="capitalise"></a>

## capitalise(value)
capitalise every word in a given sentence

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | sentence |

<a name="splitValues"></a>

## splitValues(value) ⇒ <code>string</code>
split string to have spaces based on two conditions
split via capitol letters

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="toSnakeCase"></a>

## toSnakeCase(value)
Takes in Pascal, kebab, camel, snake case and converts to snake_case

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="toTitleCase"></a>

## toTitleCase(value)
Takes in Pascal, kebab, camel, snake case and converts to Title ase

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | pascal, snake, camel case |

<a name="truncate"></a>

## truncate(text, maxLength)
truncates text if it's length is greater than to equal to max length

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | string to truncate |
| maxLength | <code>number</code> | max length of string before truncating |

<a name="mask"></a>

## mask(secret, maskLength)
mask a secret

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| secret | <code>string</code> | secret to be masked |
| maskLength | <code>number</code> | how much of the secret should be masked |

<a name="maskHalf"></a>

## maskHalf(secret)
mask half of the secret

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| secret | <code>string</code> | secret to be masked |

<a name="dateToUTC"></a>

## dateToUTC(date)
returns date converted to UTC

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | date object |

<a name="daysBetween"></a>

## daysBetween(startDate, endDate)
returns the number of days between two dates

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| startDate | <code>Date</code> | date object |
| endDate | <code>Date</code> | date object |

<a name="daysSinceDate"></a>

## daysSinceDate(date)
returns the number of days since the given date

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | date object |

<a name="isDateInPast"></a>

## isDateInPast(value)
Checks if date is in the past

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | Date string |

<a name="composeFunction"></a>

## composeFunction : <code>function</code>
This callback type is called `requestCallback` and is displayed as a global symbol.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

