# Interface
class Animal:
    def __init__(self,name):
        self.name = name
    def speak(self):
        return

# Class 1
class Dog(Animal):
    def __init__(self,name):
        super().__init__(name)

    def speak(self):
        return ("bark")

# Class 2
class Cat(Animal):
    def __init__(self,name):
        super().__init__(name)
    def speak(self):
        return ("meow")

# Factory 예시
def createAnimal(animalType,name):
    if (animalType == "Cat"):
        return Cat(name)
    elif (animalType == "Dog"):  # Fixed typo here too
        return Dog(name)
    else:
        return None

kitty = createAnimal("Cat","kitty")
barry = createAnimal("Dog","barry")
print(kitty.speak()) # prints "meow"
print(barry.speak()) # prints "bark"