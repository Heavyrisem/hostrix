# 개요

## 목적
이 프로젝트는 hosts 파일을 관리하는 도구입니다.

## 기능
- hosts 파일 읽기
- hosts 파일 쓰기

- 레코드 추가, 수정, 삭제
- 레코드 활성화/비활성화 전환

- 섹션 추가, 수정, 삭제
- 섹션 활성화/비활성화 전환

## 상세
- hosts 파일을 섹션과 레코드 단위로 나누어 관리합니다.
- 섹션은 레코드의 집합으로, 각 섹션은 활성화/비활성화 상태를 가집니다.
- 레코드는 IP 주소와 도메인 이름의 쌍으로 구성됩니다.
- 레코드는 활성화/비활성화 상태를 가집니다.

- 각 섹션과 레코드는 UI를 통해 쉽게 추가, 수정, 삭제할 수 있습니다.
- 좌측 사이드바에서 섹션 목록을 탐색할 수 있습니다.
- 사이드바에서 섹션을 펼치면 해당 섹션의 레코드 목록이 표시됩니다.
- 섹션과 레코드는 사이드바에서 활성화/비활성화 상태를 전환할 수 있습니다.

- 섹션 추가는 사이드바에서 '+' 버튼을 클릭하여 수행합니다.
- 섹션을 선택하면 해당 섹션에 포함된 모든 레코드가 우측 monoco editor를 통해 표시됩니다.
- 레코드 읽기,추가,삭제,수정은 섹션을 선택한 후, 우측 메인 화면에 표시되는 monaco editor에서 수행합니다.
- 레코드는 "IP DOMAIN" 형식으로 입력합니다.

- 섹션과 레코드를 읽고 쓰는 규칙은 다음과 같습니다.


```
# hosts
0.0.0.0 aaa.com
### HOSTRIX-SECTION-START | 섹션이름
1.1.1.1 example.com
#2.2.2.2 example.org
### HOSTRIX-SECTION-END
```
- 이 hosts는 다음과 같이 파싱됩니다.
```typescript
[
  {ip: '1.1.1.1', domain: 'example.com', disabled: false},
  {ip: '2.2.2.2', domain: 'example.org', disabled: true}
]
```
- aaa.com은 섹션 영역 외부에 위치하므로 파싱될 때 무시됩니다.

```
# user input for section SAMPLE
1.1.1.1 example.com b.com
#2.2.2.2 example.org
```
- 위와 같은 섹션 정보가 입력되면 hosts에는 다음과 같이 저장됩니다.
```
# hosts
... original hosts information
### HOSTRIX-SECTION-START | SAMPLE
1.1.1.1 example.com
1.1.1.1 b.com
#2.2.2.2 example.org
### HOSTRIX-SECTION-END
```
- 만약 기존에 SAMPLE이라는 섹션이 존재한다면, 기존 섹션 body를 덮어씁니다.
