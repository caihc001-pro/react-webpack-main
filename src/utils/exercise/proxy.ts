export function createInterceptor(obj, name = "object") {
  return new Proxy(obj, {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);

      // 打印属性访问信息
      console.log(`访问属性: ${name}.${property.toString()} =`, value);

      // 记录到页面输出
      console.log(
        `访问属性: ${name}.${property.toString()} = ${JSON.stringify(value)}`
      );

      // 如果值是对象，则继续用Proxy包装
      if (value !== null && typeof value === "object") {
        return createInterceptor(value, `${name}.${property.toString()}`);
      }

      return value;
    },
  });
}
