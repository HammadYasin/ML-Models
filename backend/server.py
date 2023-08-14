from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample data
items = []

@app.route('/heart', methods=['POST'])
def heart():
    
    request_data = request.json  # Get JSON data from the request
    import pickle
    import pandas as pd
    filename = 'Class_heart.sav'
    model = pickle.load(open(filename, 'rb'))
    data = pd.DataFrame([request_data])
    #excel_filename = 'output.xlsx'
    #data.to_excel(excel_filename, index=False)
    class_names = ['No Heart Attack', 'Heart Attack']
    output = model.predict(data)
    result = class_names[output[0]]
    return result

@app.route('/diabetes', methods=['POST'])
def diabetes():
    global items
    
    request_data = request.json  # Get JSON data from the request
    import pickle
    import pandas as pd
    filename = 'diabetes_xgb_model.sav'
    model = pickle.load(open(filename, 'rb'))
    data = pd.DataFrame([request_data])
    #excel_filename = 'output.xlsx'
    #data.to_excel(excel_filename, index=False)
    class_names = ['No Diabetes', 'Diabetes']
    output = model.predict(data)
    result = class_names[output[0]]
    return result

if __name__ == '__main__':
    app.run(debug=True)
