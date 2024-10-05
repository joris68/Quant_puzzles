import csv
import random
import pandas as pd


all_dors = [1, 2, 3]
car_is_in = [1, 2, 3]
initial_choice = [1, 2, 3]
switch = [True, False]


def monty_opens(car_in , door_chosen_initially) -> int:
    if(car_in == door_chosen_initially):
        remaining = []
        for x in all_dors:
            if x != car_in: remaining.append(x)
        index = choose_from_two()
        return remaining[index]
    else:
        for value in all_dors:
            if value != car_in and value != door_chosen_initially:
                return value


def end_door(inital : int,  will_switch: bool, opened_door):
    if(will_switch):
       for x in all_dors:
           if x != inital and x != opened_door:
               return x
    else:
       return inital
   

def has_won(car_door, end_door) -> bool:
    return car_door == end_door


def choose_from_three() -> int:
    rand = random.random()
    if rand < 0.33:
       return 0
    elif rand < 0.66 and rand >= 0.33:
       return 1
    else:
       return 2
       

# returns the random index
def choose_from_two() -> int:
  if random.random() < 0.5:
        return 0
  else:
     return 1


def simulate_shows(n_shows) -> list:
    shows = []
    for i in range(n_shows):
        intial_door_choice = initial_choice[choose_from_three()]
        car_In = car_is_in[choose_from_three()]
        door_gets_opened = monty_opens(car_In, intial_door_choice)
        will_switch = switch[choose_from_two()]
        door_at_end = end_door(intial_door_choice, will_switch, door_gets_opened)
        won = has_won(car_In, door_at_end)
        shows.append([intial_door_choice, car_In, door_gets_opened, will_switch, door_at_end, won])
    
    return pd.DataFrame(shows, columns=['inital_choice', 'car_in', 'door_gets_opened', 'will_switch', 'end_door' ,'has_won' ])

def calc_probabilites(df):
    num_rows = df.shape[0]
    



frame = simulate_shows(100)
print(frame)

