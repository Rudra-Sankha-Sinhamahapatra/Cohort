"use strict";

// generated/core/ApiError.ts
var ApiError = class extends Error {
  constructor(request2, response, message) {
    super(message);
    this.name = "ApiError";
    this.url = response.url;
    this.status = response.status;
    this.statusText = response.statusText;
    this.body = response.body;
    this.request = request2;
  }
};

// generated/core/CancelablePromise.ts
var CancelError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "CancelError";
  }
  get isCancelled() {
    return true;
  }
};
var CancelablePromise = class {
  #isResolved;
  #isRejected;
  #isCancelled;
  #cancelHandlers;
  #promise;
  #resolve;
  #reject;
  constructor(executor) {
    this.#isResolved = false;
    this.#isRejected = false;
    this.#isCancelled = false;
    this.#cancelHandlers = [];
    this.#promise = new Promise((resolve2, reject) => {
      this.#resolve = resolve2;
      this.#reject = reject;
      const onResolve = (value) => {
        if (this.#isResolved || this.#isRejected || this.#isCancelled) {
          return;
        }
        this.#isResolved = true;
        if (this.#resolve) this.#resolve(value);
      };
      const onReject = (reason) => {
        if (this.#isResolved || this.#isRejected || this.#isCancelled) {
          return;
        }
        this.#isRejected = true;
        if (this.#reject) this.#reject(reason);
      };
      const onCancel = (cancelHandler) => {
        if (this.#isResolved || this.#isRejected || this.#isCancelled) {
          return;
        }
        this.#cancelHandlers.push(cancelHandler);
      };
      Object.defineProperty(onCancel, "isResolved", {
        get: () => this.#isResolved
      });
      Object.defineProperty(onCancel, "isRejected", {
        get: () => this.#isRejected
      });
      Object.defineProperty(onCancel, "isCancelled", {
        get: () => this.#isCancelled
      });
      return executor(onResolve, onReject, onCancel);
    });
  }
  get [Symbol.toStringTag]() {
    return "Cancellable Promise";
  }
  then(onFulfilled, onRejected) {
    return this.#promise.then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return this.#promise.catch(onRejected);
  }
  finally(onFinally) {
    return this.#promise.finally(onFinally);
  }
  cancel() {
    if (this.#isResolved || this.#isRejected || this.#isCancelled) {
      return;
    }
    this.#isCancelled = true;
    if (this.#cancelHandlers.length) {
      try {
        for (const cancelHandler of this.#cancelHandlers) {
          cancelHandler();
        }
      } catch (error) {
        console.warn("Cancellation threw an error", error);
        return;
      }
    }
    this.#cancelHandlers.length = 0;
    if (this.#reject) this.#reject(new CancelError("Request aborted"));
  }
  get isCancelled() {
    return this.#isCancelled;
  }
};

// generated/core/OpenAPI.ts
var OpenAPI = {
  BASE: "http://localhost:8787",
  VERSION: "1.0.0",
  WITH_CREDENTIALS: false,
  CREDENTIALS: "include",
  TOKEN: void 0,
  USERNAME: void 0,
  PASSWORD: void 0,
  HEADERS: void 0,
  ENCODE_PATH: void 0
};

// generated/core/request.ts
var isDefined = (value) => {
  return value !== void 0 && value !== null;
};
var isString = (value) => {
  return typeof value === "string";
};
var isStringWithValue = (value) => {
  return isString(value) && value !== "";
};
var isBlob = (value) => {
  return typeof value === "object" && typeof value.type === "string" && typeof value.stream === "function" && typeof value.arrayBuffer === "function" && typeof value.constructor === "function" && typeof value.constructor.name === "string" && /^(Blob|File)$/.test(value.constructor.name) && /^(Blob|File)$/.test(value[Symbol.toStringTag]);
};
var isFormData = (value) => {
  return value instanceof FormData;
};
var base64 = (str) => {
  try {
    return btoa(str);
  } catch (err) {
    return Buffer.from(str).toString("base64");
  }
};
var getQueryString = (params) => {
  const qs = [];
  const append = (key, value) => {
    qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  };
  const process = (key, value) => {
    if (isDefined(value)) {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          process(key, v);
        });
      } else if (typeof value === "object") {
        Object.entries(value).forEach(([k, v]) => {
          process(`${key}[${k}]`, v);
        });
      } else {
        append(key, value);
      }
    }
  };
  Object.entries(params).forEach(([key, value]) => {
    process(key, value);
  });
  if (qs.length > 0) {
    return `?${qs.join("&")}`;
  }
  return "";
};
var getUrl = (config, options) => {
  const encoder = config.ENCODE_PATH || encodeURI;
  const path = options.url.replace("{api-version}", config.VERSION).replace(/{(.*?)}/g, (substring, group) => {
    if (options.path?.hasOwnProperty(group)) {
      return encoder(String(options.path[group]));
    }
    return substring;
  });
  const url = `${config.BASE}${path}`;
  if (options.query) {
    return `${url}${getQueryString(options.query)}`;
  }
  return url;
};
var getFormData = (options) => {
  if (options.formData) {
    const formData = new FormData();
    const process = (key, value) => {
      if (isString(value) || isBlob(value)) {
        formData.append(key, value);
      } else {
        formData.append(key, JSON.stringify(value));
      }
    };
    Object.entries(options.formData).filter(([_, value]) => isDefined(value)).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => process(key, v));
      } else {
        process(key, value);
      }
    });
    return formData;
  }
  return void 0;
};
var resolve = async (options, resolver) => {
  if (typeof resolver === "function") {
    return resolver(options);
  }
  return resolver;
};
var getHeaders = async (config, options) => {
  const [token, username, password, additionalHeaders] = await Promise.all([
    resolve(options, config.TOKEN),
    resolve(options, config.USERNAME),
    resolve(options, config.PASSWORD),
    resolve(options, config.HEADERS)
  ]);
  const headers = Object.entries({
    Accept: "application/json",
    ...additionalHeaders,
    ...options.headers
  }).filter(([_, value]) => isDefined(value)).reduce((headers2, [key, value]) => ({
    ...headers2,
    [key]: String(value)
  }), {});
  if (isStringWithValue(token)) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (isStringWithValue(username) && isStringWithValue(password)) {
    const credentials = base64(`${username}:${password}`);
    headers["Authorization"] = `Basic ${credentials}`;
  }
  if (options.body !== void 0) {
    if (options.mediaType) {
      headers["Content-Type"] = options.mediaType;
    } else if (isBlob(options.body)) {
      headers["Content-Type"] = options.body.type || "application/octet-stream";
    } else if (isString(options.body)) {
      headers["Content-Type"] = "text/plain";
    } else if (!isFormData(options.body)) {
      headers["Content-Type"] = "application/json";
    }
  }
  return new Headers(headers);
};
var getRequestBody = (options) => {
  if (options.body !== void 0) {
    if (options.mediaType?.includes("/json")) {
      return JSON.stringify(options.body);
    } else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
      return options.body;
    } else {
      return JSON.stringify(options.body);
    }
  }
  return void 0;
};
var sendRequest = async (config, options, url, body, formData, headers, onCancel) => {
  const controller = new AbortController();
  const request2 = {
    headers,
    body: body ?? formData,
    method: options.method,
    signal: controller.signal
  };
  if (config.WITH_CREDENTIALS) {
    request2.credentials = config.CREDENTIALS;
  }
  onCancel(() => controller.abort());
  return await fetch(url, request2);
};
var getResponseHeader = (response, responseHeader) => {
  if (responseHeader) {
    const content = response.headers.get(responseHeader);
    if (isString(content)) {
      return content;
    }
  }
  return void 0;
};
var getResponseBody = async (response) => {
  if (response.status !== 204) {
    try {
      const contentType = response.headers.get("Content-Type");
      if (contentType) {
        const jsonTypes = ["application/json", "application/problem+json"];
        const isJSON = jsonTypes.some((type) => contentType.toLowerCase().startsWith(type));
        if (isJSON) {
          return await response.json();
        } else {
          return await response.text();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  return void 0;
};
var catchErrorCodes = (options, result) => {
  const errors = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    ...options.errors
  };
  const error = errors[result.status];
  if (error) {
    throw new ApiError(options, result, error);
  }
  if (!result.ok) {
    const errorStatus = result.status ?? "unknown";
    const errorStatusText = result.statusText ?? "unknown";
    const errorBody = (() => {
      try {
        return JSON.stringify(result.body, null, 2);
      } catch (e) {
        return void 0;
      }
    })();
    throw new ApiError(
      options,
      result,
      `Generic Error: status: ${errorStatus}; status text: ${errorStatusText}; body: ${errorBody}`
    );
  }
};
var request = (config, options) => {
  return new CancelablePromise(async (resolve2, reject, onCancel) => {
    try {
      const url = getUrl(config, options);
      const formData = getFormData(options);
      const body = getRequestBody(options);
      const headers = await getHeaders(config, options);
      if (!onCancel.isCancelled) {
        const response = await sendRequest(config, options, url, body, formData, headers, onCancel);
        const responseBody = await getResponseBody(response);
        const responseHeader = getResponseHeader(response, options.responseHeader);
        const result = {
          url,
          ok: response.ok,
          status: response.status,
          statusText: response.statusText,
          body: responseHeader ?? responseBody
        };
        catchErrorCodes(options, result);
        resolve2(result.body);
      }
    } catch (error) {
      reject(error);
    }
  });
};

// generated/services/DefaultService.ts
var DefaultService = class {
  /**
   * @param id
   * @returns any Retrieve the User
   * @throws ApiError
   */
  static getUser(id) {
    return request(OpenAPI, {
      method: "GET",
      url: "/user/{id}",
      path: {
        "id": id
      }
    });
  }
  /**
   * @param id
   * @returns any Retrieve the User
   * @throws ApiError
   */
  static postUser(id) {
    return request(OpenAPI, {
      method: "POST",
      url: "/user/{id}",
      path: {
        "id": id
      }
    });
  }
};

// index.ts
async function main() {
  const res = await DefaultService.getUser("123123");
  console.log(res);
}
main();
