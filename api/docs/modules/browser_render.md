[count-up-down](../README.md) / browser/render

# Module: browser/render

## Table of contents

### Functions

- [renderToDivs](browser_render.md#rendertodivs)

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

[browser/render.ts:12](https://github.com/imballinst/count-up-down/blob/main/src/browser/render.ts#L12)
