export const BREAKPOINTS = {
  mobile: { max: 599 },
  tablet: { min: 600, max: 1023 },
  laptop: { min: 1024, max: 1311 },
  desktop: { min: 1312 },
}

export type BreakpointType = keyof typeof BREAKPOINTS
