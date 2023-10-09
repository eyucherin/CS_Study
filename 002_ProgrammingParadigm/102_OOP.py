# OOP method overriding
class Animal:
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

dog = Dog()
cat = Cat()

print(dog.speak())  # Woof!
print(cat.speak())  # Meow!

# method overloading
class Calculator:
    def product(self, x, y=None):
        if y is None:
            return x * x  # Return square of x
        else:
            return x * y  # Return product of x and y

calc = Calculator()
print(calc.product(5))     # 25 (because it's 5*5)
print(calc.product(5, 3)) # 15 (because it's 5*3)
