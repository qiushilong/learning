# type 和 interface 区别

## 扩展接口

**interface**

```ts
interface Animal {
  name: string;
}

interface Bear extends Animals {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
```

**type**

```ts
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};

const bear = getBear();
bear.name;
bear.honey;
```

## 重复声明

**interface**
interface 可以通过重复声明，向原有接口添加新字段

```ts
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```

**type**
类型创建后不能更改

```ts
type Window = {
  title: string;
};

type Window = {
  ts: TypeScriptAPI;
};

// Error: Duplicate identifier 'Window'.
```

## 其他
- interface 只能声明对象类型或函数类型；type 可以声明任意类型；
- type 不能参与声明合并；interface 可以；