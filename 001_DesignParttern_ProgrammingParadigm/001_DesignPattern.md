# Design Patterns

## 용어:

- Decoupling: make the features of a formal system as independent as possible from each other
  - Loosely Coupled: Less Interdependency
  - Tightly Coupled: More Interdependency

### Singleton Pattern:

- **하나의 클라스에 오직 하나의 인스턴스만 가지고있음**.
- **장점**:하나의 인스턴스를 여러 모듈에 공유하기 때문에 인스턴스 생성할 때 드는 비용이 줄어든다.
- **단점**:의존성(Coupling)이 높아짐, TDD를 할때 걸림돌이 된다.
- ex. 자바스트립트 new Object()
- 데이터베이스 모듈에 많이 쓰인다.

### Factory Pattern:

- 여러 개의 서브 클래스를 가진 슈퍼 클래스가 있을 때 인풋에 따라 하나의 자식 클래스의 인스턴스를 리턴해주는 방식 --> 인풋에 따라 어떤 객체를 생성할껀지 결정함.
- **장점**:클라이언트와 구현 객체들 사이에 추상화를(Abstraction) 제공함.
- **단점**:추가 클라스와 인터페이스를 만들며 시스템의 복잡도가 늘어날 수 있다.


