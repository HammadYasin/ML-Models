from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample data
items = []

@app.route('/items', methods=['POST'])
def create_item():
    global items
    
    request_data = request.json  # Get JSON data from the request
    import pickle
    import pandas as pd
    import json
    filename = 'Class_heart.sav'
    model = pickle.load(open(filename, 'rb'))
    data = pd.DataFrame([request_data])
    #excel_filename = 'output.xlsx'
    #data.to_excel(excel_filename, index=False)
    class_names = ['No Heart Attack', 'Heart Attack']
    output = model.predict(data)
    result = class_names[output[0]]
    return result
if __name__ == '__main__':
    app.run(host='192.168.0.105',debug=True)
