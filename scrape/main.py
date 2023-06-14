import requests
from bs4 import BeautifulSoup
import json
import os


url = "https://www.sailusfood.com/categories/non_vegetarian_recipes/indian_chicken_recipes/"

print(requests.get(url))
