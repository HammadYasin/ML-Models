# Import flask and datetime module for showing date and time
from flask import Flask
import datetime
 
x = datetime.datetime.now()
 
# Initializing flask app
app = Flask(__name__)
 
 
# Route for seeing a data
@app.route('/data')
def get_iris():

    import pandas as pd
    import json
    path ='https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv'
    iris = pd.read_excel("Book1.xlsx")
    #iris = iris.to_json(orient='records')
    #iris = pd.read_json(iris,orient ='columns')
    #iris = pd.read_csv(path)
    iris= iris.to_dict()
    # return jsonify({
    #     "message": "Iris Dataset",
    #     "data": iris.to_dict()
    # })
    return iris
 
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)