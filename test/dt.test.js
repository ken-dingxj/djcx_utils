/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2020-04-25 13:47:13
 * @LastEditTime: 2020-08-03 16:11:50
 * @LastEditors: dingxuejin
 */
import dt from "../dist/utils.js";

expect.extend({
  toBeWithinUuid(received, Reg) {
    console.log(
      received
    );
    const pass = Reg.test(received);
    if (pass) {
      return {
        message: () => `expected ${received} is sucess`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} is faile`,
        pass: false,
      };
    }
  },
});

//trim
test("trim case1", () => {
  expect(dt.trim(" abc ")).toBe("abc");
});

test("trim case2", () => {
  expect(dt.trim(" a b c ", true)).toBe("abc");
});
//uuid
test("uuid case1", () => {
  let Reg = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/g;
  expect(dt.uuid()).toBeWithinUuid(Reg);
});

//getIps
test("getIp case1", () => {
  let Reg = /^([0,1]?\d{1,2}|2([0-4][0-9]|5[0-5]))(\.([0,1]?\d{1,2}|2([0-4][0-9]|5[0-5]))){3}$/g;
  expect(dt.getIp()).toBeWithinUuid(Reg);
});
