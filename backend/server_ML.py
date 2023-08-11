# Import flask and datetime module for showing date and time
from flask import Flask,json, render_template, request
import datetime
 
x = datetime.datetime.now()
 
# Initializing flask app
app = Flask(__name__)
 
 
# Route for seeing a data
@app.route('/data', methods=["POST"])
def get_result():
    import pickle
    import pandas as pd
    import json
    filename = 'Class_heart.sav'
    model = pickle.load(open(filename, 'rb'))
    data = pd.DataFrame(request.json)
    class_names = ['No Heart attack', 'Heart attack']
    output = model.predict(data)
    result = class_names[output[0]]
    return result
 
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)