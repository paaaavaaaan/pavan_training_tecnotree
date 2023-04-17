#Weather Program
import requests

API_KEY = "0ec137a97bcb3f90aedd68cebc125f9c" # replace with your own API key
URL = "https://api.openweathermap.org/data/2.5/weather"

def get_weather(city):
    params = {"q": city, "appid": API_KEY, "units": "metric"}
    response = requests.get(URL, params=params)
    if response.status_code == 200:
        data = response.json()
        weather = data["weather"][0]["description"].capitalize()
        temp = data["main"]["temp"]
        return f"The weather in {city} is {weather} and the temperature is {temp}°C."
    else:
        return f"Error: {response.status_code} {response.reason}"

city = input("Enter a city name: ")
print(get_weather(city))
