# Advanced Analytics Use Cases

Welcome to the **Advanced Analytics Use Cases** project developed by the Data Science team at **Ascend Solutions Limited**. This open-source project showcases four predictive models: **Heart Attack Prediction**, **Weather Type Prediction**, **Diabetes Prediction**, and **Brain Tumor Detection**.

## Features

- **Heart Attack Prediction**: Predict the likelihood of a heart attack based on input parameters.
- **Weather Type Prediction**: Classify the weather into one of four conditions: Cloudy, Rainy, Snowy, and Sunny.
- **Diabetes Prediction**: Assess the probability of diabetes based on various input metrics.
- **Brain Tumor Detection**: Identify the presence of a brain tumor from medical images using a computer vision model built with TensorFlow.

## Technology Stack

- **Frontend**: React
- **Backend**: Flask (APIs)
- **Machine Learning Framework**: TensorFlow (for Brain Tumor Detection)

## Installation

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ML-Models.git
    ```

2. Navigate to the frontend directory:
    ```bash
    cd ML-Models
    ```

3. Install the necessary npm packages:
    ```bash
    npm install --force
    ```

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd ML-Models/backend
    ```

2. Install Python and Flask:
    ```bash
    pip install flask
    ```

3. Install additional Python dependencies:
    ```bash
    pip install pandas numpy pickle
    ```

4. Install TensorFlow for the Brain Tumor Detection model:
    ```bash
    pip install tensorflow
    ```

5. (Optional) Review the [TensorFlow installation guide](https://www.tensorflow.org/install) for platform-specific instructions.

### Proxy Configuration

If needed, update the Flask configuration to change the proxy to host locally on a different port, as Flask and React cannot be hosted on the same port.

## Running the Application

1. **Start the Flask Backend**:
    ```bash
    python server.py
    ```

2. **Start the React Frontend**:
    ```bash
    npm start
    ```

## Contributing

We welcome contributions! Please feel free to fork the project, submit pull requests, or open issues to suggest improvements or report bugs.

## License

This project is open source. Please refer to the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or inquiries, feel free to reach out to the Data Science team at Ascend Solutions Limited:

- Hammad Yasin: [hammad.yasin@ascend.com.sa](mailto:hammad.yasin@ascend.com.sa)
- Amir Saeed: [amir.saeed@ascend.com.sa](mailto:amir.saeed@ascend.com.sa)
- Musharraf Tameer: [musharraf.tameer@ascend.com.sa](mailto:musharraf.tameer@ascend.com.sa)

---

Happy analyzing!