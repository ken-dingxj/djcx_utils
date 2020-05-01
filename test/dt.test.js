/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2020-04-25 13:47:13
 * @LastEditTime: 2020-05-01 18:36:08
 * @LastEditors: dingxuejin
 */
import dt from "../dist/utils.js";

expect.extend({
  toBeWithinUuid(received, Reg) {
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
