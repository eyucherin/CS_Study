# Design Patterns

## 용어:

- Decoupling: make the features of a formal system as independent as possible from each other
  - Loosely Coupled: Less Interdependency
  - Tightly Coupled: More Interdependency
- CDN(Content Delivery Network): 각 사용자가 인터넷에 접속하는 곳과 가까운 곳에서 콘텐츠를 캐싱 또는 배포하는 서버 네트워크. 

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

### Observer Pattern:
- 어떤 클래스에 변화가 일어났을 때, 이를 감지하여 다른 클래스에 통보해주는 것이 observer 패턴.
- 주체(Subject): 관찰자들에게 상태 변화를 알리는 객체입니다. 관찰자를 추가, 삭제하거나 알림을 보내는 메소드를 가집니다.
- 관찰자(Observer): 주체의 상태 변화를 관찰하는 객체입니다. 주체의 상태가 변경될 때마다 업데이트되는 메소드를 가집니다.
- ex) 실시간 주식 시장 시스템에서 주식의 가격이 변동될 때마다 구독자에게 가격 업데이트를 알리는 경우에 관찰자 패턴을 사용할 수 있다. 여기서 **주식 시장 시스템은** '주체'가 되고, **구독자는** '관찰자'가 된다.
- **장점**:객체 간의 결합도(coupling)를 낮출 수 있고, 시스템의 확장성과 유연성이 향상. 효율 up --> 주체가 객체한테 계속 물어볼 필요없음. key board events. 
- **단점**:추가 클라스와 인터페이스를 만들며 시스템의 복잡도가 늘어날 수 있다.

### Proxy Pattern: 
 - Proxy Server: 특정 객체 접근 전에 proxy 객체 지나서 접근함. client가 proxy를 거쳐서 클래스 접근함.
 - 맨 처음 요청을 proxy 통해서 받음. 
 - security, caching, logging, 성능적으로 장점이 있다. 
 - proxy는 field 가지고있음, 본인의 인터페이스 타입 참조.
 - Proxy Caching: 트래픽을 줄이기 위해, 서버 요청하기보다 cache 안에 정보를 담아두고 캐시안에있는 정보를 요청한다.

 ### Iterator Pattern:
  - iterator 사용해서 collection 요소들을 접근할 수 있는 디자인 패턴. 
 ### Revealing Module (노출모듈) Pattern:
  - public, private같은 접근 제어다를 만드는 패턴. 

  ### MVC(Model View Controller) 
 - Model: 데이터
 - View:사용자에게 보여지는 부분, 즉 유저 인터페이스(User interface)를 의미
 - (INPUT)Controller: 모델과 뷰 사이를 이어주는 브릿지(bridge) 역할

 ### MVP(Model,View,Presenter) Pattern
 - Model: 데이터
 - (INPUT)View:사용자에게 보여지는 부분, 인풋 --> text,button 받아드려서 presenter로 넘김.
 - Presenter: 화면을 관리하는 부분을 책임진다. 어떤 유이를 그릴지 정해준다.

 ### MVVM(Model,View,View Model) Pattern
  - Model:데이터
  - (INPUT)View: 사용자에서 보여지는 UI 부분. View Model을 계속 관찰하고 input 값을 알린다. 
  - View-Model: 화면을 관리하지 않는다.

