import numpy as np
import pandas as pd
import yfinance as yf
import matplotlib.pyplot as plt

RISKY_ASSET = 'MSFT'
START_DATE = "2019-01-01"
END_DATE = "2019-07-31"


df = yf.download(RISKY_ASSET, START_DATE, END_DATE, True)

# calculate daily returns
adj_close = df['Adj Close']
returns = adj_close.pct_change().dropna()
returns.plot(title="hello")