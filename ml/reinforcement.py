from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
import xgboost as xgb

# Initialize Flask app
app = Flask(__name__)

# Load the trained XGBoost model
model = xgb.Booster()
model.load_model('xgboost_model.model')

# Define function to get input
def get_input(input_array):
    input_data = {}
    input_data['Age'] = int(input_array[0])
    input_data['Name_of_Labour'] = input_array[1]
    input_data['Experience'] = int(input_array[2])
    input_data['Lift_Weight'] = int(input_array[3])
    input_data['Size_Length'] = int(input_array[4].split('x')[0])
    input_data['Size_Width'] = int(input_array[4].split('x')[1])
    input_data['Availability_Of_Crane'] = input_array[5]
    input_data['Height'] = int(input_array[6])
    input_data['Wind_Speed'] = int(input_array[7])
    input_data['Temperature'] = int(input_array[8])
    input_data['Humidity'] = int(input_array[9])
    input_data['Safety_status'] = input_array[10]
    input_data['Health_Status'] = input_array[11]
    input_data['Weather_Condition'] = input_array[12]
    input_data['Site_Logistics'] = input_array[13]
    input_data['Availability_of_scaffold'] = input_array[14]
    input_data['Task'] = input_array[15]
    input_data['Rod_Diameter'] = input_array[19]  # Remove 'mm' and convert to int
    input_data['Rod_Length'] = input_array[20]
    return input_data

@app.route('/predictrm', methods=['POST'])
def predict():
    # Load the dataset to determine categorical columns
    data = pd.read_csv('reinforcement.csv')
    
    # Get input data from JSON request
    input_array = request.json['input_array']
    
    # Get user input
    input_data = get_input(input_array)

    # Create a DataFrame from input data
    input_df = pd.DataFrame([input_data])

    # Perform one-hot encoding for categorical variables
    input_df = pd.get_dummies(input_df, columns=['Name_of_Labour', 'Availability_Of_Crane', 'Weather_Condition', 
                                                 'Site_Logistics', 'Availability_of_scaffold', 'Task'])

    # Convert remaining string columns to numerical representations
    input_df['Safety_status'] = input_df['Safety_status'].map({'Excellent': 3, 'Good': 2, 'Average': 1})
    input_df['Health_Status'] = input_df['Health_Status'].map({'Fit': 3, 'Overweight': 2, 'Asthma': 1})
    input_df['Rod_Diameter'] = input_df['Rod_Diameter'].apply(lambda x: int(x[:-2]))  # Remove 'mm' and convert to int

    # Ensure input features match the model's feature set
    missing_columns = set(data.columns) - set(input_df.columns)
    for column in missing_columns:
        input_df[column] = 0

    # Reorder columns to match the model's feature set
    input_df = input_df[data.columns]

    # Standardize features
    scaler = StandardScaler()
    input_df_scaled = scaler.fit_transform(input_df)

    # Create DMatrix object for input data
    dinput = xgb.DMatrix(input_df_scaled)

    # Make predictions
    predicted_productivity = float(model.predict(dinput)[0])

    # Return prediction as JSON response
    return jsonify({'predicted_productivity': predicted_productivity})

if __name__ == '__main__':
    app.run(debug=True)


'''
{
    "input_array": ["22", "Painter", "1", "200", "5x4", "Yes", "8", "7", "23", "62", "Good", "Fit", "Sunny", "Average", "No", "Reinforcement", "1000", "50", "200", "100", "10", "6"]
}
'''