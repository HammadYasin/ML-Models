from flask import Flask, request, jsonify
import flask
import tensorflow as tf
from keras.utils import img_to_array
from PIL import Image
import numpy as np
import io
import base64

app = Flask(__name__)

items = []

@app.route('/heart', methods=['POST'])
def heart():
    
    request_data = request.json
    import pickle
    import pandas as pd
    filename = 'Class_heart.sav'
    model = pickle.load(open(filename, 'rb'))
    data = pd.DataFrame([request_data])
    class_names = ['No Heart Attack', 'Heart Attack']
    output = model.predict(data)
    result = class_names[output[0]]
    return result

@app.route('/diabetes', methods=['POST'])
def diabetes():
    global items
    
    request_data = request.json
    import pickle
    import pandas as pd
    filename = 'diabetes_xgb_model.sav'
    model = pickle.load(open(filename, 'rb'))
    data = pd.DataFrame([request_data])
    class_names = ['No Diabetes', 'Diabetes']
    output = model.predict(data)
    result = class_names[output[0]]
    return result

@app.route('/weather', methods=['POST'])
def weather():
    global items
    
    request_data = request.json 
    import pickle
    import pandas as pd
    import numpy as np
    filename = 'weather_type.sav'
    model = pickle.load(open(filename, 'rb'))
    data = pd.DataFrame([request_data])
    data['Temperature'] = pd.to_numeric(data['Temperature'], errors='coerce')
    data['Humidity'] = pd.to_numeric(data['Humidity'], errors='coerce')
    data['Wind Speed'] = pd.to_numeric(data['Wind Speed'], errors='coerce')
    data['Precipitation (%)'] = pd.to_numeric(data['Precipitation (%)'], errors='coerce')
    data['Atmospheric Pressure'] = pd.to_numeric(data['Atmospheric Pressure'], errors='coerce')
    data['UV Index'] = pd.to_numeric(data['UV Index'], errors='coerce')
    data['Visibility (km)'] = pd.to_numeric(data['Visibility (km)'], errors='coerce')
    
    ################################## Feature Engineering##########################
    def celsius_to_fahrenheit(celsius):
        return (celsius * 9/5) + 32

    def fahrenheit_to_celsius(fahrenheit):
        return (fahrenheit - 32) * 5 / 9

    def calculate_heat_index(df, temp_col, humidity_col):
        T = celsius_to_fahrenheit(df[temp_col])
        R = df[humidity_col]
        
        HI = (
            -42.379 + 2.04901523 * T + 10.14333127 * R 
            - 0.22475541 * T * R - 6.83783e-3 * T**2 
            - 5.481717e-2 * R**2 + 1.22874e-3 * T**2 * R 
            + 8.5282e-4 * T * R**2 - 1.99e-6 * T**2 * R**2
        )
        
        return HI
    def calculate_wind_chill(row):
        T = row['Temperature']
        V = row['Wind Speed']
        wind_chill = (13.12 + 0.6215 * T 
                    - 11.37 * (V ** 0.16) 
                    + 0.3965 * T * (V ** 0.16))
        return wind_chill
    a = 17.27
    b = 237.7

    def calculate_alpha(T, RH):
        return (a * T) / (b + T) + np.log(RH / 100.0)
    def calculate_dew_point(row):
        alpha = calculate_alpha(row['Temperature'], row['Humidity'])
        return (b * alpha) / (a - alpha)
    data['Dew Point'] = data.apply(calculate_dew_point, axis=1)
    data['Heat Index'] = calculate_heat_index(data, 'Temperature', 'Humidity')
    data['Heat Index'] = fahrenheit_to_celsius(data['Heat Index'])
    data['Wind Chill'] = data.apply(calculate_wind_chill, axis=1)
    #######################################################################################

    output = model.predict(data)
    result = output[0]
    if result == 0:
        result = "Cloudy"
    elif result == 1:
        result = "Rainy"
    elif result == 2:
        result = "Snowy"
    elif result == 3:
        result = "Sunny"
    else:
        result = "Unknown weather type"
    return result

@app.route('/cholesterol', methods=['POST'])
def cholesterol():
    
    request_data = request.json
    import pickle
    import pandas as pd
    filename = 'cholesterol.sav'
    model = pickle.load(open(filename, 'rb'))
    data = pd.DataFrame([request_data])
    output = model.predict(data)
    value = output.item()
    return jsonify(value)  

@app.route('/tumor', methods=['POST'])
def tumor():
    global items
    def preprocess_image(image):
        image = image.resize((150, 150))
        if image.mode != 'RGB':
            image = image.convert('RGB')
        image = np.array(image)
        image = image / 255.0
        image = np.expand_dims(image, axis=0)
        return image
    try:
        data = flask.request.json
        encoded_image = data['image']
        decoded_image = base64.b64decode(encoded_image)
        image = Image.open(io.BytesIO(decoded_image))
        image = preprocess_image(image)
        model = tf.keras.models.load_model(r'Tumor.h5')
        predictions = model.predict(image)
        predicted_class_index = np.argmax(predictions, axis=1)[0]
        class_names = ['Glioma', 'Meningioma', 'No Tumor', 'Pituitary']
        predicted_class = class_names[predicted_class_index]
        probability = predictions[0][predicted_class_index] * 100
        response = {
            'prediction': predicted_class,
            'confidence': f'{probability:.2f} %'
        }
        return flask.jsonify(response)
    except Exception as e:
        return flask.jsonify({'error': str(e)})
    
@app.route('/skin', methods=['POST'])
def skin():
    model = tf.keras.models.load_model('skin.h5')
    CLASS_NAMES = ["Benign", "Malignant"]
    target_size = (224, 224)
    def image_to_num(image, target_size):
        img_resized = image.resize(target_size)
        return img_to_array(img_resized)
    def decode_base64_image(base64_str):
        image_data = base64.b64decode(base64_str)
        image = Image.open(io.BytesIO(image_data))
        return image
    try:
        data = request.get_json()
        base64_str = data['image']
        image = decode_base64_image(base64_str)
        img_array = image_to_num(image, target_size)
        img_array = np.expand_dims(img_array, axis=0)
        prediction = model.predict(img_array)
        result = CLASS_NAMES[np.where(prediction[0][0] >= 0.59, 1, 0)]
        confidence = (prediction[0][0] if result == "malignant" else 1 - prediction[0][0]) * 100
        return jsonify({
            "predicted_class": result,
            "confidence": f"{confidence:.2f}%"
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/lung', methods=['POST'])
def lung():
    target_size = (128, 128)
    CLASS_NAMES = ["NORMAL", "PNEUMONIA"]
    model = tf.keras.models.load_model('lung.h5')
    data = request.json
    base64_image = data.get("image")
    def prepare_image(base64_str):
        image_data = base64.b64decode(base64_str)
        image = Image.open(io.BytesIO(image_data))
        if image.mode != 'RGB':
            image = image.convert('RGB')
        image = image.resize(target_size)
        x = img_to_array(image)
        x = np.expand_dims(x, 0)
        return x
    if base64_image is None:
        return jsonify({"error": "No image provided"}), 400
    try:
        image_array = prepare_image(base64_image)
        prediction = model.predict(image_array)
        result = CLASS_NAMES[np.where(prediction[0][0] >= 0.75, 1, 0)]
        return jsonify({"prediction": result}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/alzheimer', methods=['POST'])
def alzheimer():
    try:
        model = tf.keras.models.load_model(r'alzheimer.h5')
        class_names = ['NonDemented', 'VeryMildDemented', 'MildDemented', 'ModerateDemented']
        data = request.json['image']
        image_data = base64.b64decode(data)
        image = Image.open(io.BytesIO(image_data))
        image = image.resize((224, 224))
        if image.mode != 'RGB':
            image = image.convert('RGB')
        image = np.array(image)
        image = image / 255.0
        image = np.expand_dims(image, axis=0)
        predictions = model.predict(image)
        predicted_class_index = np.argmax(predictions, axis=1)[0]
        predicted_class = class_names[predicted_class_index]
        probability = predictions[0][predicted_class_index] * 100
        result = {
            "predicted_class": predicted_class,
            "confidence": round(probability, 2)
        }
        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
