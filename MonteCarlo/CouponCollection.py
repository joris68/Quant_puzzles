"""
Exercises for Monte Carlo Simulations: Coupon Collection

Goal: Find E(X) : X := the sum of all bought 
"""
import random
import matplotlib.pyplot as plt
import numpy as np

class CouponCollection:

    # empty array reprsents that every letter is uniformly distributed
    def __init__(self, number_of_trials, word_to_collect, probs=[]):
        self.number_of_trials = number_of_trials
        self.word_to_collect = word_to_collect
        if probs:
            self.probs = probs
        else:
            self.probs = []
    
    """
    E(X) : X := the number of all collected coupons in sum
    E(Xi) : Xi := the number of open packages until to get the nth distinct item ort letter

    We can use the Expected Value of the geometric Mean (1 / prob to obtain the nth distict letter)

    """
    def solve_analytical(self):
        if len(self.probs) == 0:
            # uniformly distributed
            number_of_letters = len(self.word_to_collect)
            probabilities = [x / number_of_letters for x in range(number_of_letters, 0, -1) ]
            print(probabilities)
            # sum over the geometric mean
            print("Analytical Solution: " + str(self.__geometric_means(probabilities)))
        else:
            print("Analytical Solution: " + str(self.__geometric_means(self.probs)))

    # still missing the analytical solution for different probabilities
    def __geometric_means(self, probs):
        result = 0
        for x in probs:
            result += 1/x
        return result


    def __random_letter(self) -> int:
        rand_num = random.random()
        if len(self.probs) == 0:
            fraction = 1 / len(self.word_to_collect)
            category = int(rand_num / fraction)
            return category
        else:
            return np.random.choice(len(self.probs), p=self.probs)

    def perform_experiment_and_vizualize(self):
        boxes = self.__simulate()
        print("This is the mean: " + str(np.mean(boxes)))
        self.__vizualize(boxes)
        
    def __simulate(self):

        boxes_per_customer = []

        for x in range(self.number_of_trials):
            letters_dict = {}
            counter = 0
            while len(letters_dict) < len(self.word_to_collect):
                rand_index = self.__random_letter()
                rand_letter = self.word_to_collect[rand_index]
                counter += 1 
                if  not rand_letter in letters_dict:
                    letters_dict[rand_letter] = 1

            
            boxes_per_customer.append(counter)
        
        return boxes_per_customer

    def __vizualize(self, boxes_per_customer):
        plt.hist(boxes_per_customer, bins = len(self.word_to_collect) * 2, density=True)
        plt.xlabel('Value')
        plt.ylabel('Density')
        plt.title('Coupon Collection')
        plt.show()


if __name__ == '__main__':
    # uniformly distributes letters
    # c1 = CouponCollection(1000, "MILK")
    # c1.solve_analytical()
    # c1.perform_experiment_and_vizualize()

    c2 = CouponCollection(1000, "MILK", [0.1, 0.3, 0.5, 0.1])
    c2.solve_analytical()
    c2.perform_experiment_and_vizualize()















