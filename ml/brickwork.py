from flask import Flask, request, jsonify
import pandas as pd
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
    input_data['Size'] = input_array[4]
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
    input_data['Brick_Quantity'] = int(input_array[16])
    input_data['Cement_Quantity'] = int(input_array[17])
    input_data['Sand_Quantity'] = int(input_array[18])
    input_data['Water_Quantity'] = int(input_array[19])
    return input_data

@app.route('/predictbm', methods=['POST'])
def predict():
    # Get input data from JSON request
    input_array = request.json['input_array']
    
    # Get user input
    input_data = get_input(input_array)

    # Create a DataFrame from input data
    input_df = pd.DataFrame([input_data])

    # Load the dataset to determine categorical columns
    data = pd.read_csv('formwork.csv')

    # One-hot encode categorical variables
    categorical_columns = data.select_dtypes(include=['object']).columns
    input_df = pd.get_dummies(input_df, columns=categorical_columns, drop_first=True)

    # Ensure input features match the model's feature set
    missing_columns = set(data.columns) - set(input_df.columns)
    for column in missing_columns:
        input_df[column] = 0

    # Reorder columns to match the model's feature set
    input_df = input_df[data.columns]

    # Create DMatrix object for input data
    dinput = xgb.DMatrix(input_df)

    # Make predictions
    predicted_productivity = float(model.predict(dinput)[0])

    # Return prediction as JSON response
    return jsonify({'predicted_productivity': predicted_productivity})

if __name__ == '__main__':
    app.run(debug=True)

'''
{
   "input_array" : [22,"Painter",1,200,"5x4","Yes",8,7,23,62,"Good","Fit","Sunny","Average","No","Brickwork",2500,100,2000,500]
}
'''