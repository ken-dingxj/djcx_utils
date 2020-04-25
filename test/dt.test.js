/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2020-04-25 13:47:13
 * @LastEditTime: 2020-04-25 15:20:17
 * @LastEditors: dingxuejin
 */
import Dt from "../dist/utils.js";
const dt = new Dt();
test("trim 1", () => {
  expect(dt.trim(" abc ")).toBe("abc");
});

test("trim 2", () => {
  expect(dt.trim(" a b c ", true)).toBe("abc");
});
