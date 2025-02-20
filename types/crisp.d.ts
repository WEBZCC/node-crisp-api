export = Crisp;
/**
 * Crisp API Library
 * @class
 * @classdesc This is the Crisp Library. Handles REST and RTM operations
 */
declare function Crisp(): void;
declare class Crisp {
    auth: {};
    /**
     * @private
     * @type {string}
    */
    private _tier;
    /** @private */
    private _rest;
    /** @private */
    private _rtm;
    /** @private */
    private _useragent;
    /** @private */
    private _emitter;
    /** @private */
    private _socket;
    /** @private */
    private _socketScheduler;
    /** @private */
    private _lastEventRebind;
    /** @private */
    private _socketBindHooks;
    /** @private */
    private _boundEvents;
    setRestHost: (host: string) => void;
    setRtmHost: (host: string) => void;
    setRtmMode: (mode: string) => void;
    setTier: (tier: string) => void;
    authenticate: (identifier: string, key: string) => void;
    authenticateTier: (tier: string, identifier: string, key: string) => void;
    head: (resource: string, query: object, body: object) => any;
    get: (resource: string, query: object) => any;
    post: (resource: string, query: object, body: object) => any;
    patch: (resource: string, query: object, body: object) => any;
    put: (resource: string, query: object, body: object) => any;
    delete: (resource: string, query: object, body: object) => any;
    on: (event: string, callback: Function) => any;
    rebindSocket: () => any;
    _prepareRestUrl: (paths: any[]) => string;
    _prepareServices: () => void;
    _prepareResources: (serviceInstance: object, resources: any[]) => void;
    _prepareBroker: (fnBindHook: Function) => any;
    _connectLoopback: () => any;
    _connectSocket: (rtmHostOverride: string) => any;
    _emitAuthenticateSocket: () => void;
    _unstackBrokerBindHooks: (modeInstance: object) => void;
    _request: (resource: string, method: string, query: object, body: object, resolve: Function, reject: Function) => void;
}
declare namespace Crisp {
    export { RTM_MODES, AVAILABLE_RTM_MODES, DEFAULT_REQUEST_TIMEOUT, DEFAULT_SOCKET_TIMEOUT, DEFAULT_SOCKET_RECONNECT_DELAY, DEFAULT_SOCKET_RECONNECT_DELAY_MAX, DEFAULT_SOCKET_RECONNECT_FACTOR, DEFAULT_SOCKET_SCHEDULE, DEFAULT_EVENT_REBIND_INTERVAL_MIN, DEFAULT_USERAGENT_PREFIX, DEFAULT_REST_HOST, DEFAULT_REST_BASE_PATH, DEFAULT_RTM_MODE, DEFAULT_RTM_EVENTS, Crisp };
}
declare var RTM_MODES: object;
declare var AVAILABLE_RTM_MODES: string[];
declare var DEFAULT_REQUEST_TIMEOUT: number;
declare var DEFAULT_SOCKET_TIMEOUT: number;
declare var DEFAULT_SOCKET_RECONNECT_DELAY: number;
declare var DEFAULT_SOCKET_RECONNECT_DELAY_MAX: number;
declare var DEFAULT_SOCKET_RECONNECT_FACTOR: number;
declare var DEFAULT_SOCKET_SCHEDULE: number;
declare var DEFAULT_EVENT_REBIND_INTERVAL_MIN: number;
declare var DEFAULT_USERAGENT_PREFIX: string;
declare var DEFAULT_REST_HOST: string;
declare var DEFAULT_REST_BASE_PATH: string;
declare var DEFAULT_RTM_MODE: string;
declare var DEFAULT_RTM_EVENTS: string[];
