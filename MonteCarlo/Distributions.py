"""
The binomial distribution:

Because Expectation is linear: the value of a binomial Variable is the sum of the expectation of n bernoulli trials

E(X) = np

Var(X) = n * p * q
"""


from abc import ABC, abstractmethod

class Probability_Distribution(ABC):

    def __init__(self):
        pass
    
    @abstractmethod
    def calc_expected_value(self):
        pass
    
    @abstractmethod
    def calc_variance_value(self):
        pass

    @abstractmethod
    def get_sample(self):
        pass


"""
The binomial distribution:

Because Expectation is linear: the value of a bernoulli Variable is the sum of the expectation of n bernoulli trials

E(X) = np

Var(X) = n * p * q
"""

import random
import numpy as np

class Binomial_Distribution(Probability_Distribution):
    
    def __init__(self, p_success, trials):
        super().__init__()
        self.p_success = p_success
        self.trials = trials
    
    def calc_expected_value(self):
        return self.p_success * self.trials

    def calc_variance_value(self):
        return self.p_success * self.trials * (1 - self.p_success)

    def get_sample(self):
        rand = random.random()
        if(rand < self.p_success):
            return 1
        else:
            return 0

    
"""
The poisson distribution:
    - When looking at a bournoulli trial for every small time amount

    - not only for time but also for space

E(X): lambda * time
Var(X) : lambda * time

(a) The number of events occurring in non-overlapping intervals are independent.
(b) The probability of exactly one event in a sufficiently short interval of length . h
is approximately.λh.
(c) The probability of two or more events in a sufficiently short interval is negligible.


"""
class Poisson_Distribution(Probability_Distribution):
    
    def __init__(self, lam, time):
        super.__init__()
        self.lam = lam
        self.time = time
    
    def calc_variance_value(self):
        return self.lam * self.time
    
    def calc_expected_value(self):
        return self.lam * self.time

    def get_sample(self):
        pass
    

if __name__=="__main__":
    pass
