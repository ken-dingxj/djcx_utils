class dt{
    constructor(){};
    /**
	 * trim 字符串去除空格
	 * @param str {String} 需要处理的字符串
	 * @param type {Boolean} 是否去除所有空格
	 */
	trim(str: string, type: boolean): string {
		return type ? str.replace(/\s+/g, '') : str.replace(/^\s+|\s+$/g, '');
	}
}

export default dt;