[count-up-down](../README.md) / browser

# Module: browser

In the browser module, all functions are not only re-exported, but they are also exposed
in the `window` object. This is for ease of use, so that we can call them directly in the browser.

## Table of contents

### References

- [calculate](browser.md#calculate)

### Functions

- [renderToDivs](browser.md#rendertodivs)

## References

### calculate

Re-exports [calculate](common_calculate.md#calculate)

## Functions

### renderToDivs

▸ **renderToDivs**(`countResult`): `void`

This functions renders the number of years, months, days, hours, minutes, and seconds to the DOM.
Behind the scene, it also pads the numbers. For example, the number `9` becomes "09". To render a complete
timer (from years to seconds), there must be elements in the DOM with the ID `years`, `months`, `days`, `hours`,
`minutes`, and `seconds`. Partial rendering is also supported, e.g. if you only want to render `years`, `months`,
and `days`, then only 3 elements with these IDs need to exist in the DOM.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `countResult` | [`CountResult`](../interfaces/common_types.CountResult.md) | The number of years, months, days, hours, minutes, and seconds in number. |

#### Returns

`void`

#### Defined in

[browser/render.ts:12](https://github.com/imballinst/count-up-down/blob/a0f0581/src/browser/render.ts#L12)
