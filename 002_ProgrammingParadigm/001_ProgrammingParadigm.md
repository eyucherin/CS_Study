# Programming Paradigm

Programming Paradigm vs Design Patterns:

- 프로그래밍 패러다임은 더 높은 수준의 추상화에 있으며 프로그래밍의 전반적인 철학에 관한 것.
- 디자인 패턴은 더욱 세분화되어 있으며 특정 패러다임이나 컨텍스트 내에서 반복되는 특정 문제와 관련이 있음.

## 용어:

- **Overloading**: 같은 이름을 가진 메서드를 여러게 두는것.
- **Overiding**: 상의 클라스에서 정의한 메서드를 하위 클라스가 재정의 하는것.
- **Higher Order Functions(고차함수)**: 다른 함수를 매개변수로 받아들이거나, 함수를 결과로 반환하는 함수

### 1. Imperative Programming (명령형)
- ex) OOP, Procedural
- 단계별로 프로그램이 어떻게 동작해야 하는지를 지정합
- **어떻게**: 어떻게 프로그램이 돌아갔으면 하는지.

```python
const nums = [1,4,3,6,7,8,9,2]
const result = []

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 5) result.push(nums[i])
}

console.log(result) // Output: [ 6, 7, 8, 9 ]
```

### 2. Declarative Programming(선언형)

- ex) Functional Programming
- 프로그래머가 원하는 결과를 선언하고, 컴퓨터가 그 결과를 얻기 위해 어떻게 해야 하는지를 결정하는 프로그래밍 방식
- 선언형 프로그래밍은 "무엇"을 해야 하는지에 중점을 둔다.
- 작은 함수들을 블럭 처럼 쌓아 로직을 구현하고, 재사용성을 높인다.
- **무엇을**: 어떤 결과값을 원하는지.


```python
pourIngredients()
mixAndTransferToMold()
cookAndLetChill()
```

### 3. Object Oriented Programming(객체 지향 프로그래밍)

- 데이터와 기능을 하나로 묶어 "객체"라는 단위로 프로그램을 구성하는 방법.
- OOP의 주요 개념에는 캡슐화(Encapsulation), 상속(Inheritance), 다형성(Polymorphism), 그리고 추상화가(Abstraction) 있음.

  - **캡슐화**:사로 연관있는 데이터와 함수들을 하나의 캐술로 만들어 코드의 형태를 외부로부터 알 수없게 하다.

    - **데이터를 외부로부터 보호하는 것**

  - **추상화**: 불필요한 세부 사항들은 제거하고 가장 본질적이고 공통적인 부분만을 추출함.

  - **상속**: 기존의 클래스를 재활용하여 새로운 클래스를 작성하는 문법.

  - **다형성**: 어떤 객체의 속성이나 기능이 상황에 따라 여러 가지 형태를 가질 수 있는 성질. 하나의 매서드나 클라스가 다양한 방법으로 동작함.

- OOP 설계 원칙(SOLID):SOLID 객체 지향 원칙을 적용하면 코드를 **확장**하고 **유지 보수 관리하기가** 더 쉬워지며, 불필요한 복잡성을 제거해 리팩토링에 소요되는 시간을 줄임으로써 프로젝트 개발의 생산성을 높일 수 있다.

  - SRP(Single Responsibility Principle): 단일 책임 원칙

    - 하나의 클래스는 하나의 기능 담당하여 하나의 책임을 수행하는데 집중되도록 클래스를 따로따로 여러개 설계하라는 원칙

  - OCP(Open Closed Principle): 개방 폐쇄 원칙:
    - 기존의 코드를 변경하지 않고 기능을 수정하거나 추가할 수 있도록 설계해야 함
    - We should be able to add new functionality without touching the existing code for the class.
    - 자주 변화하는 부분을 추상화함으로써 기존 코드를 수정하지 않고도 기능을 확장할 수 있도록 함으로써 유연함을 높이는 것이 핵심이다.
  - LSP(Listov Substitution Principle): 리스코프 치환 원칙
  - ISP(Interface Segregation Principle): 인터페이스 분리 원칙
    - ISP 원칙은 인터페이스를 각각 사용에 맞게 끔 잘게 분리해야한다는 설계 원칙
  - DIP(Dependency Inversion Principle): 의존 역전 원칙

    - 구현 클래스에 의존하지 말고, 인터페이스에 의존

- 4) ### Procedural Programming(절차지향프로그래밍)
    - 물이 위에서 아래로 흐르는 것처럼 순차적인 처리가 중요시 되며 프로그램 전체가 유기적으로 연결되도록 만드는 프로그래밍 기법
    - Looping in procedural languages is done via a for/while/foreach loop. A purely functional language will not have any loop functionality; looping will be done via recursion, where you call a function from within itself. So in procedural if you want to loop through an array you might have