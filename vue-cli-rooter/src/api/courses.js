//模拟异步数据调用
export function getCourses() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([{ "name": "项目管理" }, { "name": "二手商城" }]);
        }, 2000);
    });
}