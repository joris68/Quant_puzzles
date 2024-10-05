"""
This is the one dimensional random walk.
We have two directions to go

- each step is bernoulli trial
- 


"""
import random
import matplotlib.pyplot as plt
import numpy as np

class RandomWalk:

    def __init__(self, number_experiments, steps, probs):
        self.number_of_experiments = number_experiments
        self.steps = steps
        self.probs = probs
    
    #TODO How do I Solve this analytically?

    def solve_analytical():
        pass
  
    
    # up -> 1 , down -> -1
    def __up_or_down(self) -> int:
        random_num = random.random()
        if random_num > self.probs[0]:
            return 1
        else:
            return -1

    def __simulate(self):
        result = []
        
        for x in range(self.number_of_experiments):
            steps_list = [0]
            for x in range(1, self.steps +1):
                new_step = self.__up_or_down()
                steps_list.append(steps_list[x-1] + new_step)
            
            result.append(steps_list)
        return result
    
    # calc mean and variance for the last position of the array
    def __calc_mean_and_variance(self, two_dim_array_list):
        last_entries = []
        number_series = self.number_of_experiments
        for x in two_dim_array_list:
            last_entries.append(x[-1])
        
        avg = np.mean(last_entries)
        variance = np.var(last_entries)
        print("The Average Endposition: " + str(avg) + "the variance" + str(variance))


    def __vizualize(self, two_dim_steps_array):
        plt.figure(figsize=(12, 6))
        for x in range(len(two_dim_steps_array)):
            plt.plot(two_dim_steps_array[x], label="series" + str(x))
        plt.legend()
        plt.xlabel('Date')
        plt.ylabel('Value')
        plt.title('Multiple Time Series Line Plot')
        plt.show()


    def perform_experiment_and_vizualize(self):
        list_of_lists = self.__simulate()
        self.__calc_mean_and_variance(list_of_lists)
        self.__vizualize(list_of_lists)


if __name__ == '__main__':
    
    c1 = RandomWalk(1000, 50, [0.6, 0.4])
    c1.perform_experiment_and_vizualize()