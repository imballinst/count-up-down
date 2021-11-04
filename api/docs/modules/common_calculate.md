[count-up-down](../README.md) / common/calculate

# Module: common/calculate

## Table of contents

### Functions

- [calculate](common_calculate.md#calculate)

## Functions

### calculate

▸ **calculate**(`date1?`, `date2?`): `Object`

Calculates the difference of 2 dates. When the numbers inside `result` are negatives,
then it means it is count down and when they are positives, then it means it is count up.
This also reflects in the `type` field in the function return.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date1` | `Date` | The first date to be compared (order doesn't matter) |
| `date2` | `Date` | The second date to be compared (order doesn't matter) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `result` | [`CountResult`](../interfaces/common_types.CountResult.md) |
| `type` | ``"countdown"`` \| ``"countup"`` \| ``"exact"`` |

#### Defined in

[common/calculate.ts:23](https://github.com/imballinst/count-up-down/blob/4ec7333/src/common/calculate.ts#L23)
