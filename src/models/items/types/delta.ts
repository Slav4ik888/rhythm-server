interface AttributeMap {
    [key: string]: unknown
}

export interface Op {
    insert?     : string | Record<string, unknown>
    delete?     : number
    retain?     : number | Record<string, unknown>
    attributes? : AttributeMap
}
