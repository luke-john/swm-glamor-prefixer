import { CSSProperties, plugins } from 'glamor'
import { prefixes as originalGlamorPrefixer } from 'glamor/lib/plugins'

import * as prefixProperty from 'inline-style-prefixer/utils/prefixProperty'
import * as prefixValue from 'inline-style-prefixer/utils/prefixValue'

/**
 * Originally generated with tools-js/generate-prefixer.js using the following browser list:
 *
 * const browserList = {
 *  chrome: 41, // Google search bot
 *  firefox: 52,
 *  android: 4, // mainly needed for Samsung browser
 *  ios_saf: 9,
 *  safari: 9,
 *  ie: 10,
 *  edge: 13,
 * }
 *
 * A few plugins from the suggested list were removed for various reasons, they are
 * commented out below.
 *
 * To generate a new prefixer, you have to run `node tools-js/generate-prefixer.js`
 *
 * This will create a file *tools-js/prefixData.js* which contains a list of plugins
 * as well as a prefix map of which vendor prefixes are needed for which CSS properties.
 *
 * This file can be used to replace the plugins and prefix map in this file.
 * It has to be converted to TypeScript and formatted nicely.
 */

// probably not needed, not supported in IE anyway
// import * as crossFade from 'inline-style-prefixer/static/plugins/crossFade'
// import * as cursor from 'inline-style-prefixer/static/plugins/cursor'

import * as filter from 'inline-style-prefixer/static/plugins/filter'

// replacing with our own copy below as it adds unnecessary -moz-box
// import * as flex from 'inline-style-prefixer/static/plugins/flex'

import * as flexboxIE from 'inline-style-prefixer/static/plugins/flexboxIE'
import * as flexboxOld from 'inline-style-prefixer/static/plugins/flexboxOld'

// only needed for old Android
// import * as gradient from 'inline-style-prefixer/static/plugins/gradient'

// image-set() doesn't work in IE anyway
// import * as imageSet from 'inline-style-prefixer/static/plugins/imageSet'

// only needed for position:sticky that IE doesn't support anyway
// import * as position from 'inline-style-prefixer/static/plugins/position'

import * as sizing from 'inline-style-prefixer/static/plugins/sizing'

// only needed for old Android, adding unnecessary -moz-transition-property
// import * as transition from 'inline-style-prefixer/static/plugins/transition'

const flexValues: { [key: string]: string[] } = {
    flex: [
        '-webkit-box',
        // '-moz-box',
        '-ms-flexbox',
        '-webkit-flex',
        'flex'
    ],
    'inline-flex': [
        '-webkit-inline-box',
        '-moz-inline-box',
        '-ms-inline-flexbox',
        '-webkit-inline-flex',
        'inline-flex'
    ]
}

const flex = (property: string, value: any): string[] | undefined => {
    if (property === 'display' && flexValues.hasOwnProperty(value)) {
        return flexValues[value]
    }
    return undefined
}

const w = ['Webkit']
const m = ['Moz']
const ms = ['ms']
const wm = ['Webkit', 'Moz']
const wms = ['Webkit', 'ms']
const wmms = ['Webkit', 'Moz', 'ms']

const prefixerPlugins = [filter, flex, flexboxIE, flexboxOld, sizing]

const prefixMap = {
    animation: w,
    animationDelay: w,
    animationDirection: w,
    animationFillMode: w,
    animationDuration: w,
    animationIterationCount: w,
    animationName: w,
    animationPlayState: w,
    animationTimingFunction: w,
    appearance: wm,
    userSelect: wmms,
    textEmphasisPosition: w,
    textEmphasis: w,
    textEmphasisStyle: w,
    textEmphasisColor: w,
    boxDecorationBreak: w,
    clipPath: w,
    maskImage: w,
    maskMode: w,
    maskRepeat: w,
    maskPosition: w,
    maskClip: w,
    maskOrigin: w,
    maskSize: w,
    maskComposite: w,
    mask: w,
    maskBorderSource: w,
    maskBorderMode: w,
    maskBorderSlice: w,
    maskBorderWidth: w,
    maskBorderOutset: w,
    maskBorderRepeat: w,
    maskBorder: w,
    maskType: w,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    fontFeatureSettings: w,
    breakAfter: wms,
    breakBefore: wms,
    breakInside: wms,
    columnCount: w,
    columnFill: w,
    columnGap: w,
    columnRule: w,
    columnRuleColor: w,
    columnRuleStyle: w,
    columnRuleWidth: w,
    columns: w,
    columnSpan: w,
    columnWidth: w,
    backdropFilter: w,
    fontKerning: w,
    scrollSnapType: wms,
    scrollSnapPointsX: wms,
    scrollSnapPointsY: wms,
    scrollSnapDestination: wms,
    scrollSnapCoordinate: wms,
    shapeImageThreshold: w,
    shapeImageMargin: w,
    shapeImageOutside: w,
    hyphens: wms,
    flowInto: wms,
    flowFrom: wms,
    regionFragment: wms,
    tabSize: m,
    flex: ['ms', 'Webkit'],
    flexBasis: w,
    flexDirection: ['ms', 'Webkit'],
    flexGrow: w,
    flexFlow: ['ms', 'Webkit'],
    flexShrink: w,
    flexWrap: ['ms', 'Webkit'],
    alignContent: w,
    alignItems: w,
    alignSelf: w,
    justifyContent: w,
    order: w,
    wrapFlow: ms,
    wrapThrough: ms,
    wrapMargin: ms,
    touchAction: ms,
    gridTemplateColumns: ms,
    gridTemplateRows: ms,
    gridTemplateAreas: ms,
    gridTemplate: ms,
    gridAutoColumns: ms,
    gridAutoRows: ms,
    gridAutoFlow: ms,
    grid: ms,
    gridRowStart: ms,
    gridColumnStart: ms,
    gridRowEnd: ms,
    gridRow: ms,
    gridColumn: ms,
    gridColumnEnd: ms,
    gridColumnGap: ms,
    gridRowGap: ms,
    gridArea: ms,
    gridGap: ms,
    textSizeAdjust: w,
    borderImage: w,
    borderImageOutset: w,
    borderImageRepeat: w,
    borderImageSlice: w,
    borderImageSource: w,
    borderImageWidth: w,
    transitionDelay: w,
    transitionDuration: w,
    transitionProperty: w,
    transitionTimingFunction: w,
    transform: w,
    transformOrigin: w,
    transformOriginX: w,
    transformOriginY: w,
    backfaceVisibility: w,
    perspective: w,
    perspectiveOrigin: w,
    transformStyle: w,
    transformOriginZ: w
}

// stolen from https://github.com/threepointone/glamor/blob/master/src/prefixer.js
export const prefixer = (style: CSSProperties): CSSProperties => {
    // tslint:disable-next-line forin
    for (const property in style) {
        const value = style[property]

        const processedValue = prefixValue(prefixerPlugins, property, value, style, prefixMap)

        if (processedValue) {
            style[property] = processedValue
        }

        prefixProperty(prefixMap, property, style)
    }

    return style
}

export const applyPrefixer = () => {
    plugins.remove(originalGlamorPrefixer)
    plugins.add((node: any) => ({ ...node, style: prefixer({ ...node.style }) }))
}
