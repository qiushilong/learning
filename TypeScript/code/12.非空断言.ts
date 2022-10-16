const el: HTMLElement = document.querySelector("#app") as HTMLElement;

// 如果设置为 Element | null ，则编译器关于 Element 的操作不能提示方法
// 因为 null 时会报错
// 如果明确元素存在不可能为 null 时，添加 as HTMLElement

// 非空断言（添加 !）：明确不可能为 null
const el2: HTMLElement = document.querySelector("#app")!;
