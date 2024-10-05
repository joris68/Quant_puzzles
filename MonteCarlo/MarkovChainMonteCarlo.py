"""
Random Walk on a Graph:
   -  Time Imvariant Markov Chains
   - the probability only depends on the current status of the system
   - from one state it can move to a neighborhood of states


"""
from functools import reduce
import pandas as pd
import numpy as np

class MarkovChainRandomWalk:

    def __init__(self, transition_matrix : list[list[float]], starting_state: int, number_of_trials: int, number_of_steps : int):
        if(self.__check_transition_matrix(transition_matrix)):
            self.starting_state = starting_state
            self.transition_matrix = transition_matrix
            self.number_of_trials = number_of_trials
            self.states = len(transition_matrix)
            self.steps = number_of_steps
            self.adjency_list_repr = self.__convert_to_adjency_list(transition_matrix)
        else:
            raise Exception("Wrong matrix bro")
    

    def __row_to_tuple_list(self ,row):
        res = []
        for x in range(len(row)):
            if row[x] == 0:
                continue
            else:
                res.append((x + 1 ,row[x]))
        return res


    def __convert_to_adjency_list(self, matrix : list[list[float]]):
        res = {}
        for x in range(len(matrix)):
            res[x +1] = self.__row_to_tuple_list(matrix[x])
        return res


    def __check_transition_matrix(self, matrix : list[list[float]]) -> bool:
        for x in matrix:
            res = reduce(lambda a,b : a + b, x, 0)
            if res != 1:
                return False
        return True
    
    # returns the next state given the current  using the probs from the neighborhood
    def  __sample_states(self, current_state: int) -> int:
        neighborhood = self.adjency_list_repr[current_state]
        a = [x[1] for x in neighborhood]
        index_for_next_state = np.random.choice(len(neighborhood), p=a)
        return neighborhood[index_for_next_state][0]

        
    
    def simulate(self):
        chain_instances = []

        for x in range(self.number_of_trials):
            chain_run = []
            curr = self.starting_state
            chain_run.append(curr)

            for x in range(self.steps):
               next_state =  self.__sample_states(curr)
               curr = next_state
               chain_run.append(next_state)
            
            chain_instances.append(chain_run)
        
        return chain_instances
    
    def get_invariant_distribution(self):
        starting_vector = [0 ] * self.states
        starting_vector[self.starting_state -1] = 1

        curr = starting_vector

        for x in range(self.steps):
            next_vec = np.matmul(curr, self.transition_matrix)
            curr = next_vec
            print(next_vec)
        

        
if __name__ == "__main__":
    chain = MarkovChainRandomWalk([[0.3, 0.2, 0.5], [0.4, 0.3, 0.3], [0.3, 0.4, 0.3]], 1, 10, 10)
    #chain.get_invariant_distribution()
    pd = chain.simulate()
    print(pd)









    

    

