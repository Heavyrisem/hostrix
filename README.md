# Hostrix

## Electron IPC 통신 가이드

### 1. Electron IPC 모듈 구조

#### 1.1 모듈 선언 방법
`electron/modules` 디렉토리 아래에 새로운 모듈을 생성할 때 다음과 같은 구조를 따릅니다:

```typescript
// electron/modules/example/index.ts
const module = {
  exampleFunction: async (event: Electron.IpcMainInvokeEvent, ...args) => {
    // 함수 구현
    return result;
  },
} as const;

export default module;
```

#### 1.2 모듈 등록
1. `electron/modules/index.ts`에 새 모듈을 import
2. modules 객체에 새 모듈 추가
```typescript
import example from "./example";

const modules = { ...existingModules, ...example } as const;
```

### 2. React Query를 사용한 IPC 통신

#### 2.1 API 함수 선언
`src/features/[feature]/api.ts` 파일에 IPC 호출 함수를 선언합니다:

```typescript
export function exampleFunction(params: ExampleParams) {
  return window.ipc.invoke("exampleFunction", params);
}
```

#### 2.2 Query Key 정의
`src/features/[feature]/key.ts` 파일에 query key를 정의합니다:

```typescript
export const keys = {
  root: () => ["feature"] as const,
  example: () => [...keys.root(), "example"] as const,
};
```

#### 2.3 React Query Hook 생성
`src/features/[feature]/query.ts` 파일에 React Query hook을 정의합니다:

```typescript
// Query
export const exampleService = {
  queryKeys: keys.example,
  queryOptions: () =>
    queryOptions({
      queryKey: exampleService.queryKeys(),
      queryFn: exampleFunction,
    }),
};

// Mutation
export function useExampleMutation() {
  return useMutation({
    mutationKey: keys.example(),
    mutationFn: exampleFunction,
  });
}
```

#### 2.4 컴포넌트에서 사용

```typescript
// Query 사용
const { data } = useQuery(exampleService.queryOptions());

// Mutation 사용
const { mutate } = useExampleMutation();

const handleClick = () => {
  mutate(params, {
    onSuccess: (data) => {
      // 성공 처리
    },
  });
};
```

### 3. 타입 안전성

- `electron/modules/index.ts`에서 자동으로 생성되는 타입을 통해 IPC 통신의 타입 안전성이 보장됩니다.
- `src/vite-env.d.ts`에서 window.ipc 객체의 타입이 정의되어 있습니다.

### 4. 주의사항

1. 새로운 IPC 모듈 추가 시 `electron/modules/index.ts`에 반드시 등록해야 합니다.
2. API 함수는 항상 Promise를 반환해야 합니다.
3. Query key는 중복되지 않도록 주의해야 합니다.
4. Mutation 사용 시 적절한 에러 처리를 구현해야 합니다.
