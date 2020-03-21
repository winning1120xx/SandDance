// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
import { ColorValueRef, NumericValueRef, ProductionRule } from 'vega-typings';
import { ScaleNames, SignalNames } from './constants';
import { SpecContext } from './types';
import { util } from '@msrvida/vega-deck.gl';

export function fill(context: SpecContext, colorFieldName: string, scale: string): ProductionRule<ColorValueRef> {
    const { specColumns, insight, specViewOptions } = context;
    const colorColumn = specColumns.color;
    return colorColumn ?
        colorColumn.isColorData || insight.directColor ?
            {
                field: colorColumn.name
            }
            :
            {
                scale,
                field: colorColumn.quantitative ? colorColumn.name : colorFieldName
            }
        :
        {
            value: util.colorToString(specViewOptions.colors.defaultCube)
        };
}

export function opacity(context: SpecContext): ProductionRule<NumericValueRef> {
    const result: ProductionRule<NumericValueRef> = {
        signal: SignalNames.MarkOpacity
    };
    return result;
}