class MyPromise {
  state: String;
  value: any;
  reason: any;
  onResolveCb: Function[];
  onRejectCb: Function[];

  constructor(executor?: any) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onResolveCb = [];
    this.onRejectCb = [];
    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onResolveCb.forEach((cb) => cb(value));
      }
    };
    const reject = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onResolveCb.forEach((cb) => cb(value));
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onResolve, onReject) {
    onResolve === (typeof onResolve === "function")
      ? onResolve
      : (value: any) => value;

    onReject =
      typeof onReject === "function"
        ? onReject
        : (reason: any) => {
            throw reason;
          };

    return new MyPromise((res, rej) => {
      const fulfilledCallback = () => {
        try {
          const result = onResolve(this.value);
          res(result);
        } catch (error) {
          rej(error);
        }
      };

      const rejectedCallback = () => {
        try {
          const result = onReject(this.reason);
          rej(result);
        } catch (error) {
          rej(error);
        }
      };
      if (this.state === "fulfilled") {
        setTimeout(fulfilledCallback, 0);
      } else if (this.state === "rejected") {
        setTimeout(rejectedCallback, 0);
      } else if (this.state === "pending") {
        this.onResolveCb.push(fulfilledCallback);
        this.onRejectCb.push(rejectedCallback);
      }
    });
  }
}

let a = new MyPromise((resolve, reject) => {
  resolve(a);
});
