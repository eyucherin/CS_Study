# Subject
class Subject:
    def __init__(self):
        self._observers = []

    def add_observer(self, observer):
        if observer not in self._observers:
            self._observers.append(observer)

    def remove_observer(self, observer):
        self._observers.remove(observer)

    def notify_observers(self, message):
        for observer in self._observers:
            observer.update(message)

# Observer
class Observer:
    def __init__(self, name):
        self.name = name

    def update(self, message):
        print(f'{self.name} received message: {message}')

# Client Code
subject = Subject()

bob = Observer("Bob")
alice = Observer("Alice")

subject.add_observer(bob)
subject.add_observer(alice)

subject.notify_observers("Hello!")

subject.remove_observer(alice)

subject.notify_observers("Hello, again!")